import { Repository } from "typeorm";
import CreateRewardDto from "./dto/createReward.dto";
import UpdateRewardDto from "./dto/updateReward.dto";
import Reward from "./reward.entity";
import Event from "src/events/event.entity";
import Attend from "src/attends/attend.entity";
import User from "src/users/user.entity";
export default class RewardsService {
    private rewardsRepository;
    private eventsRepository;
    private attendsRepository;
    constructor(rewardsRepository: Repository<Reward>, eventsRepository: Repository<Event>, attendsRepository: Repository<Attend>);
    getAllRewards(user: User): Promise<any[]>;
    getRewardById(id: number): Promise<Reward>;
    createReward(reward: CreateRewardDto, user: User): Promise<Reward>;
    updateReward(id: number, reward: UpdateRewardDto): Promise<void>;
    deleteReward(id: number): Promise<void>;
}
