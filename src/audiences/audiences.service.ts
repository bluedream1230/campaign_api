import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import Audience from "./audiences.entity";
import AudienceNotFoundException from "./exceptions/AudienceNotFound.exception";
import CreateAudienceDto from "./dto/createAudience.dto";

@Injectable()
export default class AudiencesService {
  constructor(
    @InjectRepository(Audience)
    private audiencesRepository: Repository<Audience>
  ) {}

  getAllAudiences() {
    return this.audiencesRepository.find();
  }

  async createAudience(audience: CreateAudienceDto) {
    const newAudience = await this.audiencesRepository.create(audience);
    await this.audiencesRepository.save(newAudience);
    return newAudience;
  }
}
