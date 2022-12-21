import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import PrizepoolNotFoundException from "./exceptions/PrizepoolNotFound.exception";
import Prizepool from "./prizepool.entity";
import CreatePrizePoolDto from "./dto/createPrizepool.dto";

@Injectable()
export default class PrizepoolsService {
  constructor(
    @InjectRepository(Prizepool)
    private prizepoolsRepository: Repository<Prizepool>
  ) {}

  getAllPrizepools() {
    return this.prizepoolsRepository.find();
  }

  async createPrizepool(prizepool: CreatePrizePoolDto) {
    const newPrizepool = await this.prizepoolsRepository.create(prizepool);
    await this.prizepoolsRepository.save(newPrizepool);
    return newPrizepool;
  }
}
