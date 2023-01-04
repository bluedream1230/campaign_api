import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import Event from "src/events/event.entity";
import Subscription from "./subscription.entity";
import SubscriptionsController from "./subscriptions.controller";
import SubscriptionsService from "./subscriptions.service";

@Module({
  imports: [TypeOrmModule.forFeature([Subscription, Event])],
  controllers: [SubscriptionsController],
  providers: [SubscriptionsService],
})
export class SubscriptionsModule {}
