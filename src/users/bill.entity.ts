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
    type: "timestamp", // timestamptz
    default: () => "NOW()", // "CURRENT_TIMESTAMP(6)",
  })
  createdAt: Date;

  @ApiProperty()
  @UpdateDateColumn({
    type: "timestamp",
    default: () => "NOW()",
    onUpdate: "NOW()",
  })
  updatedAt: Date;
}

export default Bill;
