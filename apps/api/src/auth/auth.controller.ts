import { Body, Controller, HttpCode, HttpStatus, Logger, Post, Response } from '@nestjs/common';
import { LoginUserDto } from '../user/login-user.dto';
import { User } from '../user/user.entity';
import { UserService } from '../user/user.service';
import { AuthService } from './auth.service';

@Controller('/auth')
export class AuthController {
  private logger = new Logger(AuthController.name);

  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  @Post('login')
  @HttpCode(200)
  async loginUser(@Response() res: any, @Body() body: LoginUserDto) {
    this.logger.log('loginUser called');
    if (!(body && body.username && body.password)) {
      return res.status(HttpStatus.FORBIDDEN).json({ message: 'Username and password are required!' });
    }

    const user = await this.userService.getUserByUsername(body.username);

    if (user) {
      if (await this.userService.compareHash(body.password, user.passwordHash)) {
        return res.status(HttpStatus.OK).json(await this.authService.createToken(user.username));
      }
    }

    return res.status(HttpStatus.FORBIDDEN).json({ message: 'Username or password wrong!' });
  }

  @Post('register')
  async registerUser(@Response() res: any, @Body() body: User) {
    this.logger.log('register called');
    if (!(body && body.username && body.password)) {
      return res.status(HttpStatus.FORBIDDEN).json({ message: 'Username and password are required!' });
    }

    let user;
    try {
      user = await this.userService.getUserByUsername(body.username);
    } catch (err) {
      this.logger.log('Error in lookup user');
    }

    if (user) {
      return res.status(HttpStatus.FORBIDDEN).json({ message: 'Username already exists!'});
    } else {
      user = await this.userService.createUser(body);
    }

    return res.status(HttpStatus.OK).json(await this.authService.createToken(user.username));
  }
}
