import { ChatType } from "../../types/ChatType";
export const ShowChat = (ChatDatas: ChatType[]) => {
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
