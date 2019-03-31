import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix(`api`);
  const port = process.env.port || 3333;

  const options = new DocumentBuilder()
    .setTitle('Lazy loading app')
    .setDescription('The Lazy loading API description')
    .setVersion('1.0')
    .addTag('api')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('swagger', app, document);

  await app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
  });
}

bootstrap();
