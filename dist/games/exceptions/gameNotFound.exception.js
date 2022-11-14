"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
class GameNotFoundException extends common_1.NotFoundException {
    constructor(postId) {
        super(`Game with id ${postId} not found`);
    }
}
exports.default = GameNotFoundException;
//# sourceMappingURL=gameNotFound.exception.js.map