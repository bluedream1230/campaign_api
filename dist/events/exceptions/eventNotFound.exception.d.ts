import { NotFoundException } from "@nestjs/common";
declare class EventNotFoundException extends NotFoundException {
    constructor(postId: number);
}
export default EventNotFoundException;
