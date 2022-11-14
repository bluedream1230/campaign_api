import { UsersService } from "./users.service";
import {
  Controller,
  Post,
  HttpException,
  HttpStatus,
  Body,
  UseGuards,
  Param,
  Patch,
  Request,
} from "@nestjs/common";
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from "@nestjs/swagger";
import CreateUserDto from "./dto/createUser.dto";
import PostgresErrorCode from "../database/postgresErrorCode.enum";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard";
import AddressUserDto from "./dto/addressUser.dto";
import FindOneParams from "src/utils/findOneParams";
import UpdateUserDto from "./dto/updateUser.dto";

@ApiBearerAuth()
@ApiTags("Users")
@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post("create")
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: "Create user" })
  async register(@Body() registrationData: CreateUserDto) {
    try {
      const createdUser = await this.usersService.create({
        ...registrationData,
      });
      return createdUser;
    } catch (error) {
      if (error?.code === PostgresErrorCode.UniqueViolation) {
        throw new HttpException(
          "User with that email already exists",
          HttpStatus.BAD_REQUEST
        );
      }
      throw new HttpException(
        "Something went wrong",
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  @Patch("update")
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: "Update user" })
  async update(@Request() req, @Body() updateUser: UpdateUserDto) {
    const id = req.user.id;
    try {
      const updatedUser = await this.usersService.update(
        Number(id),
        updateUser
      );
      return updatedUser;
    } catch (error) {
      throw new HttpException(
        "Something went wrong",
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  @Patch(":id")
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: "Create address" })
  async updatedAddress(
    @Param() { id }: FindOneParams,
    @Body() addressData: AddressUserDto
  ) {
    try {
      const updatedAddress = await this.usersService.updateAddress(
        Number(id),
        addressData
      );
      return addressData;
    } catch (error) {
      if (error?.code === PostgresErrorCode.UniqueViolation) {
        throw new HttpException(
          "User with that email already exists",
          HttpStatus.BAD_REQUEST
        );
      }
      throw new HttpException(
        "Something went wrong",
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }
}
