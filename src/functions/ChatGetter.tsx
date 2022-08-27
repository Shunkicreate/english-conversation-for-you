import { ChatType } from "../types/ChatType";
export const ChatGetter = (ChatDatas: ChatType[]) => {
  // debugger
  let ReturnData: ChatType[] = [];
  for (let i = 0; i < ChatDatas.length; i++) {
    if (i > 5) {
      break;
    }
    ReturnData.unshift(ChatDatas[ChatDatas.length - i - 1]);
  }
  return ReturnData;
};
