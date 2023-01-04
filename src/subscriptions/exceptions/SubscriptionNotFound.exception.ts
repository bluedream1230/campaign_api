import { NotFoundException } from "@nestjs/common";

class SubscriptionNotFoundException extends NotFoundException {
  constructor(postId: number) {
    super(`Subscription with id ${postId} not found`);
  }
}

export default SubscriptionNotFoundException;
