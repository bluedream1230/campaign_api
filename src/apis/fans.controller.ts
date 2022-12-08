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
import RequestWithUser from "src/auth/interface/requestWithUser";
import FindOneParams from "src/utils/findOneParams";
import ApisService from "./apis.service";

@ApiBearerAuth()
@ApiTags("Fans")
@Controller("fan")
@UseInterceptors(ClassSerializerInterceptor)
export class FansController {
  constructor(private readonly apisService: ApisService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiResponse({
    status: 200,
    description: "The found record",
  })
  getUsers(@Req() req: RequestWithUser) {
    return this.apisService.getUsers(req.user);
  }

  @Get("event/:id")
  @UseGuards(JwtAuthGuard)
  @ApiResponse({
    status: 200,
    description: "The found record",
  })
  getUsersByEventId(@Param() { id }: FindOneParams) {
    return this.apisService.getUsersByEventId(Number(id));
  }
}
