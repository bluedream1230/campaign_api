import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
  HttpStatus,
  HttpException,
  Param,
} from "@nestjs/common";
import { AuthService } from "../auth/auth.service";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard";
import PostgresErrorCode from "../database/postgresErrorCode.enum";
import { UsersService } from "../users/users.service";
import {
  ApiBearerAuth,
  ApiTags,
  ApiOperation,
  ApiResponse,
} from "@nestjs/swagger";
import LoginUserDto from "../users/dto/loginUser.dto";
import CreateUserDto from "../users/dto/createUser.dto";
import FindOneParams from "src/utils/findOneParams";
import UpdatePassDto from "src/users/dto/updatePass.dto";

@ApiTags("Authentication")
@Controller("auth")
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService
  ) {}

  @Post("login")
  @ApiOperation({ summary: "Login with default name and pwd" })
  @ApiResponse({ status: 403, description: "Forbidden." })
  async login(@Body() loginData: LoginUserDto) {
    return this.authService.login(loginData);
  }

  @Post("create")
  @ApiOperation({ summary: "Create user" })
  async register(@Body() registrationData: CreateUserDto) {
    console.log(registrationData);
    try {
      const createdUser = await this.usersService.create({
        ...registrationData,
      });
      console.log(createdUser);
      return createdUser;
    } catch (error) {
      if (error?.code === PostgresErrorCode.UniqueViolation) {
        throw new HttpException(
          "User with that email already exists",
          HttpStatus.BAD_REQUEST
        );
      }
      console.log("auth/create error: ", error);
      throw new HttpException(
        "Something went wrong",
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  @Get("user/:id")
  @ApiResponse({
    status: 200,
    description: "The found record",
  })
  getUserById(@Param() { id }: FindOneParams) {
    return this.usersService.getById(Number(id));
  }

  @Post("updatePass")
  @ApiOperation({ summary: "Update password" })
  async updatepass(@Body() registrationData: UpdatePassDto) {
    return this.usersService.updatePassword(registrationData);
  }
}
