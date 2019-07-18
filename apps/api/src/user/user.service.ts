import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as argon2 from 'argon2';
import { Repository } from 'typeorm';
import { SignUpDto } from './dto/sign-up.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>) {
  }

  private static async getHash(password: string): Promise<string> {
    return argon2.hash(password);
  }

  static async compareHash(password: string, hash: string): Promise<boolean> {
    try {
      return await argon2.verify(hash, password);
    } catch (err) {
      return false;
    }
  }

  async createUser(signUpDto: SignUpDto): Promise<User> {
    const password = await UserService.getHash(signUpDto.password);
    const user = new User({
      ...signUpDto,
      password,
    });
    return this.userRepository.save(user);
  }

  async getUserByUsername(username: string): Promise<User> {
    return (await this.userRepository.find({ username }))[0];
  }
}
