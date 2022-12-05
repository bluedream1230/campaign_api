import FindOneParams from "src/utils/findOneParams";
import ApisService from "./apis.service";
export declare class RewardsController {
    private readonly apisService;
    constructor(apisService: ApisService);
    getRewardById({ id }: FindOneParams, req: any): Promise<{
        EventName: string;
        RewardType: string;
        RewardCategory: string;
        RewardName: string;
        RewardImageURL: string;
        RewardDescription: string;
        RewardCoinValue: number;
        RewardRateLimit: number;
        RewardTimeLimit: number;
    }>;
}
