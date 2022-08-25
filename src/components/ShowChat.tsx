import { FC, useEffect, useRef } from "react";
import { ShowChatTypes } from "../../types/ShowChatTypes";
import "../stylesheets/ShowChat.css";
import { OneChat } from "./OneChat";


export const ShowChat: FC<ShowChatTypes> = ({ ChatDatas }) => {
  const element = useRef<HTMLDivElement>(null);
  // const scrollDoc =document.getElementById("ShowChat")
  useEffect(() => {
    element?.current?.scrollIntoView();
  }, [element]);
  // scrollDoc.scrollIntoView({behavior:"smooth"});
  return (
    <div className="ShowChat">
      <div className="ChatArea" ref={element}>
        {ChatDatas.map((ChatData) =>
          OneChat(ChatData.person, ChatData.message)
        )}
      </div>
    </div>
  );
};
