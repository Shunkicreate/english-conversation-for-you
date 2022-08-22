import { FC } from "react";
import { ChatType } from "../../types/ChatType";
import { ShowChatTypes } from "../../types/ShowChatTypes";

const OneChat = (person: string, message: string) => {
    return(
        <div className="OneChat">
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
  return (
    <div>
      <div>
        <ol>
          {ChatDatas.map((ChatData) => (
            OneChat(ChatData.person, ChatData.message)
          ))}
        </ol>
      </div>
    </div>
  );
};
