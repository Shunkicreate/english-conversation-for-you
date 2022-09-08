import { FC, useEffect, Fragment  } from "react";
import { ShowChatTypes } from "../types/ShowChatTypes";
import "../stylesheets/ShowChat.css";
import { FCOneChat } from "./OneChat";

export const ShowChat: FC<ShowChatTypes> = ({ ChatDatas }) => {
  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  }, [ChatDatas])
  return (
    <div className="ShowChat">
      <div className="ChatArea">
        {ChatDatas?(ChatDatas.map((ChatData) =>
          // OneChat(ChatData.person, ChatData.message)
          <Fragment key={ChatData.message}>
            <FCOneChat  person={ChatData.person}message={ChatData.message} />

          </Fragment>
        )):(
          <div></div>
        )}
      </div>
    </div>
  );
};
