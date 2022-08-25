import { ChatType } from "./ChatType";
export interface ChatAIType {
  ChatDatas: ChatType[];
  setChatDatas: React.Dispatch<React.SetStateAction<ChatType[]>>;
}