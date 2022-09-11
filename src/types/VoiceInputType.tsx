import { ChatType } from "./ChatType";
export interface VoiceInputType {
  // ChatDatas: ChatType[];
  // setChatDatas: React.Dispatch<React.SetStateAction<ChatType[]>>;
  // DoChat: boolean;
  // setDoChat: React.Dispatch<React.SetStateAction<boolean>>;
  // InputText: string;
  // setInputText: React.Dispatch<React.SetStateAction<string>>;
  InputText: string;
  setInputText: React.Dispatch<React.SetStateAction<string>>;
  setSubmit: React.Dispatch<React.SetStateAction<boolean>>;
}
