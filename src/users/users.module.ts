import { Module } from "@nestjs/common";
import { UsersService } from "./users.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import User from "./user.entity";
import Address from "./bill.entity";
import { UsersController } from "./users.controller";
import Attend from "src/attends/attend.entity";
import Audience from "src/audiences/audiences.entity";
import { MailController } from "src/sendgrid/mail.controller";
import { JwtModule } from "@nestjs/jwt";
import { jwtConstants } from "src/auth/constants";
import { SendgridService } from "src/sendgrid/sendgrid.service";
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Address, Attend, Audience]),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: "7d" },
    }),
    ConfigModule.forRoot(),
  ],
  providers: [UsersService, SendgridService],
  exports: [UsersService, SendgridService],
  controllers: [UsersController, MailController],
})
export class UsersModule {}
