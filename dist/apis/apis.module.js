"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApisModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const apis_service_1 = require("./apis.service");
const event_entity_1 = require("../events/event.entity");
const user_entity_1 = require("../users/user.entity");
const events_controller_1 = require("./events.controller");
const coins_Controller_1 = require("./coins.Controller");
const game_entity_1 = require("../games/game.entity");
const reward_entity_1 = require("../rewards/reward.entity");
const rewards_controller_1 = require("./rewards.controller");
const sponsor_controller_1 = require("./sponsor.controller");
let ApisModule = class ApisModule {
};
ApisModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([event_entity_1.default, user_entity_1.default, game_entity_1.default, reward_entity_1.default])],
        controllers: [
            events_controller_1.EventsController,
            coins_Controller_1.default,
            rewards_controller_1.RewardsController,
            sponsor_controller_1.SponsorsController,
        ],
        providers: [apis_service_1.default],
    })
], ApisModule);
exports.ApisModule = ApisModule;
//# sourceMappingURL=apis.module.js.map