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
const address_entity_1 = require("./address.entity");
const event_entity_1 = require("../events/event.entity");
const attend_entity_1 = require("../attends/attend.entity");
let User = class User {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ unique: true }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    typeorm_1.Column({ default: "logo" }),
    __metadata("design:type", String)
], User.prototype, "logo", void 0);
__decorate([
    typeorm_1.Column({ default: "+1 222 222 2222" }),
    __metadata("design:type", String)
], User.prototype, "phone", void 0);
__decorate([
    typeorm_1.Column({ default: "subscription" }),
    __metadata("design:type", String)
], User.prototype, "subscription", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    typeorm_1.Column({ default: 0 }),
    __metadata("design:type", Number)
], User.prototype, "coins", void 0);
__decorate([
    typeorm_1.Column({ default: 0 }),
    __metadata("design:type", Number)
], User.prototype, "coinsused", void 0);
__decorate([
    typeorm_1.OneToOne(() => address_entity_1.default, {
        eager: true,
        cascade: true,
    }),
    typeorm_1.JoinColumn(),
    __metadata("design:type", address_entity_1.default)
], User.prototype, "address", void 0);
__decorate([
    typeorm_1.OneToMany(() => event_entity_1.default, (event) => event.user),
    __metadata("design:type", Array)
], User.prototype, "events", void 0);
User = __decorate([
    typeorm_1.Entity("user")
], User);
exports.default = User;
//# sourceMappingURL=user.entity.js.map