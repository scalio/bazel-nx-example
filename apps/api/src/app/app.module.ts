import { Logger, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthModule } from '../auth/auth.module';
import { AuthService } from '../auth/auth.service';
import { UserModule } from '../user/user.module';
import { UserService } from '../user/user.service';
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
  ],
  controllers: [AppController],
  providers: [
    AppService,
    // UserService,
    // AuthService,
    Logger,
  ],
  exports: [
    // UserService,
    // AuthService,
  ],
})
export class AppModule {}
