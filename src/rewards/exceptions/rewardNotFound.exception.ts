import { NotFoundException } from "@nestjs/common";

class RewardNotFoundException extends NotFoundException {
  constructor(postId: number) {
    super(`Reward with id ${postId} not found`);
  }
}

export default RewardNotFoundException;
