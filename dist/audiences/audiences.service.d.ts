import { Repository } from "typeorm";
import Audience from "./audiences.entity";
import CreateAudienceDto from "./dto/createAudience.dto";
export default class AudiencesService {
    private audiencesRepository;
    constructor(audiencesRepository: Repository<Audience>);
    getAllAudiences(): Promise<Audience[]>;
    createAudience(audience: CreateAudienceDto): Promise<Audience>;
}
