"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RewardsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const findOneParams_1 = require("../utils/findOneParams");
const apis_service_1 = require("./apis.service");
let RewardsController = class RewardsController {
    constructor(apisService) {
        this.apisService = apisService;
    }
    getRewardById({ id }) {
        return this.apisService.getRewardsById(Number(id));
    }
};
__decorate([
    common_1.Get(":id"),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    swagger_1.ApiResponse({
        status: 200,
        description: "The found record",
    }),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [findOneParams_1.default]),
    __metadata("design:returntype", void 0)
], RewardsController.prototype, "getRewardById", null);
RewardsController = __decorate([
    swagger_1.ApiBearerAuth(),
    swagger_1.ApiTags("MOBILE:Rewards"),
    common_1.Controller("reward_api"),
    common_1.UseInterceptors(common_1.ClassSerializerInterceptor),
    __metadata("design:paramtypes", [apis_service_1.default])
], RewardsController);
exports.RewardsController = RewardsController;
//# sourceMappingURL=rewards.controller.js.map