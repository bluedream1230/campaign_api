import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import Attend from "./attend.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Attend])],
})
export class AttendsModule {}
