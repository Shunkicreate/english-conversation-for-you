import React from "react";
import "./App.css";
import { TextInput } from "./components/TextInput";
import { ChatText } from "./functions/ChatText";
import { useState } from "react";
import { ChatType } from "../types/ChatType";
import { Input } from "./components/Input";
const App = () => {
  const [ChatDatas, setChatDatas] = useState<ChatType[]>([]);
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
