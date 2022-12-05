import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import ApisService from "./apis.service";
import Event from "src/events/event.entity";
import User from "src/users/user.entity";
import { EventsController } from "./events.controller";
import CoinsController from "./coins.Controller";
import Game from "src/games/game.entity";
import Reward from "src/rewards/reward.entity";
import { RewardsController } from "./rewards.controller";
import { SponsorsController } from "./sponsor.controller";
import { FansController } from "./fans.controller";
import Attend from "src/attends/attend.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Event, User, Game, Reward, Attend])],
  controllers: [
    EventsController,
    CoinsController,
    RewardsController,
    SponsorsController,
    FansController,
  ],
  providers: [ApisService],
})
export class ApisModule {}
