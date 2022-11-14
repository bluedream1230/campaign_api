import FindOneParams from "src/utils/findOneParams";
import CreateRewardDto from "./dto/createReward.dto";
import UpdateRewardDto from "./dto/updateReward.dto";
import RewardsService from "./rewards.service";
export default class RewardsController {
    private readonly rewardsService;
    constructor(rewardsService: RewardsService);
    getAllRewards(): Promise<import("./reward.entity").default[]>;
    getRewardById({ id }: FindOneParams): Promise<import("./reward.entity").default>;
    createReward(reward: CreateRewardDto): Promise<import("./reward.entity").default>;
    updateReward({ id }: FindOneParams, reward: UpdateRewardDto): Promise<void>;
    deleteReward({ id }: FindOneParams): Promise<void>;
}
