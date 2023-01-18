import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { In, Repository } from "typeorm";
import Event from "src/events/event.entity";
import User from "src/users/user.entity";
import Game from "src/games/game.entity";
import Reward from "src/rewards/reward.entity";
import Attend from "src/attends/attend.entity";
import { totalmem } from "os";
import { response } from "express";
import Subscription from "src/subscriptions/subscription.entity";

const axios = require("axios");

@Injectable()
export default class ApisService {
  constructor(
    @InjectRepository(Event)
    private eventsRepository: Repository<Event>,
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    @InjectRepository(Game)
    private gamesRepository: Repository<Game>,
    @InjectRepository(Reward)
    private rewardsRepository: Repository<Reward>,
    @InjectRepository(Attend)
    private attendsRepository: Repository<Attend>,
    @InjectRepository(Subscription)
    private subscriptionsRepository: Repository<Subscription>
  ) {}

  async getAllEvents() {
    const events = await this.eventsRepository
      .createQueryBuilder("event")
      .getMany();
    const totalList = [];
    await Promise.all(
      events.map(async (item, index) => {
        // item.id;
        const users_num = await this.attendsRepository
          .createQueryBuilder()
          .where(`event_id = '${item.id}'`)
          .getCount();
        const event = await this.eventsRepository
          .createQueryBuilder("event")
          .leftJoinAndSelect("event.game", "game")
          .leftJoinAndSelect("event.audience", "audience")
          .leftJoinAndSelect("event.subscription", "subscription")
          .leftJoinAndSelect("event.rewards", "rewards")
          .leftJoinAndSelect("event.prizepool", "prizepool")
          .where(`event.id = '${item.id}'`)
          .getMany();
        console.log(event);
        const qrcode = require("qrcode-js");
        const base64 = qrcode.toDataURL(event[0].qr_code, 4);
        totalList.push({
          ...({ ...event[0], qr_code: base64 } || {}),
          users_num,
          url: event[0].qr_code,
        });
      })
    );
    return totalList;
  }

  async getEventById(id: number) {
    // const event = await this.eventsRepository.findOne(id);
    const event = await this.eventsRepository.find({
      where: {
        id: id,
      },
      relations: [
        "game",
        "audience",
        "user",
        "subscription",
        "prizepool",
        "rewards",
      ],
    });
    console.log(event);
    console.log(event[0].rewards);
    // const user = await this.usersRepository
    //   .createQueryBuilder("user")
    //   .leftJoinAndSelect("user.events", "event")
    //   .getOne();
    // const game = await this.gamesRepository
    //   .createQueryBuilder("game")
    //   .leftJoinAndSelect("game.events", "event")
    //   .getOne();
    const reward = await this.rewardsRepository
      .createQueryBuilder("reward")
      .leftJoinAndSelect("reward.events", "event")
      .getMany();
    console.log(reward);
    const qrcode = require("qrcode-js");
    const base64 = qrcode.toDataURL(event[0].qr_code, 4);
    console.log(event[0].game.id);
    const result = {
      SponsorID: event[0].user.id,
      SponsorName: event[0].user.name,
      SponsorLogoURL: event[0].user.logo,
      EventId: event[0].id,
      EventName: event[0].name,
      EventLocation: event[0].location,
      EventStartTimeDate: event[0].start_time,
      EventCompleteTimeDate: event[0].end_time,
      SponsorEventCoins: event[0].subscription.coins,
      GameId: event[0].game.id,
      GameName: event[0].game.name,
      TriviaId: event[0].trivia_id,
      Time_Limit: event[0].duration,
      EventGameType: event[0].game.type,
      EventVideoURL: event[0].sponsor_video_url,
      EventReward: event[0].rewards,
      EventRewardPool: event[0].prizepool,
      EventQRCodeURL: base64,
    };

    return result;
  }

