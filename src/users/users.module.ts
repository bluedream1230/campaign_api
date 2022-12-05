import { Module } from "@nestjs/common";
import { UsersService } from "./users.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import User from "./user.entity";
import Address from "./address.entity";
import { UsersController } from "./users.controller";
import Attend from "src/attends/attend.entity";
import Audience from "src/audiences/audiences.entity";

@Module({
  imports: [TypeOrmModule.forFeature([User, Address, Attend, Audience])],
  providers: [UsersService],
  exports: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
