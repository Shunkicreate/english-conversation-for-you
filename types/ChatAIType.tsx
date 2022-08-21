import { Chat } from "./ChatType";
export interface ChatAI {
  SendText: Chat[];
  LastResponse: Chat;
}
