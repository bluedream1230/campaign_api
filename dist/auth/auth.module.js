"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const passport_1 = require("@nestjs/passport");
const users_module_1 = require("../users/users.module");
const admin_users_module_1 = require("../adminUsers/admin.users.module");
const auth_controller_1 = require("./auth.controller");
const auth_service_1 = require("./auth.service");
const constants_1 = require("./constants");
const jwt_strategy_1 = require("./strategies/jwt.strategy");
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    common_1.Module({
        imports: [
            admin_users_module_1.AdminUsersModule,
            passport_1.PassportModule,
            jwt_1.JwtModule.register({
                secret: constants_1.jwtConstants.secret,
                signOptions: { expiresIn: "7d" },
            }),
            users_module_1.UsersModule,
        ],
        providers: [auth_service_1.AuthService, jwt_strategy_1.JwtStrategy],
        exports: [auth_service_1.AuthService],
        controllers: [auth_controller_1.AuthController],
    })
], AuthModule);
exports.AuthModule = AuthModule;
//# sourceMappingURL=auth.module.js.map