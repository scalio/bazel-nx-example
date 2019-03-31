import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { CatsResolvers } from './cats.resolvers';
import { CatsService } from './cats.service';

@Module({
  imports: [AuthModule],
  providers: [CatsService, CatsResolvers],
})
export class CatsModule {}
