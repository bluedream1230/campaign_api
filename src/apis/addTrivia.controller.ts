import {
  Controller,
  Post,
  Param,
  UseInterceptors,
  ClassSerializerInterceptor,
  Body,
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

@Controller("addtrivia")
@UseInterceptors(ClassSerializerInterceptor)
export class TriviaController {
  constructor(private readonly apisService: ApisService) {}

  @Post()
  async addTrivia(@Body() data: any) {
    console.log(data);
    return this.apisService.addTrivia(data);
  }
}
