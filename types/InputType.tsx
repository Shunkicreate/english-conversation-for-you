import { ChatType } from "./ChatType";
export interface InputType {
  ChatDatas: ChatType[];
  setChatDatas: React.Dispatch<React.SetStateAction<ChatType[]>>;
  setDoChat: React.Dispatch<React.SetStateAction<boolean>>;
}
