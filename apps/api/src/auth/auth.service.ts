import { Injectable, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { JwtPayload } from './interfaces/jwt-payload.interface';

@Injectable()
export class AuthService {
  private logger = new Logger(AuthService.name);
  expiresIn = 3600;

  constructor(
    private userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async createToken(username: string) {
    this.logger.log('create Token');
    const { firstName, lastName } = await this.userService.getUserByUsername(username);
    const payload: JwtPayload = { username, firstName, lastName };

    const token = this.jwtService.sign(payload);
    return {
      expiresIn: this.expiresIn,
      token,
      username,
      firstName,
      lastName,
    };
  }

  async validateUser(signedUser): Promise<boolean> {
    this.logger.log('validate user:');
    this.logger.log(signedUser);
    if (signedUser && signedUser.username) {
      return Boolean(this.userService.getUserByUsername(signedUser.username));
    }
    return false;
  }
}
