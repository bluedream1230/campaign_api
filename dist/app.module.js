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
const user_entity_1 = require("./users/user.entity");
const bill_entity_1 = require("./users/bill.entity");
const event_entity_1 = require("./events/event.entity");
const users_module_1 = require("./users/users.module");
const events_module_1 = require("./events/events.module");
const game_entity_1 = require("./games/game.entity");
const games_module_1 = require("./games/games.module");
const reward_entity_1 = require("./rewards/reward.entity");
const rewards_module_1 = require("./rewards/rewards.module");
const attend_entity_1 = require("./attends/attend.entity");
const attends_module_1 = require("./attends/attends.module");
const apis_module_1 = require("./apis/apis.module");
const audiences_entity_1 = require("./audiences/audiences.entity");
const audiences_module_1 = require("./audiences/audiences.module");
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
                database: "zoom",
                entities: [user_entity_1.default, bill_entity_1.default, event_entity_1.default, game_entity_1.default, reward_entity_1.default, attend_entity_1.default, audiences_entity_1.default],
                synchronize: true,
            }),
            auth_module_1.AuthModule,
            admin_users_module_1.AdminUsersModule,
            users_module_1.UsersModule,
            events_module_1.EventsModule,
            games_module_1.GamesModule,
            rewards_module_1.RewardsModule,
            attends_module_1.AttendsModule,
            apis_module_1.ApisModule,
            audiences_module_1.AudiencesModule,
        ],
        controllers: [],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map