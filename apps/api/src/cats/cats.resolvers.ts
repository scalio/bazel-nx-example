import { Logger, ParseIntPipe, UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { GqlAuthGuard } from '../auth/graphql-auth.guard';
import { CatEntity } from './cat.entity';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';

const pubSub = new PubSub();

@Resolver('Cat')
export class CatsResolvers {
  private logger = new Logger(CatsResolvers.name);
  constructor(private readonly catsService: CatsService) {}

  @Query()
  @UseGuards(GqlAuthGuard)
  async getCats() {
    this.logger.log('getCats called');
    return await this.catsService.findAll();
  }

  @Query('cat')
  @UseGuards(GqlAuthGuard)
  async findOneById(
    @Args('id', ParseIntPipe)
    id: number,
  ): Promise<CatEntity> {
    this.logger.log('getCat called');
    return await this.catsService.findOneById(id);
  }

  @Mutation('createCat')
  @UseGuards(GqlAuthGuard)
  async create(@Args('createCatInput') args: CreateCatDto): Promise<CatEntity> {
    this.logger.log('createCat called');
    const createdCat = await this.catsService.create(args);
    pubSub.publish('catCreated', { catCreated: createdCat });
    return createdCat;
  }

  @Subscription('catCreated')
  catCreated() {
    return pubSub.asyncIterator('catCreated');
  }
}
