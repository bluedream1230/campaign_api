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

@ApiTags("MOBILE:Coins")
@Controller("coin_api")
@UseInterceptors(ClassSerializerInterceptor)
export default class CoinsController {
  constructor(private readonly apisService: ApisService) {}

  @Get(":id")
  @ApiResponse({
    status: 200,
    description: "The found record",
  })
  getCoinById(@Param() { id }: FindOneParams) {
    return this.apisService.getCoinById(Number(id));
  }
}
