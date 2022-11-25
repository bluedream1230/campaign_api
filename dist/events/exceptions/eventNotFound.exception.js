"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
class EventNotFoundException extends common_1.NotFoundException {
    constructor(postId) {
        super(`Event with id ${postId} not found`);
    }
}
exports.default = EventNotFoundException;
//# sourceMappingURL=eventNotFound.exception.js.map