import React, { useEffect } from "react";
import "./stylesheets/App.css";
import { TextInput } from "./components/TextInput";
import { ChatText } from "./functions/ChatText";
import { useState } from "react";
import { ChatType } from "../types/ChatType";
import { Input } from "./components/Input";
import { ChatAI } from "./functions/ChatAI";
import { ShowChat } from "./components/ShowChat";
const App = () => {
  const [ChatDatas, setChatDatas] = useState<ChatType[]>([{person: 'AI', message: 'I am an AI created by OpenAI. How can I help you today?\n'}]);
  const [DoChat, setDoChat] = useState(false)
  const [uid, setUid] = useState<number>(0);
  useEffect(() => {
    if(ChatDatas.length > 1 && DoChat){
      console.log('triger chatai', ChatDatas)
      ChatAI({ChatDatas, setChatDatas})
      setDoChat(false)
    }
  },
  [ChatDatas, DoChat])

  return (
    <div className="App">
      <Input ChatDatas={ChatDatas} setChatDatas={setChatDatas} setDoChat={setDoChat} />
      <ShowChat ChatDatas={ChatDatas}></ShowChat>
      {/* <TextInput></TextInput> */}
      {/* <ChatText></ChatText> */}
    </div>
  );
};

export default App;
