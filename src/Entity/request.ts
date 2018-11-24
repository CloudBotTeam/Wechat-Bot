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
    room: string,
    message: MessageSegment[]
}

export {
    MessageData,
    MessageSegment,
    RequestEvent
}
