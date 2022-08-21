import { Chat } from '../types/ChatType'
export const ChatDecoder = (ChatDatas: string) => {
    let ReturnData: Chat[] = [];
    const regex = /\n\n/g
    ChatDatas = ChatDatas.replace(regex, '\n')
    let ReturnDataArray: string[] = ChatDatas.split('\n')
    debugger;
    for (let i of ReturnDataArray){
        const devideData: string[] = i.split(':')
        const singleChatData: Chat = {
            person: devideData[0],
            message: devideData[1]
        }
        ReturnData.push(singleChatData)
    }
    return ReturnData;
  };