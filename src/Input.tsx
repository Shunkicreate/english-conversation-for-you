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
  const handleSubmitEvent = () => {
    setTextChatData([...TestChatData, text]);
    setText("");
  };
  return (
    <div className="input">
      <label>
        <input
          type="text"
          value={text}
          onChange={(event) => {
            setText(event.target.value);
          }}
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              handleSubmitEvent();
            }
          }}
        />
      </label>
      <input
        type="submit"
        value="Submit"
        onClick={(event) => {
          handleSubmitEvent();
        }}
      />
      <div>{text}</div>
    </div>
  );
};
