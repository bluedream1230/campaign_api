import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import Event from "src/events/event.entity";
import User from "src/users/user.entity";
import Game from "src/games/game.entity";
import Reward from "src/rewards/reward.entity";

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
    private rewardsRepository: Repository<Reward>
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
    const result = {
      SponsorID: user.id,
      SponsorName: user.name,
      SponsorLogoURL: user.logo,
      EventName: event.name,
      EventLocation: event.location,
      EventStartTimeDate: event.start_time,
      EventCompleteTimeDate: event.end_time,
      SponsorEventCoins: event.event_coins,
      EventGameType: game.type,
      EventVideoURL: game.video_url,
      EventReward: event.reward.name,
      EventRewardPool: event.reward.ratelimit,
      EventGameDuration: game.duration,
      EventUserLimit: event.user_limit,
      EventQRCodeURL: event.qr_code,
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
    const sum = events.reduce((total, item) => {
      return total + Number(item.event_coins);
    }, 0);
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
        Street: user.address.street,
        Suite: user.address.suite,
        City: user.address.city,
        State: user.address.state,
        Zip: user.address.zip,
      },
      SponsorEmail: user.email,
      SponsorPhone: user.phone,
      SponsorSubscription: user.subscription,
    };
  }
}
