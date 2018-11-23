import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import wechaty, { sendMsgWithResp } from "./wechaty_service/wechaty_bot";
import { async } from "rxjs/internal/scheduler/async";

let runPort: number = +process.env.NEST_PORT || 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(runPort);
}
bootstrap();

wechaty.start();


