import React, { useState, FC } from "react";
import { ChatType } from "../types/ChatType";
import { InputType } from "../types/InputType";
import sendImg from "../assets/SendButton.svg"
import "../stylesheets/TextInput.css"
export const TextInput: FC<InputType> = ({ ChatDatas, setChatDatas, setDoChat }) => {
  const [text, setText] = useState("");
  const handleSubmitEvent = () => {
    const addData: ChatType = {
      person: "You",
      message: text,
    };
    setChatDatas([...ChatDatas, addData]);
    setText("");
    setDoChat(true)
  };
  return (
    <div className="TextInput">
      <div className="InputWrap">
        <input
          className="Input"
          type="text"
          placeholder="Aa"
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
      </div>
      <div
        onClick={(event) => {
          handleSubmitEvent();
        }} className="wrapsendImg">
          <img src={sendImg} alt="SendButton" className="sendImg" />
      </div>
    </div>
  );
};
