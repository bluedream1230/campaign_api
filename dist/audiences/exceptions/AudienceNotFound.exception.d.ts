import { NotFoundException } from "@nestjs/common";
declare class AudienceNotFoundException extends NotFoundException {
    constructor(postId: number);
}
export default AudienceNotFoundException;
