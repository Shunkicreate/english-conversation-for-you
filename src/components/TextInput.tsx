import React, { useState, FC } from "react";
import { ChatType } from "../types/ChatType";
import { InputType } from "../types/InputType";
import sendImg from "../assets/SendButton.svg"
import "../stylesheets/TextInput.css"
export const TextInput: FC<InputType> = ({ InputText, setInputText, setSubmit }) => {
  return (
    <div className="TextInput">
      <div className="InputWrap">
        <input
          className="Input"
          type="text"
          placeholder="Aa"
          value={InputText}
          onChange={(event) => {
            setInputText(event.target.value);
          }}
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              setSubmit(true);
            }
          }}
        />
      </div>
      <div
        onClick={(event) => {
          setSubmit(true);
        }} className="wrapsendImg">
          <img src={sendImg} alt="SendButton" className="sendImg" />
      </div>
    </div>
  );
};
