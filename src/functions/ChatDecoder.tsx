import { ChatType } from "../../types/ChatType";
export const ChatDecoder = (ChatDatas: string) => {
  let ReturnData: ChatType[] = [];
  const regex = /\n\n/g;
  ChatDatas = ChatDatas.replace(regex, "\n");
  let ReturnDataArray: string[] = ChatDatas.split("\n");
  // debugger;
  for (let i of ReturnDataArray) {
    const devideData: string[] = i.split(":");
    const singleChatData: ChatType = {
      person: devideData[1],
      message: devideData[0],
    };
    ReturnData.push(singleChatData);
  }
  return ReturnData;
};
