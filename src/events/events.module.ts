import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import EventsController from "./events.controller";
import EventsService from "./events.service";
import Event from "./event.entity";
import Attend from "src/attends/attend.entity";
import Game from "src/games/game.entity";
import Audience from "src/audiences/audiences.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Event, Attend, Game, Audience])],
  controllers: [EventsController],
  providers: [EventsService],
})
export class EventsModule {}
