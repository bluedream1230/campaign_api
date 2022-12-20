import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import EventsController from "./events.controller";
import EventsService from "./events.service";
import Event from "./event.entity";
import Attend from "src/attends/attend.entity";
import Game from "src/games/game.entity";
import Audience from "src/audiences/audiences.entity";
import { S3Service } from "src/share/s3.service";
import Reward from "src/rewards/reward.entity";
import User from "src/users/user.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([Event, Attend, Game, Audience, Reward, User]),
  ],
  controllers: [EventsController],
  providers: [EventsService, S3Service],
})
export class EventsModule {}
