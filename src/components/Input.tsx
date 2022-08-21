import React, { useState, FC } from "react";
import { ChatType } from "../../types/ChatType";
import { InputType } from "../../types/InputType";

export const Input: FC<InputType> = ({ ChatDatas, setChatDatas,  setDoChat }) => {
  const [text, setText] = useState("");
  const handleSubmitEvent = () => {
    const addData: ChatType = {
      person: "Human",
      message: text,
    };
    setChatDatas([...ChatDatas, addData]);
    console.log(ChatDatas);
    setText("");
    setDoChat(true)
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
