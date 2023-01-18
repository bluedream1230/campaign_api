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
import { Request } from "express";
import { JwtAuthGuard } from "src/auth/guards/jwt-auth.guard";
import FindOneParams from "src/utils/findOneParams";
import ApisService from "./apis.service";

@ApiTags("MOBILE:Rewards")
@Controller("reward_api")
@UseInterceptors(ClassSerializerInterceptor)
export class RewardsController {
  constructor(private readonly apisService: ApisService) {}

  @Get()
  @ApiOperation({ summary: "Get all rewards" })
  getAllRewards() {
    return this.apisService.getAllRewards();
  }

  @Get(":id")
  @ApiResponse({
    status: 200,
    description: "The found record",
  })
  getRewardById(@Param() { id }: FindOneParams, @Req() req: any) {
    return this.apisService.getRewardsById(Number(id));
  }
}
