import FindOneParams from "src/utils/findOneParams";
import ApisService from "./apis.service";
export default class CoinsController {
    private readonly apisService;
    constructor(apisService: ApisService);
    getCoinById({ id }: FindOneParams): Promise<0 | {
        SpnsorId: number;
        SponsorName: string;
        SponsorCoins: number;
        SponsorCoinsUsed: number;
        SponsorEventCoins: number;
    }>;
}
