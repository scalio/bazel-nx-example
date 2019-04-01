import { ApiModelProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Cat')
export class CatEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiModelProperty()
  @Column({ length: 500 })
  name: string;

  @ApiModelProperty()
  @Column()
  age: number | undefined;
}
