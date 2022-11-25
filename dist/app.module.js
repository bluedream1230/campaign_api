"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const auth_module_1 = require("./auth/auth.module");
const admin_users_module_1 = require("./adminUsers/admin.users.module");
const typeorm_1 = require("@nestjs/typeorm");
const users_module_1 = require("./users/users.module");
const events_module_1 = require("./events/events.module");
const games_module_1 = require("./games/games.module");
const rewards_module_1 = require("./rewards/rewards.module");
const attends_module_1 = require("./attends/attends.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: "mysql",
                host: "localhost",
                port: 3306,
                username: "root",
                password: "",
                database: "zoomin",
                entities: ["dist/**/*.entity{.ts,.js}"],
                synchronize: true,
                migrationsTableName: "migration",
                migrations: ["src/migration/*.ts"],
                cli: {
                    migrationsDir: "src/migration",
                },
            }),
            auth_module_1.AuthModule,
            admin_users_module_1.AdminUsersModule,
            users_module_1.UsersModule,
            events_module_1.EventsModule,
            games_module_1.GamesModule,
            rewards_module_1.RewardsModule,
            attends_module_1.AttendsModule,
        ],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map