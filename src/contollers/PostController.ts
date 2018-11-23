import { Controller, Get, Req } from "@nestjs/common";
import { RespMessage } from "src/Entity/response";
import { sendMsgWithResp } from "src/wechaty_service/wechaty_bot";

@Controller("recv")
export class RecvController {
    @Get()
    async recvProcess(@Req() resp : RespMessage) {
        await sendMsgWithResp(resp)
    }
}

