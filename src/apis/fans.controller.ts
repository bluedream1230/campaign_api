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
import FindEventParams from "src/utils/findEventParams";
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
  async createAttend(@Body() attend: CreateAttendDto) {
    return this.apisService.createAttend(attend);
  }

  @Post("update/:eventId/:id")
  @ApiOperation({ summary: "Update attend" })
  @ApiResponse({ status: 403, description: "Forbidden." })
  async updateAttend(
    @Param() { id }: FindOneParams,
    @Param() { eventId }: FindEventParams,
    @Body() attend: CreateAttendDto
  ) {
    console.log("id, eventId, attend", id, eventId, attend);
    return this.apisService.updateAttend(id, eventId, attend);
  }
}
