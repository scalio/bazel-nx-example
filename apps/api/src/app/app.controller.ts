import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { Message } from "@lazy/api-interface";

import { AppService } from "./app.service";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("hello")
  @UseGuards(AuthGuard('jwt'))
  getData(): Message {
    return this.appService.getData();
  }
}
