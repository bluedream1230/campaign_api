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
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const auth_module_1 = require("./auth/auth.module");
const admin_users_module_1 = require("./adminUsers/admin.users.module");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("./users/user.entity");
const address_entity_1 = require("./users/address.entity");
const event_entity_1 = require("./events/event.entity");
const users_module_1 = require("./users/users.module");
const events_module_1 = require("./events/events.module");
const game_entity_1 = require("./games/game.entity");
const games_module_1 = require("./games/games.module");
const reward_entity_1 = require("./rewards/reward.entity");
const rewards_module_1 = require("./rewards/rewards.module");
const attend_entity_1 = require("./attends/attend.entity");
const attends_module_1 = require("./attends/attends.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: "postgres",
                host: "ec2-3-219-135-162.compute-1.amazonaws.com",
                port: 5432,
                username: "auggncnrngqcyv",
                password: "5dfe3011e4a2fbe1e60ee4b323515a8be58f0ac7b6e0ceb561bf2edb44d0b7c6",
                database: "dt0hlkmjdtsv6",
                entities: [user_entity_1.default, address_entity_1.default, event_entity_1.default, game_entity_1.default, reward_entity_1.default, attend_entity_1.default],
                synchronize: true,
                ssl: {
                    require: true,
                    rejectUnauthorized: false,
                },
                migrationsRun: false,
                logging: false,
                logger: "file",
                migrations: [__dirname + "/migrations/**/*{.ts,.js}"],
                cli: {
                    migrationsDir: "src/migrations",
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
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map