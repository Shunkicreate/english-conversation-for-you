import { ChatType } from "../../types/ChatType";
export const ChatEncoder = (ChatDatas: ChatType[]) => {
  // debugger
  console.log(ChatDatas)
  let ReturnData: string = "";
  ChatDatas.forEach(element => {
    ReturnData += element.person + ":" + element.message + "\n";

  })
  // for (let i of ChatDatas) {
  // }
  return ReturnData;
};