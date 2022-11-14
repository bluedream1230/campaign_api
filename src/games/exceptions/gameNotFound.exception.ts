import { NotFoundException } from "@nestjs/common";

class GameNotFoundException extends NotFoundException {
  constructor(postId: number) {
    super(`Game with id ${postId} not found`);
  }
}

export default GameNotFoundException;
