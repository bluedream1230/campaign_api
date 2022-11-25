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

  async createReward(id: number, reward: CreateRewardDto) {
    const event = await this.eventsRepository.findOne({
      relations: ["reward"],
      where: { id },
    });

    if (!event) return;
    if (event.reward) {
      await this.rewardsRepository.update(event.reward.id, reward);
    } else {
      const newReward = await this.rewardsRepository.insert(reward);
      const rewardId = newReward.identifiers[0].id;
      await this.eventsRepository.update(id, { reward: { id: rewardId } });
    }
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
