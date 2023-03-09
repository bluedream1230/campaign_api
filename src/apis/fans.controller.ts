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
  Req,
} from "@nestjs/common";
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from "@nestjs/swagger";
import CreateAttendDto from "src/attends/dto/attendCreate.dto";
import { JwtAuthGuard } from "src/auth/guards/jwt-auth.guard";
import RequestWithUser from "src/auth/interface/requestWithUser";
import FindOneParams from "src/utils/findOneParams";
import ApisService from "./apis.service";

@ApiTags("Fans")
@Controller("fan")
@UseInterceptors(ClassSerializerInterceptor)
export class FansController {
  constructor(private readonly apisService: ApisService) {}

  @Get()
  @ApiResponse({
    status: 200,
    description: "The found record",
  })
  getUsers() {
    return this.apisService.getUsers();
  }

  @Get("event/:id")
  @ApiResponse({
    status: 200,
    description: "The found record",
  })
  getUsersByEventId(@Param() { id }: FindOneParams) {
    return this.apisService.getUsersByEventId(Number(id));
  }

  @Post()
  @ApiOperation({ summary: "Create attend" })
  @ApiResponse({ status: 403, description: "Forbidden." })
  async createGame(@Body() attend: CreateAttendDto) {
    return this.apisService.createAttend(attend);
  }
}
