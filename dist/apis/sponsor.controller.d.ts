import FindOneParams from "src/utils/findOneParams";
import ApisService from "./apis.service";
export declare class SponsorsController {
    private readonly apisService;
    constructor(apisService: ApisService);
    getSponsorById({ id }: FindOneParams): Promise<{
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
