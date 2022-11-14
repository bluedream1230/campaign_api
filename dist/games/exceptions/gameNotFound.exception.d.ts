import { NotFoundException } from "@nestjs/common";
declare class GameNotFoundException extends NotFoundException {
    constructor(postId: number);
}
export default GameNotFoundException;
