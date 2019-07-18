import { ICreateCatDto } from '@app/api-interface';
import { ApiModelProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, Max, Min } from 'class-validator';

export class CreateCatDto implements ICreateCatDto {
  @ApiModelProperty()
  @IsNotEmpty()
  name: string;

  @ApiModelProperty()
  @IsInt()
  @Min(1)
  @Max(200)
  age: number;
}
