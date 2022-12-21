import { ApiProperty } from "@nestjs/swagger";
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
class Bill {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public firstname: string;

  @Column()
  public lastname: string;

  @Column({ unique: true })
  public email: string;

  @Column({ default: "+1 222 222 2222" })
  public phone?: string;

  @Column()
  public billingaddress: string;

  @Column()
  public country: string;

  @Column()
  public ccn: string;

  @Column()
  public CVV: string;

  @Column()
  public expirationdate: Date;

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
}

export default Bill;
