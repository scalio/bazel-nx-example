import { ICreateCatDto } from '@lazy/api-interface';
import { Min } from 'class-validator';

export class CreateCatDto implements ICreateCatDto {
  name: string;

  @Min(1)
  age: number;
}
