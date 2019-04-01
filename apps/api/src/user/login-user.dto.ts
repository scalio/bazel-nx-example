import { ApiModelProperty } from '@nestjs/swagger';

export class LoginUserDto {
  @ApiModelProperty()
  username: string;
  @ApiModelProperty()
  password: string;
}
