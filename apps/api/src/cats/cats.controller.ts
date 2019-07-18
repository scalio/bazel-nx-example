import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiOperation, ApiUseTags } from '@nestjs/swagger';

import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { Cat } from './entities/cat';

@Controller('cats')
@ApiBearerAuth()
@ApiUseTags('cats')
@UseGuards(AuthGuard())
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  @ApiOperation({ title: 'Add cat' })
  async create(@Body() createCatDto: CreateCatDto) {
    return this.catsService.create(createCatDto);
  }

  @Get()
  @ApiOperation({ title: 'Get all cats' })
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ title: 'Get cat by id' })
  async findOneById(@Param('id', ParseIntPipe) id: number) {
    return this.catsService.findOneById(id);
  }

  @ApiOperation({ title: 'Delete item' })
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id', ParseIntPipe) id: number): Promise<void> {
    await this.catsService.remove(id);
  }
}
