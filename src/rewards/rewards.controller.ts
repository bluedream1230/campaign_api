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

@ApiBearerAuth()
@ApiTags("Rewards")
@Controller("rewards")
@UseInterceptors(ClassSerializerInterceptor)
export default class RewardsController {
  constructor(private readonly rewardsService: RewardsService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: "Get all rewards" })
  getAllRewards() {
    return this.rewardsService.getAllRewards();
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

  @Post(":id")
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: "Create reward" })
  async createReward(
    @Param() { id }: FindOneParams,
    @Body() reward: CreateRewardDto
  ) {
    try {
      const createReward = await this.rewardsService.createReward(
        Number(id),
        reward
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
