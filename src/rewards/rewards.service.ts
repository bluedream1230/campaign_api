import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import CreateRewardDto from "./dto/createReward.dto";
import UpdateRewardDto from "./dto/updateReward.dto";
import RewardNotFoundException from "./exceptions/rewardNotFound.exception";
import Reward from "./reward.entity";
import Event from "src/events/event.entity";
@Injectable()
export default class RewardsService {
  constructor(
    @InjectRepository(Reward)
    private rewardsRepository: Repository<Reward>,
    @InjectRepository(Event)
    private eventsRepository: Repository<Event>
  ) {}

  getAllRewards() {
    return this.rewardsRepository.find();
  }

  async getRewardById(id: number) {
    const reward = await this.rewardsRepository.findOne(id);
    if (reward) {
      return reward;
    }

    throw new RewardNotFoundException(id);
  }

  async createReward(reward: CreateRewardDto) {
    const newReward = await this.rewardsRepository.create(reward);
    await this.rewardsRepository.save(newReward);
    return newReward;
  }

  async updateReward(id: number, reward: UpdateRewardDto) {
    await this.rewardsRepository.update(id, reward);
    throw new RewardNotFoundException(id);
  }

  async deleteReward(id: number) {
    const deleteResponse = await this.rewardsRepository.delete(id);
    if (!deleteResponse.affected) {
      throw new RewardNotFoundException(id);
    }
  }
}
