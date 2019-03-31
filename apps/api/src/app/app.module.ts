import { Logger, Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthModule } from '../auth/auth.module';
import { CatsModule } from '../cats/cats.module';
import { UserModule } from '../user/user.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { User } from '../user/user.entity';

// tslint:disable-next-line:no-var-requires
const ormConfig = require('../../../../ormconfig.json');

@Module({
  imports: [
    UserModule,
    AuthModule,
    CatsModule,
    TypeOrmModule.forRoot({
      ...ormConfig,
      entities: [User],
    }),
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      installSubscriptionHandlers: true,
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
