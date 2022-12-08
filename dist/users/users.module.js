"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersModule = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("./user.entity");
const bill_entity_1 = require("./bill.entity");
const users_controller_1 = require("./users.controller");
const attend_entity_1 = require("../attends/attend.entity");
const audiences_entity_1 = require("../audiences/audiences.entity");
const mail_controller_1 = require("../sendgrid/mail.controller");
const jwt_1 = require("@nestjs/jwt");
const constants_1 = require("../auth/constants");
const sendgrid_service_1 = require("../sendgrid/sendgrid.service");
const config_1 = require("@nestjs/config");
let UsersModule = class UsersModule {
};
UsersModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([user_entity_1.default, bill_entity_1.default, attend_entity_1.default, audiences_entity_1.default]),
            jwt_1.JwtModule.register({
                secret: constants_1.jwtConstants.secret,
                signOptions: { expiresIn: "7d" },
            }),
            config_1.ConfigModule.forRoot(),
        ],
        providers: [users_service_1.UsersService, sendgrid_service_1.SendgridService],
        exports: [users_service_1.UsersService, sendgrid_service_1.SendgridService],
        controllers: [users_controller_1.UsersController, mail_controller_1.MailController],
    })
], UsersModule);
exports.UsersModule = UsersModule;
//# sourceMappingURL=users.module.js.map