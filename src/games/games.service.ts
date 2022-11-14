import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import Game from "./game.entity";
import CreateGameDto from "./dto/createGame.dto";
import GameNotFoundException from "./exceptions/gameNotFound.exception";

@Injectable()
export default class GamesService {
  constructor(
    @InjectRepository(Game)
    private gamesRepository: Repository<Game>
  ) {}

  getAllGames() {
    return this.gamesRepository.find();
  }

  async getGameById(id: number) {
    const game = await this.gamesRepository.findOne(id);
    if (game) {
      return game;
    }

    throw new GameNotFoundException(id);
  }

  async createGame(game: CreateGameDto) {
    const newGame = await this.gamesRepository.create(game);
    await this.gamesRepository.save(newGame);
    return newGame;
  }

  async deleteGame(id: number) {
    const deleteResponse = await this.gamesRepository.delete(id);
    if (!deleteResponse.affected) {
      throw new GameNotFoundException(id);
    }
  }
}
