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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("../auth/auth.service");
const postgresErrorCode_enum_1 = require("../database/postgresErrorCode.enum");
const users_service_1 = require("../users/users.service");
const swagger_1 = require("@nestjs/swagger");
const loginUser_dto_1 = require("../users/dto/loginUser.dto");
const createUser_dto_1 = require("../users/dto/createUser.dto");
const findOneParams_1 = require("../utils/findOneParams");
const updatePass_dto_1 = require("../users/dto/updatePass.dto");
let AuthController = class AuthController {
    constructor(authService, usersService) {
        this.authService = authService;
        this.usersService = usersService;
    }
    async login(loginData) {
        return this.authService.login(loginData);
    }
    async register(registrationData) {
        console.log(registrationData);
        try {
            const createdUser = await this.usersService.create(Object.assign({}, registrationData));
            console.log(createdUser);
            return createdUser;
        }
        catch (error) {
            if ((error === null || error === void 0 ? void 0 : error.code) === postgresErrorCode_enum_1.default.UniqueViolation) {
                throw new common_1.HttpException("User with that email already exists", common_1.HttpStatus.BAD_REQUEST);
            }
            console.log("auth/create error: ", error);
            throw new common_1.HttpException("Something went wrong", common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    getUserById({ id }) {
        return this.usersService.getById(Number(id));
    }
    async updatepass(registrationData) {
        return this.usersService.updatePassword(registrationData);
    }
};
__decorate([
    common_1.Post("login"),
    swagger_1.ApiOperation({ summary: "Login with default name and pwd" }),
    swagger_1.ApiResponse({ status: 403, description: "Forbidden." }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [loginUser_dto_1.default]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    common_1.Post("create"),
    swagger_1.ApiOperation({ summary: "Create user" }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createUser_dto_1.default]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "register", null);
__decorate([
    common_1.Get("user/:id"),
    swagger_1.ApiResponse({
        status: 200,
        description: "The found record",
    }),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [findOneParams_1.default]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "getUserById", null);
__decorate([
    common_1.Post("updatePass"),
    swagger_1.ApiOperation({ summary: "Update password" }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [updatePass_dto_1.default]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "updatepass", null);
AuthController = __decorate([
    swagger_1.ApiTags("Authentication"),
    common_1.Controller("auth"),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        users_service_1.UsersService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map