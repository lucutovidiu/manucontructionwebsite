import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule);
  const appPort = process.env.PORT || 4200;
  app.setGlobalPrefix('api');
  await app.listen(appPort);
}
bootstrap();
