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
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const rewardNotFound_exception_1 = require("./exceptions/rewardNotFound.exception");
const reward_entity_1 = require("./reward.entity");
const event_entity_1 = require("../events/event.entity");
let RewardsService = class RewardsService {
    constructor(rewardsRepository, eventsRepository) {
        this.rewardsRepository = rewardsRepository;
        this.eventsRepository = eventsRepository;
    }
    getAllRewards() {
        return this.rewardsRepository.find();
    }
    async getRewardById(id) {
        const reward = await this.rewardsRepository.findOne(id);
        if (reward) {
            return reward;
        }
        throw new rewardNotFound_exception_1.default(id);
    }
    async createReward(reward) {
        const newReward = await this.rewardsRepository.create(reward);
        await this.rewardsRepository.save(newReward);
        return newReward;
    }
    async updateReward(id, reward) {
        await this.rewardsRepository.update(id, reward);
        throw new rewardNotFound_exception_1.default(id);
    }
    async deleteReward(id) {
        const deleteResponse = await this.rewardsRepository.delete(id);
        if (!deleteResponse.affected) {
            throw new rewardNotFound_exception_1.default(id);
        }
    }
};
RewardsService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(reward_entity_1.default)),
    __param(1, typeorm_1.InjectRepository(event_entity_1.default)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], RewardsService);
exports.default = RewardsService;
//# sourceMappingURL=rewards.service.js.map