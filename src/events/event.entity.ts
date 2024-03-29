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
  ManyToMany,
  JoinTable,
} from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import Game from "src/games/game.entity";
import User from "src/users/user.entity";
import Attend from "src/attends/attend.entity";
import Reward from "src/rewards/reward.entity";
import Audience from "src/audiences/audiences.entity";
import Prizepool from "src/prizepools/prizepool.entity";
import Subscription from "src/subscriptions/subscription.entity";

@Entity("event")
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
  @Column({ default: "Sponsored" })
  public type: string;

  @ApiProperty()
  @Column()
  public sponsorname: string;

  @ApiProperty()
  @Column({ default: "2022.11.01" })
  public start_time: Date;

  @ApiProperty()
  @Column({ default: "2022.11.01" })
  public end_time: Date;

  @ApiProperty({ default: "url" })
  @Column({ nullable: true, default: "" })
  public qr_code: string;

  @ApiProperty({ default: 5 })
  @Column()
  public duration: number;

  @ApiProperty()
  @Column({ nullable: true })
  public sponsor_logo: string;

  @ApiProperty()
  @Column({ nullable: true })
  public sponsor_video_url: string;

  @ApiProperty({ default: 0 })
  @Column({ nullable: true, default: 0 })
  public trivia_id: number;

  @ApiProperty({ default: "" })
  @Column({ nullable: true, default: "" })
  public trivia_url: string;

  @ApiProperty()
  @CreateDateColumn({
    type: "timestamptz", // timestamp timestamptz
    default: () => "CURRENT_TIMESTAMP(6)", // "CURRENT_TIMESTAMP(6)","NOW()"
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

  @ManyToMany(() => Reward, (reward) => reward.events)
  public rewards: Reward[];

  @ManyToOne(() => Audience, (audience) => audience.id)
  public audience: Audience;

  @ManyToOne(() => Prizepool, (prizepool) => prizepool.id)
  public prizepool: Prizepool;

  @ManyToOne(() => Subscription, (subscription) => subscription.id)
  public subscription: Subscription;
}

export default Event;
