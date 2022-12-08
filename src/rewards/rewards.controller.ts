/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  HttpException,
  HttpStatus,
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
import CreateRewardDto from "./dto/createReward.dto";
import UpdateRewardDto from "./dto/updateReward.dto";
import RewardsService from "./rewards.service";
import RequestWithUser from "src/auth/interface/requestWithUser";
@ApiBearerAuth()
@ApiTags("Rewards")
@Controller("rewards")
@UseInterceptors(ClassSerializerInterceptor)
export default class RewardsController {
  constructor(private readonly rewardsService: RewardsService) {}

  @Get("rewardsinfo")
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: "Get all rewards and info" })
  getAllRewards(@Req() req: RequestWithUser) {
    return this.rewardsService.getAllRewards(req.user);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: "Get all rewards" })
  getOnlyRewards(@Req() req: RequestWithUser) {
    return this.rewardsService.getOnlyRewards(req.user);
  }

  @Get(":id")
  @UseGuards(JwtAuthGuard)
  @ApiResponse({
    status: 200,
    description: "The found record",
  })
  getRewardById(@Param() { id }: FindOneParams) {
    return this.rewardsService.getRewardById(Number(id));
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: "Create reward" })
  async createReward(
    @Body() reward: CreateRewardDto,
    @Req() req: RequestWithUser
  ) {
    try {
      const createReward = await this.rewardsService.createReward(
        reward,
        req.user
      );
      return reward;
    } catch (error) {
      throw new HttpException(
        "Something went wrong",
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  @Patch(":id")
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: "Update reward" })
  @ApiResponse({ status: 403, description: "Forbidden." })
  async updateReward(
    @Param() { id }: FindOneParams,
    @Body() reward: UpdateRewardDto
  ) {
    return this.rewardsService.updateReward(Number(id), reward);
  }

  @Delete(":id")
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: "Delete reward" })
  async deleteReward(@Param() { id }: FindOneParams) {
    return this.rewardsService.deleteReward(Number(id));
  }
}
