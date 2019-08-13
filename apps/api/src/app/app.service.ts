import { Injectable } from '@nestjs/common';
import { IMessage } from '@proto-interface';

@Injectable()
export class AppService {
  getData(): IMessage {
    return { message: 'Welcome to api!' };
  }
}
