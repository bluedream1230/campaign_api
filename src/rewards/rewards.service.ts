import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import CreateRewardDto from "./dto/createReward.dto";
import UpdateRewardDto from "./dto/updateReward.dto";
import RewardNotFoundException from "./exceptions/rewardNotFound.exception";
import Reward from "./reward.entity";
import Event from "src/events/event.entity";
import Attend from "src/attends/attend.entity";
import User from "src/users/user.entity";
@Injectable()
export default class RewardsService {
  constructor(
    @InjectRepository(Reward)
    private rewardsRepository: Repository<Reward>,
    @InjectRepository(Event)
    private eventsRepository: Repository<Event>,
    @InjectRepository(Attend)
    private attendsRepository: Repository<Attend>
  ) {}

  async getOnlyRewards(user: User) {
    const data: Reward[] = await this.rewardsRepository.find({
      where: {
        user: { id: user.id },
      },
      relations: ["events"],
    });
    console.log(data);
    return data;
  }
  async getAllRewards(user: User) {
    const data: Reward[] = await this.rewardsRepository.find({
      where: {
        user: { id: user.id },
      },
      relations: ["events"],
    });
    console.log(data);
    const eventIds = [];
    data.forEach(async (item) => {
      if (item.events) {
        eventIds.push(...item.events.map((e) => e.id));
      }
    });
    console.log(eventIds);
    const attends: {
      Count: string;
      event_id: number;
    }[] = !eventIds.length
      ? []
      : await this.attendsRepository
          .createQueryBuilder()
          .select(`COUNT(user_id) as "Count", event_id`)
          .where(`event_id IN (${eventIds.join(",")})`)
          .groupBy(`event_id`)
          .execute();
    console.log(attends);
    const totalData = [];
    data.forEach((item) => {
      if (item.events.length) {
        item.events.forEach((e) => {
          const attend = attends.find((a) => a.event_id === e.id);
          if (attend)
            totalData.push({
              reward: item,
              event: e,
              users_num: Number(attend.Count),
            });
          else
            totalData.push({
              reward: item,
              event: e,
              users_num: 0,
            });
        });
      } else totalData.push({ reward: item, event: null, users_num: 0 });
    });
    console.log(totalData);
    return totalData;
  }

  async getRewardById(id: number) {
    const reward = await this.rewardsRepository.findOne(id);
    if (reward) {
      return reward;
    }

    throw new RewardNotFoundException(id);
  }

  async createReward(reward: CreateRewardDto, user: User) {
    const newReward = await this.rewardsRepository.create({
      ...reward,
      user,
    });
    await this.rewardsRepository.save(newReward);
    return newReward;
  }

  async updateReward(id: number, reward: UpdateRewardDto) {
    await this.rewardsRepository.update(id, reward);
    // throw new RewardNotFoundException(id);
  }

  async deleteReward(id: number) {
    const deleteResponse = await this.rewardsRepository.delete(id);
    if (!deleteResponse.affected) {
      throw new RewardNotFoundException(id);
    }
  }
}
