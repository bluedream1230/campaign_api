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
import CreateEventDto from "./dto/createEvent.dto";
import UpdateEventDto from "./dto/updateEvent.dto";
import EventsService from "./events.service";

@ApiBearerAuth()
@ApiTags("Events")
@Controller("events")
@UseInterceptors(ClassSerializerInterceptor)
export default class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: "Get all events" })
  getAllEvents() {
    return this.eventsService.getAllEvents();
  }

  @Get(":id")
  @UseGuards(JwtAuthGuard)
  @ApiResponse({
    status: 200,
    description: "The found record",
  })
  getEventById(@Param() { id }: FindOneParams) {
    return this.eventsService.getEventById(Number(id));
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: "Create event" })
  @ApiResponse({ status: 403, description: "Forbidden." })
  async createEvent(@Body() event: CreateEventDto) {
    return this.eventsService.createEvent(event);
  }

  @Patch(":id")
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: "Update event" })
  @ApiResponse({ status: 403, description: "Forbidden." })
  async updateEvent(
    @Param() { id }: FindOneParams,
    @Body() event: UpdateEventDto
  ) {
    return this.eventsService.updateEvent(Number(id), event);
  }

  @Delete(":id")
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: "Delete event" })
  async deleteEvent(@Param() { id }: FindOneParams) {
    return this.eventsService.deleteEvent(Number(id));
  }
}
