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
@ApiTags("MOBILE:Sponsors")
@Controller("sponsor_api")
@UseInterceptors(ClassSerializerInterceptor)
export class SponsorsController {
  constructor(private readonly apisService: ApisService) {}

  @Get(":id")
  @ApiResponse({
    status: 200,
    description: "The found record",
  })
  getSponsorById(@Param() { id }: FindOneParams) {
    return this.apisService.getSponsorsById(Number(id));
  }
}
