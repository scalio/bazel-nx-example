import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.port || 3000;

  const options = new DocumentBuilder()
    .setTitle('nx-bazel-starter')
    .setDescription('The Nx Full-Stack app API description')
    .setVersion('1.0')
    .addTag('api')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(port, () => {
    Logger.log(`App listening at http://localhost:${port}`, 'HTTP');
    Logger.log('Press Ctrl+C to quit.', 'HTTP');
  });
}

bootstrap().catch((err) => {
  process.exitCode = 1;
  // tslint:disable-next-line:no-console
  console.error(err);
});
