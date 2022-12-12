import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import Event from "src/events/event.entity";

@Entity("game")
class Game {
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
  public video_url: string;

  @ApiProperty()
  @Column()
  public img_url: string;

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

  @OneToMany(() => Event, (event) => event.game)
  public events: Event[];
}

export default Game;
