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
import { JwtAuthGuard } from "src/auth/guards/jwt-auth.guard";
import FindOneParams from "src/utils/findOneParams";
import ApisService from "./apis.service";

@ApiTags("MOBILE:Events")
@Controller("event_api")
@UseInterceptors(ClassSerializerInterceptor)
export class EventsController {
  constructor(private readonly apisService: ApisService) {}

  @Get()
  @ApiOperation({ summary: "Get all events" })
  async getAllEvents() {
    return this.apisService.getAllEvents();
  }

  @Get(":id")
  @ApiResponse({
    status: 200,
    description: "The found record",
  })
  getEventById(@Param() { id }: FindOneParams) {
    return this.apisService.getEventById(Number(id));
  }

  @Get()
  @ApiResponse({
    status: 200,
    description: "The found record",
  })
  getOnlyAllEvent() {
    return this.apisService.getOnlyAllEvents();
  }
}
