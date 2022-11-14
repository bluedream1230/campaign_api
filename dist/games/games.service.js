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
const game_entity_1 = require("./game.entity");
const gameNotFound_exception_1 = require("./exceptions/gameNotFound.exception");
let GamesService = class GamesService {
    constructor(gamesRepository) {
        this.gamesRepository = gamesRepository;
    }
    getAllGames() {
        return this.gamesRepository.find();
    }
    async getGameById(id) {
        const game = await this.gamesRepository.findOne(id);
        if (game) {
            return game;
        }
        throw new gameNotFound_exception_1.default(id);
    }
    async createGame(game) {
        const newGame = await this.gamesRepository.create(game);
        await this.gamesRepository.save(newGame);
        return newGame;
    }
    async deleteGame(id) {
        const deleteResponse = await this.gamesRepository.delete(id);
        if (!deleteResponse.affected) {
            throw new gameNotFound_exception_1.default(id);
        }
    }
};
GamesService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(game_entity_1.default)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], GamesService);
exports.default = GamesService;
//# sourceMappingURL=games.service.js.map