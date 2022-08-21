import { Chat } from "../types/ChatType";
export const ChatGetter = (ChatDatas: Chat[]) => {
  let ReturnData: Chat[] = [];
  for (let i = 0; i < ChatDatas.length; i++) {
    if (i > 10) {
      break;
    }
    ReturnData.push(ChatDatas[ChatDatas.length - i]);
  }
  return ReturnData;
};
