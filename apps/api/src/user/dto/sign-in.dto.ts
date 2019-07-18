import { ISignInDto } from '@lazy/api-interface';
import { ApiModelProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class SignInDto implements ISignInDto {
  @ApiModelProperty()
  @IsString()
  @IsNotEmpty()
  username: string;

  @ApiModelProperty()
  @IsString()
  @IsNotEmpty()
  password: string;
}
