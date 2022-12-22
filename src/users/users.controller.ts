/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
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
  Put,
  Get,
  Req,
  UploadedFiles,
  UseInterceptors,
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
import BillUserDto from "./dto/billUser.dto";
import FindOneParams from "src/utils/findOneParams";
import UpdateUserDto from "./dto/updateUser.dto";
import JoinEventDto from "./dto/joinEvent.dto";
import CreateAttendDto from "src/attends/dto/attendCreate.dto";
import RequestWithUser from "src/auth/interface/requestWithUser";
import { S3Service } from "src/share/s3.service";
import { AnyFilesInterceptor } from "@nestjs/platform-express";

@ApiBearerAuth()
@ApiTags("Users")
@Controller("users")
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly S3Service: S3Service
  ) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: "Get user info" })
  getOnlyRewards(@Req() req: RequestWithUser) {
    return this.usersService.getById(req.user.id);
  }

  @Put("update")
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: "Update user" })
  @UseInterceptors(AnyFilesInterceptor({ dest: "./upload" }))
  async update(
    @Request() req,
    @Body() data,
    @UploadedFiles() file: Express.Multer.File
  ) {
    const id = req.user.id;
    const updateUser = JSON.parse(data.data) as UpdateUserDto;

    const path = "/test";
    console.log(file);
    const s3Url = await this.S3Service.upload(path, file[0]);
    console.log(s3Url);
    try {
      const updatedUser = await this.usersService.update(Number(id), {
        ...updateUser,
        logo: s3Url,
      });
      return updatedUser;
    } catch (error) {
      console.log(error);
      throw new HttpException(
        "Something went wrong",
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  @Put("bill")
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: "Update bill" })
  async updatedBill(@Request() req, @Body() billData: BillUserDto) {
    const id = req.user.id;
    try {
      const updatedBill = await this.usersService.updateBill(
        Number(id),
        billData
      );
      return billData;
    } catch (error) {
      console.log(error);
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

  @Patch("join/:id")
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: "Join Event" })
  async joinEvent(
    @Request() req,
    @Param() { id }: FindOneParams,
    @Body() joinedEvent: CreateAttendDto
  ) {
    const user_id = req.user.id;
    try {
      const joinEvent = await this.usersService.joinEvent(
        Number(user_id),
        Number(id),
        joinedEvent
      );
      return joinEvent;
    } catch (error) {
      throw new HttpException(
        "Something went wrong",
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  @Patch("audience/:id")
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: "Join audience" })
  async updateAudience(@Request() req, @Param() { id }: FindOneParams) {
    const user_id = req.user.id;
    try {
      const updatedUser = await this.usersService.updateAudience(
        Number(id),
        Number(user_id)
      );
      return updatedUser;
    } catch (error) {
      throw new HttpException(
        "Something went wrong",
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }
}
