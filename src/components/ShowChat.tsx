import { FC } from "react";
import { ChatType } from "../../types/ChatType";
import { ShowChatTypes } from "../../types/ShowChatTypes";
export const ShowChat: FC<ShowChatTypes> = ({ ChatDatas }) => {
  return (
    <div>
      <div>
        <ol>
          {ChatDatas.map((ChatData) => (
            <ul>
              {ChatData.person}:{ChatData.message}
            </ul>
          ))}
        </ol>
      </div>
    </div>
  );
};
