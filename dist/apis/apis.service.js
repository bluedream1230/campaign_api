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
const event_entity_1 = require("../events/event.entity");
const user_entity_1 = require("../users/user.entity");
const game_entity_1 = require("../games/game.entity");
const reward_entity_1 = require("../rewards/reward.entity");
const attend_entity_1 = require("../attends/attend.entity");
let ApisService = class ApisService {
    constructor(eventsRepository, usersRepository, gamesRepository, rewardsRepository, attendsRepository) {
        this.eventsRepository = eventsRepository;
        this.usersRepository = usersRepository;
        this.gamesRepository = gamesRepository;
        this.rewardsRepository = rewardsRepository;
        this.attendsRepository = attendsRepository;
    }
    async getEventById(id) {
        const event = await this.eventsRepository.findOne(id);
        const user = await this.usersRepository
            .createQueryBuilder("user")
            .leftJoinAndSelect("user.events", "event")
            .getOne();
        const game = await this.gamesRepository
            .createQueryBuilder("game")
            .leftJoinAndSelect("game.events", "event")
            .getOne();
        const reward = await this.rewardsRepository
            .createQueryBuilder("reward")
            .leftJoinAndSelect("reward.events", "event")
            .getOne();
        const result = {
            SponsorID: user.id,
            SponsorName: user.name,
            SponsorLogoURL: user.logo,
            EventName: event.name,
            EventLocation: event.location,
            EventStartTimeDate: event.start_time,
            EventCompleteTimeDate: event.end_time,
            SponsorEventCoins: event.event_coins,
            GameId: game.id,
            TriviaId: "",
            Time_Limit: event.duration,
            EventGameType: game.type,
            EventVideoURL: game.video_url,
            EventReward: reward.name,
            EventRewardPool: reward.ratelimit,
            EventUserLimit: event.user_limit,
            EventQRCodeURL: event.qr_code,
        };
        return result;
    }
    async getCoinById(id) {
        const events = await this.eventsRepository
            .createQueryBuilder("event")
            .leftJoinAndSelect("event.user", "user")
            .where(`user.id = '${id}'`)
            .getMany();
        if (!events || !events.length) {
            return 0;
        }
        const sum = events.reduce((total, item) => {
            return total + Number(item.event_coins);
        }, 0);
        const user = await this.usersRepository.findOne(id);
        return {
            SpnsorId: user.id,
            SponsorName: user.name,
            SponsorCoins: user.coins,
            SponsorCoinsUsed: user.coinsused,
            SponsorEventCoins: sum,
        };
    }
    async getRewardsById(id) {
        const reward = await this.rewardsRepository.findOne(id);
        const event = await this.eventsRepository
            .createQueryBuilder("event")
            .leftJoinAndSelect("event.reward", "reward")
            .getOne();
        return {
            EventName: event.name,
            RewardType: reward.type,
            RewardCategory: reward.category,
            RewardName: reward.name,
            RewardImageURL: reward.image_url,
            RewardDescription: reward.description,
            RewardCoinValue: reward.coinvalue,
            RewardRateLimit: reward.ratelimit,
            RewardTimeLimit: reward.timelimit,
        };
    }
    async getSponsorsById(id) {
        const user = await this.usersRepository.findOne(id);
        return {
            SponsorID: user.id,
            SponsorName: user.name,
            SponsorLogoURL: user.logo,
            SponsorAddress: {
                Street: user.street,
                Suite: user.suite,
                City: user.city,
                State: user.state,
                Zip: user.zip,
            },
            SponsorEmail: user.email,
            SponsorPhone: user.phone,
            SponsorSubscription: user.subscription,
        };
    }
    async getUsers(user) {
        const events = await this.eventsRepository.find({
            where: {
                user: { id: user.id },
            },
        });
        const eventIds = events.map((e) => e.id);
        const attendevent = await this.attendsRepository.find({
            where: {
                event_id: typeorm_2.In(eventIds),
            },
        });
        const totalList = [];
        await Promise.all(attendevent.map(async (item, index) => {
            const fan = await this.usersRepository.findOne(item.user_id);
            const event = await this.eventsRepository.findOne(item.event_id);
            totalList.push({ fan, event });
        }));
        return totalList;
    }
    async getUsersByEventId(id) {
        const fans = await this.attendsRepository.find({
            where: {
                event_id: id,
            },
        });
        const event = await this.eventsRepository.find({
            where: {
                id: id,
            },
            relations: ["game"],
        });
        const user_num = fans.length;
        const totalData = [];
        await Promise.all(fans.map(async (item, index) => {
            const fan = await this.usersRepository.findOne(item.user_id);
            totalData.push({ fan });
        }));
        let win_num = 0;
        totalData.map((item, index) => {
            if (item.fan.completion == 100) {
                win_num++;
            }
        });
        return { totalData, event, user_num, win_num };
    }
};
ApisService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(event_entity_1.default)),
    __param(1, typeorm_1.InjectRepository(user_entity_1.default)),
    __param(2, typeorm_1.InjectRepository(game_entity_1.default)),
    __param(3, typeorm_1.InjectRepository(reward_entity_1.default)),
    __param(4, typeorm_1.InjectRepository(attend_entity_1.default)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], ApisService);
exports.default = ApisService;
//# sourceMappingURL=apis.service.js.map