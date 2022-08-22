import { FC } from "react";
import { ChatType } from "../../types/ChatType";
import { ShowChatTypes } from "../../types/ShowChatTypes";
import '../stylesheets/ShowChat.css'

const OneChat = (person: string, message: string) => {
    return(
        <div className={`${person}, ${"OneChat"}`}>
            <div className="person">
                {person}
            </div>
            <div className="message">
                {message}
            </div>

        </div>
    )
}

export const ShowChat: FC<ShowChatTypes> = ({ ChatDatas }) => {
    console.log(ChatDatas)
  return (
    <div className="ShowChat">
          {ChatDatas.map((ChatData) => (
            OneChat(ChatData.person, ChatData.message)
          ))}
    </div>
  );
};
