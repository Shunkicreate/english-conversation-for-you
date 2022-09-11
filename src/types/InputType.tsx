import { ChatType } from "./ChatType";
export interface InputType {
  // ChatDatas: ChatType[];
  // setChatDatas: React.Dispatch<React.SetStateAction<ChatType[]>>;
  // setDoChat: React.Dispatch<React.SetStateAction<boolean>>;
  InputText: string;
  setInputText: React.Dispatch<React.SetStateAction<string>>;
  setSubmit: React.Dispatch<React.SetStateAction<boolean>>;
}
