import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import Reward from "./reward.entity";
import RewardsController from "./rewards.controller";
import RewardsService from "./rewards.service";

@Module({
  imports: [TypeOrmModule.forFeature([Reward])],
  controllers: [RewardsController],
  providers: [RewardsService],
})
export class RewardsModule {}
