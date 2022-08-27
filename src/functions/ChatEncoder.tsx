import { ChatType } from "../types/ChatType";
export const ChatEncoder = (ChatDatas: ChatType[]) => {
  let ReturnData: string = "";
  ChatDatas.forEach(element => {
    ReturnData += element.person + ":" + element.message + "\n";

  })
  return ReturnData;
};
