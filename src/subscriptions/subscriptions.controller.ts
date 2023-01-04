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
import CreateSubscriptionDto from "./dto/createSubscription.dto";
import SubscriptionsService from "./subscriptions.service";

@ApiBearerAuth()
@ApiTags("Subscription")
@Controller("subscriptions")
@UseInterceptors(ClassSerializerInterceptor)
export default class SubscriptionsController {
  constructor(private readonly subscriptionsService: SubscriptionsService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: "Get all subscriptioins" })
  getAllSubscriptions() {
    return this.subscriptionsService.getAllSubscriptions();
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: "Create subscription" })
  @ApiResponse({ status: 403, description: "Forbidden." })
  async createSubscription(@Body() subscription: CreateSubscriptionDto) {
    return this.subscriptionsService.createSubscription(subscription);
  }
}
