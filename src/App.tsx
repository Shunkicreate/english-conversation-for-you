import React, { FC } from "react";
import logo from "./logo.svg";
import "./App.css";
import { TextInput } from "./TextInput";
import { ChatText } from "./ChatText";
import { useState } from "react";
import { Chat } from "../types/ChatType";
import { Input } from "./Input";
const App = () => {
  const [ChatDatas, setChatDatas] = useState<Chat[]>([]);
  const [TestChatDatas, setTextChatDatas] = useState<string[]>([]);
  const [uid, setUid] = useState<number>(0);

  return (
    <div className="App">
      app
      {/* {ChatDatas}app */}
      <Input ChatDatas={ChatDatas} setChatDatas={setChatDatas} />
      <div>
        <ol>
          {ChatDatas.map((ChatData) => (
            <ul>
              {ChatData.person}:          {ChatData.message}
            </ul>
          ))}
        </ol>
      </div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <TextInput></TextInput>
      {/* <ChatText></ChatText> */}
    </div>
  );
};

export default App;
