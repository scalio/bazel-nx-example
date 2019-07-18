import { Body, Controller, HttpCode, HttpStatus, Logger, Post, Response } from '@nestjs/common';
import { SignInDto } from '../user/dto/sign-in.dto';
import { SignUpDto } from '../user/dto/sign-up.dto';
import { UserService } from '../user/user.service';
import { AuthService } from './auth.service';

@Controller('/auth')
export class AuthController {

  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  @Post('sign-in')
  @HttpCode(200)
  async loginUser(@Response() res: any, @Body() signInDto: SignInDto) {
    if (!(signInDto && signInDto.username && signInDto.password)) {
      return res
        .status(HttpStatus.FORBIDDEN)
        .json({ message: 'Username and password are required!' });
    }

    const user = await this.userService.getUserByUsername(signInDto.username);

    if (user) {
      if (await UserService.compareHash(signInDto.password, user.password)) {
        return res
          .status(HttpStatus.OK)
          .json(await this.authService.createToken(user.username));
      }
    }

    return res
      .status(HttpStatus.FORBIDDEN)
      .json({ message: 'Username or password wrong!' });
  }

  @Post('sign-up')
  async registerUser(@Response() res: any, @Body() signUpDto: SignUpDto) {
    if (!(signUpDto && signUpDto.username && signUpDto.password)) {
      return res
        .status(HttpStatus.FORBIDDEN)
        .json({ message: 'Username and password are required!' });
    }

    let user;
    try {
      user = await this.userService.getUserByUsername(signUpDto.username);
    } catch (err) {
      Logger.log('Error in lookup user', 'AuthController');
    }

    if (user) {
      return res
        .status(HttpStatus.FORBIDDEN)
        .json({ message: 'Username already exists!'});
    } else {
      user = await this.userService.createUser(signUpDto);
    }

    return res
      .status(HttpStatus.OK)
      .json(await this.authService.createToken(user.username));
  }
}
