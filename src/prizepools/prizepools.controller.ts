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
import CreatePrizePoolDto from "./dto/createPrizepool.dto";
import PrizepoolsService from "./prizepools.service";

@ApiBearerAuth()
@ApiTags("Prizepool")
@Controller("prizepools")
@UseInterceptors(ClassSerializerInterceptor)
export default class PrizepoolsController {
  constructor(private readonly prizepoolsService: PrizepoolsService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: "Get all prizepools" })
  getAllPrizepools() {
    return this.prizepoolsService.getAllPrizepools();
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: "Create prizepool" })
  @ApiResponse({ status: 403, description: "Forbidden." })
  async createPrizepool(@Body() prizepool: CreatePrizePoolDto) {
    return this.prizepoolsService.createPrizepool(prizepool);
  }
}
