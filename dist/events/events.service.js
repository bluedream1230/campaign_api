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
const event_entity_1 = require("./event.entity");
const eventNotFound_exception_1 = require("./exceptions/eventNotFound.exception");
const user_entity_1 = require("../users/user.entity");
const attend_entity_1 = require("../attends/attend.entity");
const game_entity_1 = require("../games/game.entity");
let EventsService = class EventsService {
    constructor(eventsRepository, attendsRepository, gamesRepository) {
        this.eventsRepository = eventsRepository;
        this.attendsRepository = attendsRepository;
        this.gamesRepository = gamesRepository;
    }
    async getAllEvents(user) {
        const events = await this.eventsRepository
            .createQueryBuilder("event")
            .where(`event.userId = '${user.id}'`)
            .getMany();
        const totalList = [];
        await Promise.all(events.map(async (item, index) => {
            const users_num = await this.attendsRepository
                .createQueryBuilder()
                .where(`event_id = '${item.id}'`)
                .getCount();
            const event = await this.eventsRepository
                .createQueryBuilder("event")
                .leftJoinAndSelect("event.game", "game")
                .where(`event.id = '${item.id}'`)
                .getMany();
            const qrcode = require("qrcode-js");
            const base64 = qrcode.toDataURL(event[0].qr_code, 4);
            totalList.push(Object.assign(Object.assign({}, (Object.assign(Object.assign({}, event[0]), { qr_code: base64 }) || {})), { users_num }));
        }));
        return totalList;
    }
    async getEventById(id) {
        const event = await this.eventsRepository.findOne(id);
        const qrcode = require("qrcode-js");
        const url = "https://saviour.earth/ZoomIn?event_id=" + event.id;
        const base64 = qrcode.toDataURL(url, 4);
        console.log(base64);
        if (event) {
            return Object.assign(Object.assign({}, event), { qr_code: base64 });
        }
        console.log(event);
        throw new eventNotFound_exception_1.default(id);
    }
    async createEvent(gameId, rewardId, audienceId, event, user) {
        const newEvent = await this.eventsRepository.create(Object.assign(Object.assign({}, event), { user: user, game: {
                id: gameId,
            }, reward: {
                id: rewardId,
            }, audience: {
                id: audienceId,
            } }));
        console.log(newEvent);
        const result = await this.eventsRepository.save(newEvent);
        const qrcode = require("qrcode-js");
        const url = "https://saviour.earth/ZoomIn?event_id=" + result.id;
        const base64 = qrcode.toDataURL(url, 4);
        console.log(base64);
        const final = await this.eventsRepository.update(result.id, {
            qr_code: url,
        });
        const res = await this.eventsRepository.findOne(result.id);
        return res;
    }
    async updateEvent(id, event) {
        await this.eventsRepository.update(id, event);
        throw new eventNotFound_exception_1.default(id);
    }
    async deleteEvent(id) {
        const deleteResponse = await this.eventsRepository.delete(id);
        if (!deleteResponse.affected) {
            throw new eventNotFound_exception_1.default(id);
        }
    }
};
EventsService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(event_entity_1.default)),
    __param(1, typeorm_1.InjectRepository(attend_entity_1.default)),
    __param(2, typeorm_1.InjectRepository(game_entity_1.default)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], EventsService);
exports.default = EventsService;
//# sourceMappingURL=events.service.js.map