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
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const findOneParams_1 = require("../utils/findOneParams");
const createReward_dto_1 = require("./dto/createReward.dto");
const updateReward_dto_1 = require("./dto/updateReward.dto");
const rewards_service_1 = require("./rewards.service");
let RewardsController = class RewardsController {
    constructor(rewardsService) {
        this.rewardsService = rewardsService;
    }
    getAllRewards() {
        return this.rewardsService.getAllRewards();
    }
    getRewardById({ id }) {
        return this.rewardsService.getRewardById(Number(id));
    }
    async createReward(reward) {
        return this.rewardsService.createReward(reward);
    }
    async updateReward({ id }, reward) {
        return this.rewardsService.updateReward(Number(id), reward);
    }
    async deleteReward({ id }) {
        return this.rewardsService.deleteReward(Number(id));
    }
};
__decorate([
    common_1.Get(),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    swagger_1.ApiOperation({ summary: "Get all rewards" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RewardsController.prototype, "getAllRewards", null);
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
__decorate([
    common_1.Post(),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    swagger_1.ApiOperation({ summary: "Create reward" }),
    swagger_1.ApiResponse({ status: 403, description: "Forbidden." }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createReward_dto_1.default]),
    __metadata("design:returntype", Promise)
], RewardsController.prototype, "createReward", null);
__decorate([
    common_1.Patch(":id"),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    swagger_1.ApiOperation({ summary: "Update reward" }),
    swagger_1.ApiResponse({ status: 403, description: "Forbidden." }),
    __param(0, common_1.Param()),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [findOneParams_1.default,
        updateReward_dto_1.default]),
    __metadata("design:returntype", Promise)
], RewardsController.prototype, "updateReward", null);
__decorate([
    common_1.Delete(":id"),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    swagger_1.ApiOperation({ summary: "Delete reward" }),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [findOneParams_1.default]),
    __metadata("design:returntype", Promise)
], RewardsController.prototype, "deleteReward", null);
RewardsController = __decorate([
    swagger_1.ApiBearerAuth(),
    swagger_1.ApiTags("Rewards"),
    common_1.Controller("rewards"),
    common_1.UseInterceptors(common_1.ClassSerializerInterceptor),
    __metadata("design:paramtypes", [rewards_service_1.default])
], RewardsController);
exports.default = RewardsController;
//# sourceMappingURL=rewards.controller.js.map