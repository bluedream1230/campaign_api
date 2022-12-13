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
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
const game_entity_1 = require("../games/game.entity");
const user_entity_1 = require("../users/user.entity");
const attend_entity_1 = require("../attends/attend.entity");
const reward_entity_1 = require("../rewards/reward.entity");
const audiences_entity_1 = require("../audiences/audiences.entity");
let Event = class Event {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Event.prototype, "id", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], Event.prototype, "name", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], Event.prototype, "location", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.Column({ default: "2022.11.01" }),
    __metadata("design:type", Date)
], Event.prototype, "start_time", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.Column({ default: "2022.11.01" }),
    __metadata("design:type", Date)
], Event.prototype, "end_time", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.Column({ default: 1 }),
    __metadata("design:type", Number)
], Event.prototype, "user_limit", void 0);
__decorate([
    swagger_1.ApiProperty({ default: "url" }),
    typeorm_1.Column(),
    __metadata("design:type", String)
], Event.prototype, "qr_code", void 0);
__decorate([
    swagger_1.ApiProperty({ default: 10 }),
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Event.prototype, "event_coins", void 0);
__decorate([
    swagger_1.ApiProperty({ default: 5 }),
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Event.prototype, "duration", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.CreateDateColumn({
        type: "timestamptz",
        default: () => "CURRENT_TIMESTAMP(6)",
    }),
    __metadata("design:type", Date)
], Event.prototype, "createdAt", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.UpdateDateColumn({
        type: "timestamptz",
        default: () => "CURRENT_TIMESTAMP(6)",
        onUpdate: "CURRENT_TIMESTAMP(6)",
    }),
    __metadata("design:type", Date)
], Event.prototype, "updatedAt", void 0);
__decorate([
    typeorm_1.ManyToOne(() => game_entity_1.default, (game) => game.events),
    __metadata("design:type", game_entity_1.default)
], Event.prototype, "game", void 0);
__decorate([
    typeorm_1.ManyToOne(() => user_entity_1.default, (user) => user.events),
    __metadata("design:type", user_entity_1.default)
], Event.prototype, "user", void 0);
__decorate([
    typeorm_1.ManyToOne(() => reward_entity_1.default, (reward) => reward.events),
    __metadata("design:type", reward_entity_1.default)
], Event.prototype, "reward", void 0);
__decorate([
    typeorm_1.ManyToOne(() => audiences_entity_1.default, (audience) => audience.id),
    __metadata("design:type", audiences_entity_1.default)
], Event.prototype, "audience", void 0);
Event = __decorate([
    typeorm_1.Entity("event"),
    typeorm_1.Index([
        "name",
        "location",
        "start_time",
        "end_time",
        "user_limit",
        "qr_code",
        "event_coins",
        "game",
        "user",
        "audience",
        "reward",
    ], { unique: true })
], Event);
exports.default = Event;
//# sourceMappingURL=event.entity.js.map