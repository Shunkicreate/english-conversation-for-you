import React, { useState } from "react";

export const ChatText = (text: string) => {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  const [chatTexts, setChatTexts] = useState(
    "The following is a conversation with an AI assistant. The assistant is helpful, creative, clever, and very friendly.\n\nHuman: Hello, who are you?\nAI: I am an AI created by OpenAI. How can I help you today?\nHuman: "
  );
  setChatTexts(chatTexts + text)
  return (
    <div>
      <p>You clicked {count} times</p>
      <div>{chatTexts}</div>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};
