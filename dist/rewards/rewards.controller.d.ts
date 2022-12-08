import FindOneParams from "src/utils/findOneParams";
import CreateRewardDto from "./dto/createReward.dto";
import UpdateRewardDto from "./dto/updateReward.dto";
import RewardsService from "./rewards.service";
import RequestWithUser from "src/auth/interface/requestWithUser";
export default class RewardsController {
    private readonly rewardsService;
    constructor(rewardsService: RewardsService);
    getAllRewards(req: RequestWithUser): Promise<any[]>;
    getOnlyRewards(req: RequestWithUser): Promise<import("./reward.entity").default[]>;
    getRewardById({ id }: FindOneParams): Promise<import("./reward.entity").default>;
    createReward(reward: CreateRewardDto, req: RequestWithUser): Promise<CreateRewardDto>;
    updateReward({ id }: FindOneParams, reward: UpdateRewardDto): Promise<void>;
    deleteReward({ id }: FindOneParams): Promise<void>;
}
