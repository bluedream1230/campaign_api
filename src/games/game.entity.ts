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
  @Column({ default: "name" })
  public name: string;

  @ApiProperty()
  @Column({ default: "type" })
  public type: string;

  @ApiProperty()
  @Column({ default: "video url" })
  public video_url: string;

  @ApiProperty()
  @Column({ default: "img_url" })
  public img_url: string;

  @ApiProperty()
  @CreateDateColumn({
    type: "timestamp", // timestamptz
    default: () => "NOW()", // "NOW()",
  })
  createdAt: Date;

  @ApiProperty()
  @UpdateDateColumn({
    type: "timestamp",
    default: () => "NOW()",
    onUpdate: "NOW()",
  })
  updatedAt: Date;

  @OneToMany(() => Event, (event) => event.game)
  public events: Event[];
}

export default Game;
