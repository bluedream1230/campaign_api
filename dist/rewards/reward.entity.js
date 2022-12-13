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
const event_entity_1 = require("../events/event.entity");
const user_entity_1 = require("../users/user.entity");
let Reward = class Reward {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Reward.prototype, "id", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], Reward.prototype, "name", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], Reward.prototype, "type", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], Reward.prototype, "category", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], Reward.prototype, "image_url", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], Reward.prototype, "description", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Reward.prototype, "coinvalue", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Reward.prototype, "ratelimit", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Reward.prototype, "timelimit", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.CreateDateColumn({
        type: "timestamptz",
        default: () => "CURRENT_TIMESTAMP(6)",
    }),
    __metadata("design:type", Date)
], Reward.prototype, "createdAt", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.UpdateDateColumn({
        type: "timestamptz",
        default: () => "CURRENT_TIMESTAMP(6)",
        onUpdate: "CURRENT_TIMESTAMP(6)",
    }),
    __metadata("design:type", Date)
], Reward.prototype, "updatedAt", void 0);
__decorate([
    typeorm_1.ManyToOne(() => user_entity_1.default, (user) => user.rewards),
    __metadata("design:type", user_entity_1.default)
], Reward.prototype, "user", void 0);
__decorate([
    typeorm_1.OneToMany(() => event_entity_1.default, (event) => event.reward),
    __metadata("design:type", Array)
], Reward.prototype, "events", void 0);
Reward = __decorate([
    typeorm_1.Entity("reward"),
    typeorm_1.Index([
        "name",
        "type",
        "category",
        "image_url",
        "description",
        "coinvalue",
        "ratelimit",
        "timelimit",
        "user",
    ], { unique: true })
], Reward);
exports.default = Reward;
//# sourceMappingURL=reward.entity.js.map