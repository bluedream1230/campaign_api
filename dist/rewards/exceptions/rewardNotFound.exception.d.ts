import { NotFoundException } from "@nestjs/common";
declare class RewardNotFoundException extends NotFoundException {
    constructor(postId: number);
}
export default RewardNotFoundException;
