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
import CreateEventDto from "./dto/createEvent.dto";
import UpdateEventDto from "./dto/updateEvent.dto";
import EventsService from "./events.service";
import RequestWithUser from "src/auth/interface/requestWithUser";
import FindGameParams from "src/utils/findGameParams";
import FindRewardParams from "src/utils/findRewardParams";
import FindAudienceParams from "src/utils/findAudienceParams";
import { AnyFilesInterceptor } from "@nestjs/platform-express";
import { UploadedFiles } from "@nestjs/common/decorators";
import { S3Service } from "src/share/s3.service";
import { Console } from "console";

@ApiBearerAuth()
@ApiTags("Events")
@Controller("events")
@UseInterceptors(ClassSerializerInterceptor)
export default class EventsController {
  constructor(
    private readonly eventsService: EventsService,
    private readonly S3Service: S3Service
  ) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: "Get all events" })
  async getAllEvents(@Req() req: RequestWithUser) {
    return this.eventsService.getAllEvents(req.user);
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

  @Post(":gameId/:audienceId")
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: "Create event" })
  @ApiResponse({ status: 403, description: "Forbidden." })
  @UseInterceptors(AnyFilesInterceptor({ dest: "./upload" }))
  async createEvent(
    @Param() { gameId }: FindGameParams,
    @Param() { audienceId }: FindAudienceParams,
    @Body() data,
    @UploadedFiles() files: Array<Express.Multer.File>,
    @Req() req: RequestWithUser
  ): Promise<CreateEventDto> {
    const event = JSON.parse(data.data) as CreateEventDto;
    const rewardIds = JSON.parse(data.rewardIds) as number[];
    const video_url = JSON.parse(data.videourl) as string;
    const path = "/test";
    let s3Url;
    console.log("sdfsd", rewardIds, event, video_url);
    for (const file of files) {
      console.log(file);
      s3Url = await this.S3Service.upload(path, file);
      console.log(s3Url);
    }
    return this.eventsService.createEvent(
      Number(gameId),
      Number(audienceId),
      event,
      rewardIds,
      video_url,
      req.user,
      s3Url
    );
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
