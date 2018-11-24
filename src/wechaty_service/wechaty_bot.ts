import { Wechaty, Room } from "wechaty";
import * as QrcodeTerminal from "qrcode-terminal";
import { RequestEvent } from "src/Entity/request";
import { RespMessage } from "src/Entity/response";
import Axios from "axios";

var wechatyCallbackUrl = null;
// var wechaty = Wechaty.instance({ puppet: "wechaty-puppet-wechat4u" });
var wechaty = Wechaty.instance({puppet: 'wechaty-puppet-puppeteer'});

enum LoginStatus {
  Login = 1,
  Logout
}

var log_status: LoginStatus = LoginStatus.Logout;

wechaty
  .on("scan", (url, code, data) => {
    console.log(`Scan QR Code to login: ${code}\n${url}`);
    if (!/201|200/.test(String(code))) {
      const loginUrl = url.replace(/\/qrcode\//, "/l/");
      QrcodeTerminal.generate(loginUrl);
    }
  })
  .on("message", async message => {
    let room = message.room();
    if (!room) {
      console.log("The message is not a room message");
      return;
    }

    // test data
    if (await message.mentionSelf() ) {
      console.log("The robot was mentioned.")
    }
    // pass the test

    // await room.say(
    //   "额"
    // );
    if (wechatyCallbackUrl == null) {
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
      };
      // the data about @
      if (await message.mentionSelf()) {
        // add at me in this situation
        sendMsg.message.push({
          type: "at",
        
          data: {
            at_me: true
          }
        })
      }
      console.log(sendMsg);
      await Axios.post(wechatyCallbackUrl, )
    }
  })
  .on("login", async user => {
    console.log(`User ${user} logined`)
    log_status = LoginStatus.Login
    // await sendMsgWithResp({
    //   room_id: "Magic World-微信版",
    //   auto_escape: false,
    //   message: "测试一下"
    // });
  })
  .on("logout", () => {
    console.log("user logout");
    log_status = LoginStatus.Logout
  });


async function sendMsgWithResp(resp: RespMessage) {
  if (log_status !== LoginStatus.Login) {
    console.log("call sendMsgWithResp, but not login in the system.")
  }
  let room_topic = resp.room_id;
  console.log(`room topic is ${room_topic}`)

  let room = await wechaty.Room.find({topic: room_topic})
  
  if (!room) {
    console.log("Room not exists")
    return
  }
  console.log("Find room and ready to say something")
  await room.say(resp.message);
}

export default wechaty;

export {
  wechatyCallbackUrl,
  sendMsgWithResp
}
