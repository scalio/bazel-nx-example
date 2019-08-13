import { ApiModelProperty } from '@nestjs/swagger';
import { ISignInDto } from '@proto-interface';
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
