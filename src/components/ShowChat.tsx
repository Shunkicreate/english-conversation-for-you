import { FC, useEffect, useRef } from "react";
import { ShowChatTypes } from "../../types/ShowChatTypes";
import "../stylesheets/ShowChat.css";

const OneChat = (person: string, message: string) => {
  if (person === "AI" || person === "OpenAI") {
    return (
      <div className="AI OneChat">
        <div className="Content">
          <div className="person">{person}</div>
          <div className="message">{message}</div>
        </div>
      </div>
    );
  }
  return (
    <div className="You OneChat">
      <div className="Content">
        <div className="person">{person}</div>
        <div className="message">{message}</div>
      </div>
    </div>
  );
};

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
