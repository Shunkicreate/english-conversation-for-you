import { ChatType } from "../types/ChatType";
import { CurrentTimeDataType } from "../types/CurrentTimeDataType";
import { ChatEncoder } from "./ChatEncoder";
export const MakeUploadData = (CurrentTimeData: CurrentTimeDataType, ChatDatas: ChatType[]) => {
    // debugger
    let AIfrag = false
    let i = ChatDatas.length - 1
    for ( i; i >= 0; i--) {
        if(ChatDatas[i].person === 'AI'){
            if(AIfrag){
                break;
            }
            AIfrag = true
        }
    }
    const ChatData: string = ChatEncoder(ChatDatas.slice(i+1))
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