import FindOneParams from "src/utils/findOneParams";
import GamesService from "./games.service";
import CreateGameDto from "./dto/createGame.dto";
export default class GamesController {
    private readonly gamesService;
    constructor(gamesService: GamesService);
    getAllGames(): Promise<import("./game.entity").default[]>;
    getGameById({ id }: FindOneParams): Promise<import("./game.entity").default>;
    createGame(game: CreateGameDto): Promise<import("./game.entity").default>;
    deleteGame({ id }: FindOneParams): Promise<void>;
}