  async getCoinById(id: number) {
    const events = await this.eventsRepository
      .createQueryBuilder("event")
      .leftJoinAndSelect("event.user", "user")
      .where(`user.id = '${id}'`)
      .getMany();
    if (!events || !events.length) {
      return 0;
    }

    // async createEvent(
    //   @Param() { gameId }: FindGameParams,
    //   @Param() { rewardId }: FindRewardParams,
    //   @Param() { audienceId }: FindAudienceParams,
    //   @Body() event: CreateEventDto,
    //   @Req() req: RequestWithUser
    // ): Promise<CreateEventDto> {
    // await Promise.all(
    //   events.forEach(async (item) => {
    //     const reward = this.rewardsRepository.findOne(item.reward);
    //     return total + Number(reward.coinvalue);
    //   })
    // );

    const sum = (
      await Promise.all(
        events.map(async (item) => {
          const subscription = await this.subscriptionsRepository.findOne(
            item.subscription
          );
          return Number(subscription.coins);
        })
      )
    ).reduce((total, item) => total + item, 0);

    const user = await this.usersRepository.findOne(id);

    return {
      SpnsorId: user.id,
      SponsorName: user.name,
      SponsorCoins: user.coins,
      SponsorCoinsUsed: user.coinsused,
      SponsorEventCoins: sum,
    };
    // return event;
  }

  async getAllRewards() {
    const rewards = await this.rewardsRepository.find();
    return rewards;
  }

  async getRewardsById(id: number) {
    const reward = await this.rewardsRepository.findOne(id);
    // const event = await this.eventsRepository
    //   .createQueryBuilder("event")
    //   .leftJoinAndSelect("event.reward", "reward")
    //   .getOne();
    return {
      RewardType: reward.type,
      RewardCategory: reward.category,
      RewardName: reward.name,
      RewardImageURL: reward.image_url,
      RewardDescription: reward.description,
      RewardCoinValue: reward.coinvalue,
      RewardRateLimit: reward.ratelimit,
      RewardTimeLimit: reward.timelimit,
    };
  }

  async getSponsorsById(id: number) {
    const user = await this.usersRepository.findOne(id);
    return {
      SponsorID: user.id,
      SponsorName: user.name,
      SponsorLogoURL: user.logo,
      SponsorAddress: {
        Street: user.street,
        Suite: user.suite,
        City: user.city,
        State: user.state,
        Zip: user.zip,
      },
      SponsorEmail: user.email,
      SponsorPhone: user.phone,
      SponsorSubscription: user.subscription,
    };
  }

  async getUsers() {
    const events = await this.eventsRepository.find();
    const eventIds = events.map((e) => e.id);

    const attendevent = await this.attendsRepository.find({
      where: {
        event_id: In(eventIds),
      },
    });
    const totalList = [];

    await Promise.all(
      attendevent.map(async (item, index) => {
        const fan = await this.usersRepository.findOne(item.user_id);
        const event = await this.eventsRepository.findOne(item.event_id);
        totalList.push({ fan, event });
      })
    );
    return totalList;
  }

  async getUsersByEventId(id: number) {
    const fans = await this.attendsRepository.find({
      where: {
        event_id: id,
      },
    });
    const event = await this.eventsRepository.find({
      where: {
        id: id,
      },
      relations: ["game", "audience", "subscription"],
    });
    const user_num = fans.length;
    const totalData = [];
    await Promise.all(
      fans.map(async (item, index) => {
        const fan = await this.usersRepository.findOne(item.user_id);
        totalData.push({ fan });
      })
    );
    let win_num = 0;
    totalData.map((item, index) => {
      if (item.fan.completion == 100) {
        win_num++;
      }
      // console.log(item.fan.completion);
    });
    let total_completion = 0;
    totalData.map((item, index) => {
      if (item.fan.completion >= total_completion) {
        total_completion = item.fan.completion;
      }
      // console.log(item.fan.completion);
    });
    // console.log(win_num);
    return { totalData, event, user_num, win_num, total_completion };
  }

  async addTrivia(data: any) {
    const { data: resData } = await axios.post(
      "https://saviour.earth/ZoomIn/api/index.php/Trivia/addTrivia",
      data
    );
    console.log(resData);
    return resData;
  }
}
