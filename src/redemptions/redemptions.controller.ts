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
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import CreateRedemptionDto from "src/redemptions/dto/redemptionCreate.dto";
import FindOneParams from "src/utils/findOneParams";
import RedemptionsService from "./redemptions.service";

@ApiTags("Redemptions")
@Controller("redemption")
@UseInterceptors(ClassSerializerInterceptor)
export class RedemptionsController {
  constructor(private readonly redemptionsService: RedemptionsService) {}

  @Get(":id")
  @ApiResponse({
    status: 200,
    description: "The found record",
  })
  getRedemptionsByUserId(@Param() { id }: FindOneParams) {
    return this.redemptionsService.getRedemptionsByUserId(Number(id));
  }

  @Post()
  @ApiOperation({ summary: "Create redemption" })
  @ApiResponse({ status: 403, description: "Forbidden." })
  async createRedemption(@Body() redemption: CreateRedemptionDto) {
    return this.redemptionsService.createRedemption(redemption);
  }
}
