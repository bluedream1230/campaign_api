import { Module } from "@nestjs/common";
import { UsersService } from "./users.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import User from "./user.entity";
import Address from "./address.entity";
import { UsersController } from "./users.controller";
import Attend from "src/attends/attend.entity";

@Module({
  imports: [TypeOrmModule.forFeature([User, Address, Attend])],
  providers: [UsersService],
  exports: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
