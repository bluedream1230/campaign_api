import { NotFoundException } from "@nestjs/common";

class PrizepoolNotFoundException extends NotFoundException {
  constructor(postId: number) {
    super(`Prizepool with id ${postId} not found`);
  }
}

export default PrizepoolNotFoundException;
