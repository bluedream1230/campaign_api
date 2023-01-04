import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import CreateSubscriptionDto from "./dto/createSubscription.dto";
import Subscription from "./subscription.entity";

@Injectable()
export default class SubscriptionsService {
  constructor(
    @InjectRepository(Subscription)
    private subscriptionsRepository: Repository<Subscription>
  ) {}

  getAllSubscriptions() {
    return this.subscriptionsRepository.find();
  }

  async createSubscription(subscription: CreateSubscriptionDto) {
    const newSubscription = await this.subscriptionsRepository.create(
      subscription
    );
    await this.subscriptionsRepository.save(newSubscription);
    return newSubscription;
  }
}
