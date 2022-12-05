import { NotFoundException } from "@nestjs/common";

class AudienceNotFoundException extends NotFoundException {
  constructor(postId: number) {
    super(`Audience with id ${postId} not found`);
  }
}

export default AudienceNotFoundException;
