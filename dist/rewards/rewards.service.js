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
const attend_entity_1 = require("../attends/attend.entity");
const user_entity_1 = require("../users/user.entity");
let RewardsService = class RewardsService {
    constructor(rewardsRepository, eventsRepository, attendsRepository) {
        this.rewardsRepository = rewardsRepository;
        this.eventsRepository = eventsRepository;
        this.attendsRepository = attendsRepository;
    }
    async getAllRewards(user) {
        const data = await this.rewardsRepository.find({
            where: {
                user: { id: user.id },
            },
            relations: ["events"],
        });
        const eventIds = [];
        data.forEach(async (item) => {
            if (item.events) {
                eventIds.push(...item.events.map((e) => e.id));
            }
        });
        const attends = await this.attendsRepository
            .createQueryBuilder()
            .select(`COUNT(user_id) as "Count", event_id`)
            .where(`event_id IN (${eventIds.join(",")})`)
            .groupBy(`event_id`)
            .execute();
        const totalData = [];
        data.forEach((item) => {
            if (item.events.length) {
                item.events.forEach((e) => {
                    const attend = attends.find((a) => a.event_id === e.id);
                    if (attend)
                        totalData.push({
                            reward: item,
                            event: e,
                            users_num: Number(attend.Count),
                        });
                });
            }
            else
                totalData.push({ reward: item, event: null, users_num: 0 });
        });
        return totalData;
    }
    async getRewardById(id) {
        const reward = await this.rewardsRepository.findOne(id);
        if (reward) {
            return reward;
        }
        throw new rewardNotFound_exception_1.default(id);
    }
    async createReward(reward, user) {
        const newReward = await this.rewardsRepository.create(Object.assign(Object.assign({}, reward), { user }));
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
    __param(2, typeorm_1.InjectRepository(attend_entity_1.default)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], RewardsService);
exports.default = RewardsService;
//# sourceMappingURL=rewards.service.js.map