import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { In, Repository } from "typeorm";
import Event from "src/events/event.entity";
import User from "src/users/user.entity";
import Game from "src/games/game.entity";
import Reward from "src/rewards/reward.entity";
import Attend from "src/attends/attend.entity";
import { totalmem } from "os";

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
    private attendsRepository: Repository<Attend>
  ) {}

  async getEventById(id: number) {
    const event = await this.eventsRepository.findOne(id);
    const user = await this.usersRepository
      .createQueryBuilder("user")
      .leftJoinAndSelect("user.events", "event")
      .getOne();
    const game = await this.gamesRepository
      .createQueryBuilder("game")
      .leftJoinAndSelect("game.events", "event")
      .getOne();
    const reward = await this.rewardsRepository
      .createQueryBuilder("reward")
      .leftJoinAndSelect("reward.events", "event")
      .getOne();
    const qrcode = require("qrcode-js");
    const base64 = qrcode.toDataURL(event.qr_code, 4);
    const result = {
      SponsorID: user.id,
      SponsorName: user.name,
      SponsorLogoURL: user.logo,
      EventId: event.id,
      EventName: event.name,
      EventLocation: event.location,
      EventStartTimeDate: event.start_time,
      EventCompleteTimeDate: event.end_time,
      SponsorEventCoins: reward.coinvalue,
      GameId: game.id,
      GameName: game.name,
      TriviaId: event.trivia_id,
      Time_Limit: event.duration,
      EventGameType: game.type,
      EventVideoURL: game.video_url,
      EventReward: reward.name,
      EventRewardPool: reward.ratelimit,
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
          // const reward = await this.rewardsRepository.findOne(item.reward);
          return Number(item.event_coins);
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

  async getRewardsById(id: number) {
    const reward = await this.rewardsRepository.findOne(id);
    const event = await this.eventsRepository
      .createQueryBuilder("event")
      .leftJoinAndSelect("event.reward", "reward")
      .getOne();
    return {
      EventName: event.name,
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

  async getUsers(user: User) {
    const events = await this.eventsRepository.find({
      where: {
        user: { id: user.id },
      },
    });
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
      relations: ["game"],
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
    // console.log(win_num);
    return { totalData, event, user_num, win_num };
  }

  async addTrivia(data: any) {
    console.log(data);
    const res = axios
      .post("https://saviour.earth/ZoomIn/api/index.php/Trivia/addTrivia", data)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    console.log(res.data);
  }
}
