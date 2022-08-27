import { ChatType } from "./ChatType";
export interface VoiceInputType {
  ChatDatas: ChatType[];
  setChatDatas: React.Dispatch<React.SetStateAction<ChatType[]>>;
  DoChat: boolean;
  setDoChat: React.Dispatch<React.SetStateAction<boolean>>;
  Uid: string | null;
}
