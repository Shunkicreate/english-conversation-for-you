import { FC } from "react";
import { ChatEncoder } from "./ChatEncoder";
import { ChatDecoder } from "./ChatDecoder";
import { ChatGetter } from "./ChatGetter";
import { ChatAIType } from "../types/ChatAIType";
import { ChatType } from "../types/ChatType";
import { AccessOpenAIAPI } from "./AccessOpenAIAPI";
import { Speak } from "./Speak";
export const ChatAI: FC<ChatAIType> = ({ ChatDatas, setChatDatas }) => {
  const resultText: Promise<string> = AccessOpenAIAPI(
    ChatEncoder(ChatGetter(ChatDatas))
  );
  resultText.then((result) => {
    console.log(result)
    const decodedResultText: ChatType[] = ChatDecoder(result);
    setChatDatas(ChatDatas.concat(decodedResultText));
    Speak(result);
  });

  return null;
};
