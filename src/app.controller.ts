import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from "@nestjs/common";
import { AuthService } from "./auth/auth.service";
import { JwtAuthGuard } from "./auth/guards/jwt-auth.guard";
import {
  ApiBearerAuth,
  ApiTags,
  ApiOperation,
  ApiResponse,
} from "@nestjs/swagger";
import LoginUserDto from "./users/dto/loginUser.dto";

@ApiBearerAuth()
@ApiTags("Login")
@Controller("auth")
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @Post("login")
  @ApiOperation({ summary: "Login with default name and pwd" })
  @ApiResponse({ status: 403, description: "Forbidden." })
  async login(@Body() loginData: LoginUserDto) {
    return this.authService.login(loginData);
  }

  @Get("profile")
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: "Get login profile" })
  getProfile(@Request() req) {
    return req.user;
  }
}
