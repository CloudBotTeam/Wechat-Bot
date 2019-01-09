import { Controller, Req, Post, HttpCode, Body, Get } from '@nestjs/common';
import { RespMessage } from "src/Entity/response";
import { sendMsgWithResp, setCallbackUrl, connectURL } from "src/wechaty_service/wechaty_bot";

@Controller("send_group_msg")
export class RecvController {
    @HttpCode(200)
    @Post()
    async recvProcess(@Body() resp: RespMessage) {
        await sendMsgWithResp(resp);
    }
}

interface ModifyCb {
    callbackurl: string
}

@Controller("callback")
export class CallbackModifyController {
    @HttpCode(200)
    @Post()
    modifyCallback(@Body() newCb: ModifyCb) {
        // the import var cannot be changed.
        // wechatyCallbackUrl = newCb.callbackurl
        setCallbackUrl(newCb.callbackurl)
    }
}

@Controller("connectUrl")
export class ConnectURLClass {
    @HttpCode(200)
    @Get()
    connect_get() {
        return connectURL;
    }
}
