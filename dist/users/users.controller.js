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
exports.UsersController = void 0;
const users_service_1 = require("./users.service");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const postgresErrorCode_enum_1 = require("../database/postgresErrorCode.enum");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const addressUser_dto_1 = require("./dto/addressUser.dto");
const findOneParams_1 = require("../utils/findOneParams");
const updateUser_dto_1 = require("./dto/updateUser.dto");
const attendCreate_dto_1 = require("../attends/dto/attendCreate.dto");
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    async update(req, updateUser) {
        const id = req.user.id;
        try {
            const updatedUser = await this.usersService.update(Number(id), updateUser);
            return updatedUser;
        }
        catch (error) {
            throw new common_1.HttpException("Something went wrong", common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async updatedAddress({ id }, addressData) {
        try {
            const updatedAddress = await this.usersService.updateAddress(Number(id), addressData);
            return addressData;
        }
        catch (error) {
            if ((error === null || error === void 0 ? void 0 : error.code) === postgresErrorCode_enum_1.default.UniqueViolation) {
                throw new common_1.HttpException("User with that email already exists", common_1.HttpStatus.BAD_REQUEST);
            }
            throw new common_1.HttpException("Something went wrong", common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async joinEvent(req, { id }, joinedEvent) {
        const user_id = req.user.id;
        try {
            const joinEvent = await this.usersService.joinEvent(Number(user_id), Number(id), joinedEvent);
            return joinEvent;
        }
        catch (error) {
            throw new common_1.HttpException("Something went wrong", common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async updateAudience(req, { id }) {
        const user_id = req.user.id;
        try {
            const updatedUser = await this.usersService.updateAudience(Number(id), Number(user_id));
            return updatedUser;
        }
        catch (error) {
            throw new common_1.HttpException("Something went wrong", common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
__decorate([
    common_1.Patch("update"),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    swagger_1.ApiOperation({ summary: "Update user" }),
    __param(0, common_1.Request()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, updateUser_dto_1.default]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "update", null);
__decorate([
    common_1.Patch(":id"),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    swagger_1.ApiOperation({ summary: "Create address" }),
    __param(0, common_1.Param()),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [findOneParams_1.default,
        addressUser_dto_1.default]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "updatedAddress", null);
__decorate([
    common_1.Patch("join/:id"),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    swagger_1.ApiOperation({ summary: "Join Event" }),
    __param(0, common_1.Request()),
    __param(1, common_1.Param()),
    __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, findOneParams_1.default,
        attendCreate_dto_1.default]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "joinEvent", null);
__decorate([
    common_1.Patch("audience/:id"),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    swagger_1.ApiOperation({ summary: "Join audience" }),
    __param(0, common_1.Request()), __param(1, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, findOneParams_1.default]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "updateAudience", null);
UsersController = __decorate([
    swagger_1.ApiBearerAuth(),
    swagger_1.ApiTags("Users"),
    common_1.Controller("users"),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map