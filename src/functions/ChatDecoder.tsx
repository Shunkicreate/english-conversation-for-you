import { ChatType } from "../../types/ChatType";
export const ChatDecoder = (ChatDatas: string) => {
  // debugger
  let ReturnData: ChatType[] = [];
  const regex = /\n/g;
  ChatDatas = ChatDatas.replace(regex, "");
  let ReturnDataArray: string[] = ChatDatas.split("\n");
  for (let i of ReturnDataArray) {
    // if(i.includes(':') && !i.includes('AI:')){

    // }
    const devideData: string[] = i.split(":");
    const singleChatData: ChatType = {
      person: devideData[0],
      message: devideData[1],
    };
    ReturnData.push(singleChatData);
  }
  return ReturnData;
};
