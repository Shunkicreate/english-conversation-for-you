import React, { useState } from "react";
import { Chat } from "../functions/AccessOpenAIAPI";

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
export const TextInput = () => {
  // const navigate = useNavigate();

  // useEffect(() => {
  //     document.addEventListener("keydown", keyFunction, false)
  // }
  // )
  const [text, setText] = useState("");
  const [ShowText, setShowText] = useState(
    "`The following is a conversation with an AI assistant. The assistant is helpful, creative, clever, and very friendly.\n\nYou: Hello, who are you?\nAI: I am an AI created by OpenAI. How can I help you today?\n`"
  );
  // let first_send_text:string = "`The following is a conversation with an AI assistant. The assistant is helpful, creative, clever, and very friendly.\n\nYou: Hello, who are you?\nAI: I am an AI created by OpenAI. How can I help you today?\n`";
  // setText(first_send_text);
  const con = (con_text: string) => {
    // debugger;
    // con_text += "You: " + con_text + "\n";
    // setShowText(ShowText + "You: " + con_text + "\n")
    // setText("")
    // console.log('con_text', con_text)
    const returnData: Promise<string> = Chat(
      ShowText + "You: " + con_text + "\n"
    );
    returnData
      .then((result) => {
        console.log(result)
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
