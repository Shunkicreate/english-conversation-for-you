import { FC, useEffect, useRef } from "react";
import { ShowChatTypes } from "../types/ShowChatTypes";
import "../stylesheets/ShowChat.css";
import { OneChat } from "./OneChat";


export const ShowChat: FC<ShowChatTypes> = ({ ChatDatas }) => {
  useEffect(()=>{
    window.scrollTo(0, document.body.scrollHeight);
  }, [ChatDatas])
  return (
    <div className="ShowChat">
      <div className="ChatArea">
        {ChatDatas.map((ChatData) =>
          OneChat(ChatData.person, ChatData.message)
        )}
      </div>
    </div>
  );
};
