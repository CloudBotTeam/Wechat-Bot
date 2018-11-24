import { Controller, Req, Post, HttpCode, Body } from "@nestjs/common";
import { RespMessage } from "src/Entity/response";
import { sendMsgWithResp } from "src/wechaty_service/wechaty_bot";

@Controller("recv")
export class RecvController {
    @HttpCode(200)
    @Post()
    async recvProcess(@Body() resp: RespMessage) {
       
        await sendMsgWithResp(resp)
    }
}

