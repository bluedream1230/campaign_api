import { Repository } from "typeorm";
import Event from "src/events/event.entity";
import User from "src/users/user.entity";
import Game from "src/games/game.entity";
import Reward from "src/rewards/reward.entity";
export default class ApisService {
    private eventsRepository;
    private usersRepository;
    private gamesRepository;
    private rewardsRepository;
    constructor(eventsRepository: Repository<Event>, usersRepository: Repository<User>, gamesRepository: Repository<Game>, rewardsRepository: Repository<Reward>);
    getEventById(id: number): Promise<{
        SponsorID: number;
        SponsorName: string;
        SponsorLogoURL: string;
        EventName: string;
        EventLocation: string;
        EventStartTimeDate: string;
        EventCompleteTimeDate: string;
        SponsorEventCoins: number;
        EventGameType: string;
        EventVideoURL: string;
        EventReward: string;
        EventRewardPool: number;
        EventGameDuration: string;
        EventUserLimit: string;
        EventQRCodeURL: string;
    }>;
    getCoinById(id: number): Promise<0 | {
        SpnsorId: number;
        SponsorName: string;
        SponsorCoins: number;
        SponsorCoinsUsed: number;
        SponsorEventCoins: number;
    }>;
    getRewardsById(id: number): Promise<{
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
    getSponsorsById(id: number): Promise<{
        SponsorID: number;
        SponsorName: string;
        SponsorLogoURL: string;
        SponsorAddress: {
            Street: string;
            Suite: string;
            City: string;
            State: string;
            Zip: string;
        };
        SponsorEmail: string;
        SponsorPhone: string;
        SponsorSubscription: string;
    }>;
}
