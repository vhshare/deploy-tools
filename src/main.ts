import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { GlobalExceptionFilter } from "./filters/GlobaExceptionFilter";
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  console.log(join(__dirname, '..', 'static'));
  app.useStaticAssets(join(__dirname, '..', 'static'));
  app.useGlobalFilters(new GlobalExceptionFilter());
  await app.listen(19243);
}
bootstrap();
