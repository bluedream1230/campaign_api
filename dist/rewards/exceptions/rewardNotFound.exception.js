"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
class RewardNotFoundException extends common_1.NotFoundException {
    constructor(postId) {
        super(`Reward with id ${postId} not found`);
    }
}
exports.default = RewardNotFoundException;
//# sourceMappingURL=rewardNotFound.exception.js.map