import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import Reward from "src/rewards/reward.entity";
import Redemption from "./redemption.entity";
import { RedemptionsController } from "./redemptions.controller";
import RedemptionsService from "./redemptions.service";

@Module({
  imports: [TypeOrmModule.forFeature([Redemption, Reward])],
  controllers: [RedemptionsController],
  providers: [RedemptionsService],
})
export class RedemptionsModule {}
