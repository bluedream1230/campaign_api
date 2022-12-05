import CreateAudienceDto from "./dto/createAudience.dto";
import AudiencesService from "./audiences.service";
export default class AudiencesController {
    private readonly audiencesService;
    constructor(audiencesService: AudiencesService);
    getAllAudiences(): Promise<import("./audiences.entity").default[]>;
    createAudience(audience: CreateAudienceDto): Promise<import("./audiences.entity").default>;
}
