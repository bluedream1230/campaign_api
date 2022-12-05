"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AudiencesModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const event_entity_1 = require("../events/event.entity");
const user_entity_1 = require("../users/user.entity");
const audiences_controller_1 = require("./audiences.controller");
const audiences_entity_1 = require("./audiences.entity");
const audiences_service_1 = require("./audiences.service");
let AudiencesModule = class AudiencesModule {
};
AudiencesModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([audiences_entity_1.default, event_entity_1.default, user_entity_1.default])],
        controllers: [audiences_controller_1.default],
        providers: [audiences_service_1.default],
    })
], AudiencesModule);
exports.AudiencesModule = AudiencesModule;
//# sourceMappingURL=audiences.module.js.map