import React, { useEffect, useCallback, useState, FC } from "react";
import { useNavigate } from "react-router-dom";
import { Chat } from "./AccessOpenAIAPI";
import { ChatText } from "./ChatText";
import { ChatEncoder } from "./ChatEncoder";
import { ChatDecoder } from "./ChatDecoder";
import { ChatGetter } from "./ChatGetter";
import { InputType } from "../../types/InputType";

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
