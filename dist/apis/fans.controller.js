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
exports.FansController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const requestWithUser_1 = require("../auth/interface/requestWithUser");
const findOneParams_1 = require("../utils/findOneParams");
const apis_service_1 = require("./apis.service");
let FansController = class FansController {
    constructor(apisService) {
        this.apisService = apisService;
    }
    getUsers(req) {
        return this.apisService.getUsers(req.user);
    }
    getUsersByEventId({ id }) {
        return this.apisService.getUsersByEventId(Number(id));
    }
};
__decorate([
    common_1.Get(":id"),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    swagger_1.ApiResponse({
        status: 200,
        description: "The found record",
    }),
    __param(0, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FansController.prototype, "getUsers", null);
__decorate([
    common_1.Get("event/:id"),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    swagger_1.ApiResponse({
        status: 200,
        description: "The found record",
    }),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [findOneParams_1.default]),
    __metadata("design:returntype", void 0)
], FansController.prototype, "getUsersByEventId", null);
FansController = __decorate([
    swagger_1.ApiBearerAuth(),
    swagger_1.ApiTags("Fans"),
    common_1.Controller("fan"),
    common_1.UseInterceptors(common_1.ClassSerializerInterceptor),
    __metadata("design:paramtypes", [apis_service_1.default])
], FansController);
exports.FansController = FansController;
//# sourceMappingURL=fans.controller.js.map