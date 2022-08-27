import { ChatType } from "../types/ChatType";
import { CurrentTimeDataType } from "../types/CurrentTimeDataType";
import { ChatEncoder } from "./ChatEncoder";
export const MakeUploadData = (CurrentTimeData: CurrentTimeDataType, ChatDatas: ChatType[] ) => {
    const ChatData: string = ChatEncoder(ChatDatas.slice(-2))
    const sentenceLength = ChatDatas.length
    const chatLength = ChatData.split(' ').length
    return {
        year: CurrentTimeData.year,
        month: CurrentTimeData.month,
        day: CurrentTimeData.month,
        hour: CurrentTimeData.hour,
        minutes: CurrentTimeData.minutes,
        ChatData: ChatData,
        sentenceLength: sentenceLength,
        chatLength: chatLength,
    }
}