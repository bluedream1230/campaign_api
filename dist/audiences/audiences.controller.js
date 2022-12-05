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
const createEvent_dto_1 = require("../events/dto/createEvent.dto");
const createAudience_dto_1 = require("./dto/createAudience.dto");
const audiences_service_1 = require("./audiences.service");
let AudiencesController = class AudiencesController {
    constructor(audiencesService) {
        this.audiencesService = audiencesService;
    }
    getAllAudiences() {
        return this.audiencesService.getAllAudiences();
    }
    async createAudience(audience) {
        return this.audiencesService.createAudience(audience);
    }
};
__decorate([
    common_1.Get(),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    swagger_1.ApiOperation({ summary: "Get all audiences" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AudiencesController.prototype, "getAllAudiences", null);
__decorate([
    common_1.Post(),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    swagger_1.ApiOperation({ summary: "Create audience" }),
    swagger_1.ApiResponse({ status: 403, description: "Forbidden." }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createAudience_dto_1.default]),
    __metadata("design:returntype", Promise)
], AudiencesController.prototype, "createAudience", null);
AudiencesController = __decorate([
    swagger_1.ApiBearerAuth(),
    swagger_1.ApiTags("Audiences"),
    common_1.Controller("audiences"),
    common_1.UseInterceptors(common_1.ClassSerializerInterceptor),
    __metadata("design:paramtypes", [audiences_service_1.default])
], AudiencesController);
exports.default = AudiencesController;
//# sourceMappingURL=audiences.controller.js.map