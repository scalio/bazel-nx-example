import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as argon2 from 'argon2';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  private logger = new Logger(UserService.name);

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>) {
  }

  async createUser(user: User): Promise<User> {
    user.passwordHash = await this.getHash(user.password);
    user.password = undefined;
    return this.userRepository.save(user);
  }

  async getUserByUsername(username: string): Promise<User> {
    return (await this.userRepository.find({ username }))[0];
  }

  private async getHash(password: string | undefined): Promise<string> {
    return argon2.hash(password);
  }

  async compareHash(password: string | undefined, hash: string | undefined): Promise<boolean> {
    try {
      if (await argon2.verify(hash, password)) {
        this.logger.log('verification of user succeeded');
        return true;
      } else {
        this.logger.log('verification failed');
        return false;
      }
    } catch (err) {
      this.logger.log('argon2 error');
      return false;
    }
  }
}
