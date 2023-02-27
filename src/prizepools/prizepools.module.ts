import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import Event from "src/events/event.entity";
import User from "src/users/user.entity";
import AudiencesController from "./prizepools.controller";
import Audience from "./prizepool.entity";
import AudiencesService from "./prizepools.service";
import Prizepool from "./prizepool.entity";
import PrizepoolsController from "./prizepools.controller";
import PrizepoolsService from "./prizepools.service";

@Module({
  imports: [TypeOrmModule.forFeature([Prizepool, Event, User])],
  controllers: [PrizepoolsController],
  providers: [PrizepoolsService],
})
export class PrizepoolsModule {}
