import React, { useEffect, useCallback, useState, FC } from "react";
import { useNavigate } from "react-router-dom";
import { Chat } from "./Chat";
import { ChatText } from "./ChatText";

interface InputInterface {
  TestChatData: string[];
  setTextChatData: React.Dispatch<React.SetStateAction<string[]>>;
}
export const Input: FC<InputInterface> = ({
  TestChatData,
  setTextChatData,
}) => {
  const [text, setText] = useState("");
  return (
    <div className="startmanuebar">
      <label>
        <input
          type="text"
          value={text}
          onChange={(event) => {
            setText(event.target.value);
          }}
        />
      </label>
      <input
        type="submit"
        value="Submit"
        onClick={(event) => {
          setTextChatData([...TestChatData, text]);
          setText("")
        }}
      />
      <div>{text}</div>
    </div>
  );
};
