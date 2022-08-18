import React, { useEffect, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Chat } from "./Chat";
import { ChatText } from "./ChatText";

// const nToBr = (text:string) => {
//     return text.replaceAll("\n", "<br>")
// }
// const BrTon = (text:string) => {
//     return text.replaceAll("<br>", "\n")
// }
interface Propstype {
  text: string;
}
const lbToBr = (text: string) => {
  return text.split(/(\n)/g).map((t) => (t === "\n" ? <br /> : t));
};
//   const msg = "星宮いちご\n霧矢あおい\n紫吹蘭";

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
export const TextInput = () => {
  // const navigate = useNavigate();

  // useEffect(() => {
  //     document.addEventListener("keydown", keyFunction, false)
  // }
  // )
  const [text, setText] = useState("");
  const [ShowText, setShowText] = useState(
    "`The following is a conversation with an AI assistant. The assistant is helpful, creative, clever, and very friendly.\n\nHuman: Hello, who are you?\nAI: I am an AI created by OpenAI. How can I help you today?\n`"
  );
  // let first_send_text:string = "`The following is a conversation with an AI assistant. The assistant is helpful, creative, clever, and very friendly.\n\nHuman: Hello, who are you?\nAI: I am an AI created by OpenAI. How can I help you today?\n`";
  // setText(first_send_text);
  const con = (con_text: string) => {
    // debugger;
    // con_text += "Human: " + con_text + "\n";
    // setShowText(ShowText + "Human: " + con_text + "\n")
    // setText("")
    // console.log('con_text', con_text)
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
    // console.log('return: send_text', returnData.)
  };
  // const showText = (text:string) => {
  //     console.log(text)
  // }
  // // const keyFunction = useCallback((event) => {
  //     console.log(event.key)
  //     if (event.key === " ") {
  //         navigate("input")
  //     }
  // }, []);

  // const inputevent = (event: React) => setText(event.target.value)

  return (
    <div className="startmanuebar">
      {/* <form onSubmit={(event)=>{con(text)}}> */}
      {/* <form onSubmit={(event) => {setText2(event.target.value);console.log(text2)}}> */}
      <label>
        <input
          type="text"
          value={text}
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              event.preventDefault();
              con(text);
            }
          }}
          onChange={(event) => {
            setText(event.target.value);
          }}
        />
      </label>
      <input type="submit" value="Submit" />
      {/* <ChatText event.target.value></ChatText> */}
      <div>{text}</div>
      <SowChat text={ShowText}></SowChat>
      {/* <div onClick={(event)=>{con(text)}}>button</div> */}
      {/* </form> */}
    </div>
  );
};
