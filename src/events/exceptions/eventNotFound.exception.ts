import { NotFoundException } from "@nestjs/common";

class EventNotFoundException extends NotFoundException {
  constructor(postId: number) {
    super(`Event with id ${postId} not found`);
  }
}

export default EventNotFoundException;
