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
    const user: JwtPayload = { username };

    const token = this.jwtService.sign(user);
    return {
      expiresIn: this.expiresIn,
      token,
    };
  }

  async validateUser(signedUser): Promise<boolean> {
    this.logger.log('validate user:');
    this.logger.log(signedUser);
    if (signedUser && signedUser.sub) {
      return Boolean(this.userService.getUserByUsername(signedUser.sub));
    }
    return false;
  }
}
