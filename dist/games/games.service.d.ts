import { Repository } from "typeorm";
import Game from "./game.entity";
import CreateGameDto from "./dto/createGame.dto";
export default class GamesService {
    private gamesRepository;
    constructor(gamesRepository: Repository<Game>);
    getAllGames(): Promise<Game[]>;
    getGameById(id: number): Promise<Game>;
    createGame(game: CreateGameDto): Promise<Game>;
    deleteGame(id: number): Promise<void>;
}
