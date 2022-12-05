"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
class AudienceNotFoundException extends common_1.NotFoundException {
    constructor(postId) {
        super(`Audience with id ${postId} not found`);
    }
}
exports.default = AudienceNotFoundException;
//# sourceMappingURL=AudienceNotFound.exception.js.map