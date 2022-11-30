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
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const findOneParams_1 = require("../utils/findOneParams");
const createEvent_dto_1 = require("./dto/createEvent.dto");
const updateEvent_dto_1 = require("./dto/updateEvent.dto");
const events_service_1 = require("./events.service");
const requestWithUser_1 = require("../auth/interface/requestWithUser");
let EventsController = class EventsController {
    constructor(eventsService) {
        this.eventsService = eventsService;
    }
    async getAllEvents(req) {
        return this.eventsService.getAllEvents(req.user);
    }
    getEventById({ id }) {
        return this.eventsService.getEventById(Number(id));
    }
    async createEvent({ id }, event, req) {
        return this.eventsService.createEvent(Number(id), event, req.user);
    }
    async updateEvent({ id }, event) {
        return this.eventsService.updateEvent(Number(id), event);
    }
    async deleteEvent({ id }) {
        return this.eventsService.deleteEvent(Number(id));
    }
};
__decorate([
    common_1.Get(),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    swagger_1.ApiOperation({ summary: "Get all events" }),
    __param(0, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], EventsController.prototype, "getAllEvents", null);
__decorate([
    common_1.Get(":id"),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    swagger_1.ApiResponse({
        status: 200,
        description: "The found record",
    }),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [findOneParams_1.default]),
    __metadata("design:returntype", void 0)
], EventsController.prototype, "getEventById", null);
__decorate([
    common_1.Post(":id"),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    swagger_1.ApiOperation({ summary: "Create event" }),
    swagger_1.ApiResponse({ status: 403, description: "Forbidden." }),
    __param(0, common_1.Param()),
    __param(1, common_1.Body()),
    __param(2, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [findOneParams_1.default,
        createEvent_dto_1.default, Object]),
    __metadata("design:returntype", Promise)
], EventsController.prototype, "createEvent", null);
__decorate([
    common_1.Patch(":id"),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    swagger_1.ApiOperation({ summary: "Update event" }),
    swagger_1.ApiResponse({ status: 403, description: "Forbidden." }),
    __param(0, common_1.Param()),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [findOneParams_1.default,
        updateEvent_dto_1.default]),
    __metadata("design:returntype", Promise)
], EventsController.prototype, "updateEvent", null);
__decorate([
    common_1.Delete(":id"),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    swagger_1.ApiOperation({ summary: "Delete event" }),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [findOneParams_1.default]),
    __metadata("design:returntype", Promise)
], EventsController.prototype, "deleteEvent", null);
EventsController = __decorate([
    swagger_1.ApiBearerAuth(),
    swagger_1.ApiTags("Events"),
    common_1.Controller("events"),
    common_1.UseInterceptors(common_1.ClassSerializerInterceptor),
    __metadata("design:paramtypes", [events_service_1.default])
], EventsController);
exports.default = EventsController;
//# sourceMappingURL=events.controller.js.map