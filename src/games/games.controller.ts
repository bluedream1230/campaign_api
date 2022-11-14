import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  UseGuards,
  UseInterceptors,
  ClassSerializerInterceptor,
  Post,
} from "@nestjs/common";
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from "@nestjs/swagger";
import { JwtAuthGuard } from "src/auth/guards/jwt-auth.guard";
import FindOneParams from "src/utils/findOneParams";
import CreateEventDto from "src/events/dto/createEvent.dto";
import GamesService from "./games.service";
import CreateGameDto from "./dto/createGame.dto";

@ApiBearerAuth()
@ApiTags("Games")
@Controller("games")
@UseInterceptors(ClassSerializerInterceptor)
export default class GamesController {
  constructor(private readonly gamesService: GamesService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: "Get all games" })
  getAllGames() {
    return this.gamesService.getAllGames();
  }

  @Get(":id")
  @UseGuards(JwtAuthGuard)
  @ApiResponse({
    status: 200,
    description: "The found record",
  })
  getGameById(@Param() { id }: FindOneParams) {
    return this.gamesService.getGameById(Number(id));
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: "Create game" })
  @ApiResponse({ status: 403, description: "Forbidden." })
  async createGame(@Body() game: CreateGameDto) {
    return this.gamesService.createGame(game);
  }

  @Delete(":id")
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: "Delete game" })
  async deleteGame(@Param() { id }: FindOneParams) {
    return this.gamesService.deleteGame(Number(id));
  }
}
