import { ApiModelProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiModelProperty()
  @Column({ length: 500 })
  username: string;

  @ApiModelProperty()
  @Column({ length: 500, nullable: true })
  password: string | undefined;

  @Column({ length: 500 })
  passwordHash: string | undefined;
}
