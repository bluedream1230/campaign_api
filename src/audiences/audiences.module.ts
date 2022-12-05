import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import Event from "src/events/event.entity";
import User from "src/users/user.entity";
import AudiencesController from "./audiences.controller";
import Audience from "./audiences.entity";
import AudiencesService from "./audiences.service";

@Module({
  imports: [TypeOrmModule.forFeature([Audience, Event, User])],
  controllers: [AudiencesController],
  providers: [AudiencesService],
})
export class AudiencesModule {}
