import React, { FC } from "react";
import { ChatEncoder } from "./ChatEncoder";
import { ChatDecoder } from "./ChatDecoder";
import { ChatGetter } from "./ChatGetter";

import { ChatAIType } from '../../types/ChatAIType'
import { ChatType } from "../../types/ChatType";
import { AccessOpenAIAPI } from "./AccessOpenAIAPI";
export const ChatAI: FC<ChatAIType> = ({ ChatDatas, setChatDatas }) => {
  const resultText: Promise<string> = AccessOpenAIAPI(
    ChatEncoder(ChatGetter(ChatDatas))
    );
    resultText.then((result) => {
    // debugger;
    const decodedResultText: ChatType[] = ChatDecoder(result);
    setChatDatas(ChatDatas.concat(decodedResultText));
  });


  return (
    <div className="a">
    </div>
  );
};
