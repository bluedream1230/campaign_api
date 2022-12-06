import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import Event from "src/events/event.entity";
import User from "src/users/user.entity";

@Entity("reward")
class Reward {
  @PrimaryGeneratedColumn()
  public id: number;

  @ApiProperty()
  @Column()
  public name: string;

  @ApiProperty()
  @Column()
  public type: string;

  @ApiProperty()
  @Column()
  public category: string;

  @ApiProperty()
  @Column()
  public image_url: string;

  @ApiProperty()
  @Column()
  public description: string;

  @ApiProperty()
  @Column()
  public coinvalue: number;

  @ApiProperty()
  @Column()
  public ratelimit: number;

  @ApiProperty()
  @Column()
  public timelimit: number;

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

  @ManyToOne(() => User, (user) => user.rewards)
  public user: User;

  @OneToMany(() => Event, (event) => event.reward)
  public events: Event[];
}

export default Reward;
