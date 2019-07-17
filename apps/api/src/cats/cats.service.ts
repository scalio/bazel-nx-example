import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateCatDto } from './dto/create-cat.dto';
import { Cat } from './entities/cat';

@Injectable()
export class CatsService {
  constructor(
    @InjectRepository(Cat)
    private readonly repository: Repository<Cat>) {
  }

  async create(cat: CreateCatDto): Promise<Cat> {
    return this.repository.save(cat);
  }

  async findAll(): Promise<Cat[]> {
    return this.repository.find();
  }

  async findOneById(id: number): Promise<Cat> {
    return this.repository.findOne({ id });
  }

  async remove(id: number): Promise<Cat> {
    const entity = await this.findOneById(id);
    return this.repository.remove(entity);
  }
}
