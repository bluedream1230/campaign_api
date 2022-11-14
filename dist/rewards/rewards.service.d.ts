import { Repository } from "typeorm";
import CreateRewardDto from "./dto/createReward.dto";
import UpdateRewardDto from "./dto/updateReward.dto";
import Reward from "./reward.entity";
export default class RewardsService {
    private rewardsRepository;
    constructor(rewardsRepository: Repository<Reward>);
    getAllRewards(): Promise<Reward[]>;
    getRewardById(id: number): Promise<Reward>;
    createReward(reward: CreateRewardDto): Promise<Reward>;
    updateReward(id: number, reward: UpdateRewardDto): Promise<void>;
    deleteReward(id: number): Promise<void>;
}
