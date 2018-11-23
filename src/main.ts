import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import wechaty from "./wechaty_service/wechaty_bot";
import { async } from "rxjs/internal/scheduler/async";
import Axios from "axios";
import { RequestEvent } from "./Entity/request";

let runPort: number = +process.env.NEST_PORT || 3000;
let callbackUrl = null;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(runPort);
}
bootstrap();

wechaty
  .on("message", async message => {
    let room = message.room();
    if (!room) {
      console.log("The message is not a room message");
      return;
    }
    if (callbackUrl == null) {
      let sendMsg: RequestEvent = {
        room: await room.topic(),
        message: [
          {
            type: "text",
            data: {
              text: "hey, nmsl"
            }
          }
        ]
      }
      console.log(sendMsg)
    }
    
  })
  .on("login", user => console.log(`User ${user} logined`))
  .on("logout", () => {
    console.log("user logout");
  });
wechaty.start();
