import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import Event from "./event.entity";
import CreateEventDto from "./dto/createEvent.dto";
import UpdateEventDto from "./dto/updateEvent.dto";
import EventNotFoundException from "./exceptions/eventNotFound.exception";
import User from "src/users/user.entity";
import Attend from "src/attends/attend.entity";
import Game from "src/games/game.entity";
import { S3Url } from "aws-sdk/clients/cloudformation";
import Reward from "src/rewards/reward.entity";
import Subscription from "src/subscriptions/subscription.entity";
@Injectable()
export default class EventsService {
  constructor(
    @InjectRepository(Event)
    private eventsRepository: Repository<Event>,
    @InjectRepository(Attend)
    private attendsRepository: Repository<Attend>,
    @InjectRepository(Game)
    private gamesRepository: Repository<Game>,
    @InjectRepository(Reward)
    private rewardsRepository: Repository<Reward>,
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    @InjectRepository(Subscription)
    private subscriptionsRepository: Repository<Subscription>
  ) {}

  async getAllEvents(user: User) {
    const events = await this.eventsRepository
      .createQueryBuilder("event")
      .where(`event.userId = '${user.id}'`)
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
          .where(`event.id = '${item.id}'`)
          .getMany();
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
    const event = await this.eventsRepository.findOne(id);
    const qrcode = require("qrcode-js");
    const url = "https://saviour.earth/ZoomIn?event_id=" + event.id;
    const base64 = qrcode.toDataURL(url, 4);
    console.log(base64);
    if (event) {
      return {
        ...event,
        qr_code: base64,
      };
    }
    console.log(event);

    throw new EventNotFoundException(id);
  }

  async createEvent(
    gameId: number,
    audienceId: number,
    rewardpoolId: number,
    subscribeId: number,
    event: CreateEventDto,
    rewardIds: number[],
    video_url: string,
    user: User,
    s3url: S3Url
  ) {
    console.log("rewardpool id", rewardpoolId);
    const newEvent = await this.eventsRepository.create({
      ...event,
      user: user,
      game: {
        id: gameId,
      },
      audience: {
        id: audienceId,
      },
      prizepool: {
        id: rewardpoolId,
      },
      subscription: {
        id: subscribeId,
      },
    });
    const rewards = [];
    for (const id of rewardIds) {
      const reward = await this.rewardsRepository.findOne(id);
      rewards.push(reward);
    }
    newEvent.rewards = rewards;
    console.log(newEvent);
    const result = await this.eventsRepository.save(newEvent);
    // const result1 = await
    const qrcode = require("qrcode-js");
    const url = "https://saviour.earth/ZoomIn?event_id=" + result.id;
    const base64 = qrcode.toDataURL(url, 4);
    console.log(base64);
    const final = await this.eventsRepository.update(result.id, {
      qr_code: url,
      sponsor_logo: s3url,
      sponsor_video_url: video_url,
    });
    const res = await this.eventsRepository.findOne(result.id);
    const subscription = await this.subscriptionsRepository.findOne(
      subscribeId
    );
    const userUpdate = await this.usersRepository
      .createQueryBuilder("user")
      .where(`user.id = '${user.id}'`)
      .getOne();
    if (!user) return;
    userUpdate.coins = Number(userUpdate.coins) + Number(subscription.coins);
    userUpdate.coinsused =
      Number(userUpdate.coinsused) + Number(subscription.coins);
    const userUpdateCoin = await this.usersRepository.save(userUpdate);
    console.log("userUpdateCoin", userUpdateCoin);
    return res;
  }

  async updateEvent(id: number, event: UpdateEventDto) {
    await this.eventsRepository.update(id, event);
    throw new EventNotFoundException(id);
  }

  async deleteEvent(id: number) {
    const deleteResponse = await this.eventsRepository.delete(id);
    if (!deleteResponse.affected) {
      throw new EventNotFoundException(id);
    }
  }
}
