import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import Game from "src/games/game.entity";
import User from "src/users/user.entity";
import Attend from "src/attends/attend.entity";

@Entity()
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
  @Column()
  public start_time: string;

  @ApiProperty()
  @Column()
  public end_time: string;

  @ApiProperty()
  @Column()
  public user_limit: string;

  @ApiProperty()
  @Column()
  public qr_code: string;

  @ManyToOne(() => Game, (game) => game.events)
  public game: Game;

  @ManyToOne(() => User, (user) => user.events)
  public user: User;

  @OneToMany(() => Attend, (attend) => attend.event)
  public attends: Attend[];

  // @ManyToOne(() => User, (author: User) => author.posts)
  // public author: User;

  // @ManyToMany(() => Category, (category: Category) => category.posts)
  // @JoinTable()
  // public categories: Category[];
}

export default Event;
