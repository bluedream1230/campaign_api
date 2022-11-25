"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RewardsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const reward_entity_1 = require("./reward.entity");
const rewards_controller_1 = require("./rewards.controller");
const rewards_service_1 = require("./rewards.service");
const event_entity_1 = require("../events/event.entity");
let RewardsModule = class RewardsModule {
};
RewardsModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([reward_entity_1.default, event_entity_1.default])],
        controllers: [rewards_controller_1.default],
        providers: [rewards_service_1.default],
    })
], RewardsModule);
exports.RewardsModule = RewardsModule;
//# sourceMappingURL=rewards.module.js.map