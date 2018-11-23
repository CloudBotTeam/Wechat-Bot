import { Wechaty } from "wechaty";
import * as QrcodeTerminal from "qrcode-terminal";
import { from } from "rxjs";

var wechaty = Wechaty.instance({puppet: "wechaty-puppet-wechat4u"});
wechaty
  .on("scan", (url, code, data) => {
    console.log(`Scan QR Code to login: ${code}\n${url}`);
    if (!/201|200/.test(String(code))) {
      const loginUrl = url.replace(/\/qrcode\//, "/l/");
      QrcodeTerminal.generate(loginUrl);
    }
  })
//   .on("login", user => console.log(`User ${user} logined`))
//   .on("logout", () => {
//     console.log("user logout");
//   })
//   .on("message", async message => {
//     // if (message.self()) {
//     //   console.log("myself message");
//     //   return;
//     // }

//     let room = message.room();
//     if (!room) {
//       return;
//     }
//     // console.log(`Message: ${message}`);
//     console.log(message);
//     // console.log(room);
//   });


export default wechaty;
