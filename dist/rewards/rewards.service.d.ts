import { Repository } from "typeorm";
import CreateRewardDto from "./dto/createReward.dto";
import UpdateRewardDto from "./dto/updateReward.dto";
import Reward from "./reward.entity";
import Event from "src/events/event.entity";
export default class RewardsService {
    private rewardsRepository;
    private eventsRepository;
    constructor(rewardsRepository: Repository<Reward>, eventsRepository: Repository<Event>);
    getAllRewards(): Promise<Reward[]>;
    getRewardById(id: number): Promise<Reward>;
    createReward(id: number, reward: CreateRewardDto): Promise<void>;
    updateReward(id: number, reward: UpdateRewardDto): Promise<void>;
    deleteReward(id: number): Promise<void>;
}
