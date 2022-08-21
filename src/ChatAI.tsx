import React, { useEffect, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Chat } from "./Chat";
import { ChatText } from "./ChatText";

interface Propstype {
  text: string;
}

const SowChat = (props: Propstype) => {
  const texts = props.text.split(/(\n)/).map((item, index) => {
    return (
      <React.Fragment key={index}>
        {item.match(/\n/) ? <br /> : item}
      </React.Fragment>
    );
  });
  return <div>{texts}</div>;
};
export const ChatAI = () => {
  const [text, setText] = useState("");
  const [ShowText, setShowText] = useState(
    "`The following is a conversation with an AI assistant. The assistant is helpful, creative, clever, and very friendly.\n\nHuman: Hello, who are you?\nAI: I am an AI created by OpenAI. How can I help you today?\n`"
  );
  const con = (con_text: string) => {
    const returnData: Promise<string> = Chat(
      ShowText + "Human: " + con_text + "\n"
    );
    returnData
      .then((result) => {
        setShowText(result);
        setText("");
      })
      .catch((error) => {
        console.log(error);
      });
  };

//   return (
//     <div className="startmanuebar">
//       <label>
//         <input
//           type="text"
//           value={text}
//           onKeyPress={(event) => {
//             if (event.key === "Enter") {
//               event.preventDefault();
//               con(text);
//             }
//           }}
//           onChange={(event) => {
//             setText(event.target.value);
//           }}
//         />
//       </label>
//       <input type="submit" value="Submit" />
//       <div>{text}</div>
//       <SowChat text={ShowText}></SowChat>
//     </div>
//   );
};
