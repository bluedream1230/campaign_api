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
import CreateAudienceDto from "./dto/createAudience.dto";
import AudiencesService from "./audiences.service";

@ApiBearerAuth()
@ApiTags("Audiences")
@Controller("audiences")
@UseInterceptors(ClassSerializerInterceptor)
export default class AudiencesController {
  constructor(private readonly audiencesService: AudiencesService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: "Get all audiences" })
  getAllAudiences() {
    return this.audiencesService.getAllAudiences();
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: "Create audience" })
  @ApiResponse({ status: 403, description: "Forbidden." })
  async createAudience(@Body() audience: CreateAudienceDto) {
    return this.audiencesService.createAudience(audience);
  }
}
