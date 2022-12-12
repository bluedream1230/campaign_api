import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Index,
} from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import Game from "src/games/game.entity";
import User from "src/users/user.entity";
import Attend from "src/attends/attend.entity";
import Reward from "src/rewards/reward.entity";
import Audience from "src/audiences/audiences.entity";

@Entity("event")
@Index(
  [
    "name",
    "location",
    "start_time",
    "end_time",
    "user_limit",
    "qr_code",
    "event_coins",
    "game",
    "user",
    "audience",
    "reward",
  ],
  { unique: true }
)
class Event {
  @PrimaryGeneratedColumn()
  public id: number;

  @ApiProperty()
  @Column()
  public name: string;

  @ApiProperty()
  @Column()
  public location: string;

  @ApiProperty()
  @Column({ default: "2022.11.01" })
  public start_time: Date;

  @ApiProperty()
  @Column({ default: "2022.11.01" })
  public end_time: Date;

  @ApiProperty()
  @Column({ default: 1 })
  public user_limit: number;

  @ApiProperty({ default: "url" })
  @Column()
  public qr_code: string;

  @ApiProperty({ default: 10 })
  @Column()
  public event_coins: number;

  @ApiProperty()
  @CreateDateColumn({
    type: "timestamptz", // timestamptz
    default: () => "CURRENT_TIMESTAMP(6)", // "CURRENT_TIMESTAMP(6)",
  })
  createdAt: Date;

  @ApiProperty()
  @UpdateDateColumn({
    type: "timestamptz",
    default: () => "CURRENT_TIMESTAMP(6)",
    onUpdate: "CURRENT_TIMESTAMP(6)",
  })
  updatedAt: Date;

  @ManyToOne(() => Game, (game) => game.events)
  public game: Game;

  @ManyToOne(() => User, (user) => user.events)
  public user: User;

  @ManyToOne(() => Reward, (reward) => reward.events)
  public reward: Reward;

  @ManyToOne(() => Audience, (audience) => audience.id)
  public audience: Audience;
}

export default Event;
