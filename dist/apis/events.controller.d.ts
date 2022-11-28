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
}
