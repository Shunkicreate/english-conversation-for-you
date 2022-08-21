import { Chat } from "../types/ChatType";
export const ChatEncoder = (ChatDatas: Chat[]) => {
  let ReturnData: string = "";
  for (let i of ChatDatas) {
    ReturnData += i.person + ":" + i.message + "\n";
  }
  return ReturnData;
};
