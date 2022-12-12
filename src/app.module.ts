import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
// import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AuthModule } from "./auth/auth.module";
import { AdminUsersModule } from "./adminUsers/admin.users.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import User from "./users/user.entity";
import Address from "./users/bill.entity";
import Event from "./events/event.entity";
import { UsersModule } from "./users/users.module";
import { EventsModule } from "./events/events.module";
import Game from "./games/game.entity";
import { GamesModule } from "./games/games.module";
import Reward from "./rewards/reward.entity";
import { RewardsModule } from "./rewards/rewards.module";
import Attend from "./attends/attend.entity";
import { AttendsModule } from "./attends/attends.module";
import { ApisModule } from "./apis/apis.module";
import Audience from "./audiences/audiences.entity";
import { AudiencesModule } from "./audiences/audiences.module";
import { SendgridService } from "./sendgrid/sendgrid.service";

// postgres://auggncnrngqcyv:5dfe3011e4a2fbe1e60ee4b323515a8be58f0ac7b6e0ceb561bf2edb44d0b7c6@ec2-3-219-135-162.compute-1.amazonaws.com:5432/dt0hlkmjdtsv6
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "zoomin",
      password: "zoomin",
      database: "zoom",
      entities: [User, Address, Event, Game, Reward, Attend, Audience],
      synchronize: true,
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
      // Run migrations automatically,
      // you can disable this if you prefer running migration manually.
      migrationsRun: false,
      logging: false,
      logger: "file",

      migrations: [__dirname + "/migrations/**/*{.ts,.js}"],
      cli: {
        // Location of migration should be inside src folder
        // to be compiled into dist/ folder.
        migrationsDir: "src/migrations",
      },
    }),
    AuthModule,
    AdminUsersModule,
    UsersModule,
    EventsModule,
    GamesModule,
    RewardsModule,
    AttendsModule,
    ApisModule,
    AudiencesModule
  ],
  // controllers: [AppController],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
