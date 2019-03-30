import { Logger, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';

import { AuthModule } from '../auth/auth.module';
import { UserModule } from '../user/user.module';
import { AppController } from "./app.controller";
import { AppService } from "./app.service";

import { User } from '../user/user.entity';
const ormConfig = require('../../../../ormconfig.json');

@Module({
  imports: [
    UserModule,
    AuthModule,
    TypeOrmModule.forRoot({
      ...ormConfig,
      entities: [User],
    }),
    PassportModule.register({ defaultStrategy: 'jwt' }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    Logger,
  ],
})
export class AppModule {}
