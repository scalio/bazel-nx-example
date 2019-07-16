import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '../auth/auth.module';
import { CatEntity } from './cat.entity';
import { CatsService } from './cats.service';

@Module({
  imports: [
    AuthModule,
    TypeOrmModule.forFeature([CatEntity]),
  ],
  providers: [CatsService],
})
export class CatsModule {}
