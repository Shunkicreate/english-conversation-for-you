import { ChatType } from "../../types/ChatType";
export const ChatGetter = (ChatDatas: ChatType[]) => {
  let ReturnData: ChatType[] = [];
  for (let i = 0; i < ChatDatas.length; i++) {
    if (i > 10) {
      break;
    }
    ReturnData.push(ChatDatas[ChatDatas.length - i]);
  }
  return ReturnData;
};
