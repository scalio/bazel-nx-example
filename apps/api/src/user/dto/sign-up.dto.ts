import { ISignUpDto } from '@app/api-interface';
import { ApiModelProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class SignUpDto implements ISignUpDto {
  @ApiModelProperty()
  @IsString()
  @IsNotEmpty()
  username: string;

  @ApiModelProperty()
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiModelProperty()
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @ApiModelProperty()
  @IsString()
  @IsNotEmpty()
  lastName: string;
}
