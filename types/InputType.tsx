import { Chat } from "./ChatType";
export interface InputType {
  ChatDatas: Chat[];
  setChatDatas: React.Dispatch<React.SetStateAction<Chat[]>>;
}
