import { CreateCatInput } from '@lazy/api-interface';
import { Min } from 'class-validator';

export class CreateCatDto extends CreateCatInput {
  @Min(1)
  age: number;
}
