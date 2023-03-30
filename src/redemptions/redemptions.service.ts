import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import Redemption from "src/redemptions/redemption.entity";
import Reward from "src/rewards/reward.entity";

@Injectable()
export default class RedemptionsService {
  constructor(
    @InjectRepository(Redemption)
    private redemptionsRepository: Repository<Redemption>,
    @InjectRepository(Reward)
    private rewardsRepository: Repository<Reward>
  ) {}

  async getRedemptionsByUserId(id: number) {
    const redemptions = await this.redemptionsRepository
      .createQueryBuilder("redemption")
      .where(`redemption.user_id = '${id}'`)
      .getMany();

    const result = await Promise.all(
      redemptions.map(async (item) => {
        const rewards = await this.rewardsRepository
          .createQueryBuilder("reward")
          .where(`reward.id = '${item.reward_id}'`)
          .getMany();
        return rewards;
      })
    );
    console.log("rewardsrewardsrewards", result[0]);
    if (result[0]) {
      return result[0];
    } else {
      return [];
    }
  }

  async createRedemption(redemption) {
    const newRedemption = await this.redemptionsRepository.create(redemption);
    await this.redemptionsRepository.save(newRedemption);
    return newRedemption;
  }
}
