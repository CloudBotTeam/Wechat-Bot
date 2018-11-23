import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import  wechaty from "./wechaty_service/wechaty_bot";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();

wechaty.start();
