import { ChatType } from "./ChatType";
export interface WatchTogetherType {
  // ShowYouTube: boolean;
  ChatDatas: ChatType[];
  setChatDatas: React.Dispatch<React.SetStateAction<ChatType[]>>;
}
