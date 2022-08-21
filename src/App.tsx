import React from "react";
import "./App.css";
import { TextInput } from "./TextInput";
import { ChatText } from "./ChatText";
import { useState } from "react";
import { Chat } from "../types/ChatType";
import { Input } from "./Input";
const App = () => {
  const [ChatDatas, setChatDatas] = useState<Chat[]>([]);
  const [uid, setUid] = useState<number>(0);

  return (
    <div className="App">
      app
      <Input ChatDatas={ChatDatas} setChatDatas={setChatDatas} />
      <div>
        <ol>
          {ChatDatas.map((ChatData) => (
            <ul>
              {ChatData.person}:{ChatData.message}
            </ul>
          ))}
        </ol>
      </div>
      <TextInput></TextInput>
      {/* <ChatText></ChatText> */}
    </div>
  );
};

export default App;
