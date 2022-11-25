// import {
//   Body,
//   Controller,
//   Get,
//   Post,
//   Request,
//   UseGuards,
//   HttpStatus,
//   HttpException,
// } from "@nestjs/common";
// import { AuthService } from "./auth/auth.service";
// import { JwtAuthGuard } from "./auth/guards/jwt-auth.guard";
// import PostgresErrorCode from "./database/postgresErrorCode.enum";
// import { UsersService } from "./users/users.service";
// import {
//   ApiBearerAuth,
//   ApiTags,
//   ApiOperation,
//   ApiResponse,
// } from "@nestjs/swagger";
// import LoginUserDto from "./users/dto/loginUser.dto";
// import CreateUserDto from "./users/dto/createUser.dto";

// @ApiTags("Login")
// @Controller("auth")
// export class AppController {
//   constructor(
//     private readonly authService: AuthService,
//     private readonly usersService: UsersService
//   ) {}

//   @Post("login")
//   @ApiOperation({ summary: "Login with default name and pwd" })
//   @ApiResponse({ status: 403, description: "Forbidden." })
//   async login(@Body() loginData: LoginUserDto) {
//     return this.authService.login(loginData);
//   }

//   @Post("create")
//   @UseGuards(JwtAuthGuard)
//   @ApiOperation({ summary: "Create user" })
//   async register(@Body() registrationData: CreateUserDto) {
//     try {
//       const createdUser = await this.usersService.create({
//         ...registrationData,
//       });
//       return createdUser;
//     } catch (error) {
//       if (error?.code === PostgresErrorCode.UniqueViolation) {
//         throw new HttpException(
//           "User with that email already exists",
//           HttpStatus.BAD_REQUEST
//         );
//       }
//       throw new HttpException(
//         "Something went wrong",
//         HttpStatus.INTERNAL_SERVER_ERROR
//       );
//     }
//   }
// }
