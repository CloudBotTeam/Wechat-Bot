interface MessageData {
    file?: string
    url?: string
    text?: string
    id?: string
    qq?: string
    at_me?: boolean
}

interface MessageSegment {
    type: string,
    data: MessageData
}

// interface Message {

// }
interface RequestEvent {
    group_id: string,
    message: MessageSegment[],
    platform: string, // wechat

}

export {
    MessageData,
    MessageSegment,
    RequestEvent
}
