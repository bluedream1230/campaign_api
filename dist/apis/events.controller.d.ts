import FindOneParams from "src/utils/findOneParams";
import ApisService from "./apis.service";
export declare class EventsController {
    private readonly apisService;
    constructor(apisService: ApisService);
    getEventById({ id }: FindOneParams): Promise<{
        SponsorID: number;
        SponsorName: string;
        SponsorLogoURL: string;
        EventName: string;
        EventLocation: string;
        EventStartTimeDate: Date;
        EventCompleteTimeDate: Date;
        SponsorEventCoins: number;
        GameId: number;
        TriviaId: string;
        Time_Limit: number;
        EventGameType: string;
        EventVideoURL: string;
        EventReward: string;
        EventRewardPool: number;
        EventUserLimit: number;
        EventQRCodeURL: any;
    }>;
}
