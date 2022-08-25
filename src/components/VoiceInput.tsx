import React, { useState, FC, useEffect, useRef } from "react";
import { ChatType } from "../../types/ChatType";
import { InputType } from "../../types/InputType";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { FCOneChat } from "./OneChat";
export const VoiceInput: FC<InputType> = ({
  ChatDatas,
  setChatDatas,
  setDoChat,
}) => {
  const [message, messageSet] = useState("");
  const element = useRef<HTMLDivElement>(null);
  const {
    transcript,
    interimTranscript,
    finalTranscript,
    resetTranscript,
    listening,
  } = useSpeechRecognition({
    commands: [
      {
        command: "reset",
        callback: () => resetTranscript(),
      },
      {
        command: "shut up",
        callback: () => messageSet("I wasn't talking."),
      },
      {
        command: "Hello",
        callback: () => messageSet("Hi there!"),
      },
    ],
  });
  const [PreFinalTranscript, setPreFinalTranscript] = useState("");

  useEffect(() => {
    if (finalTranscript !== "") {
      setPreFinalTranscript(finalTranscript);
      const addData: ChatType = {
        person: "You",
        message: finalTranscript,
      };
      setChatDatas([...ChatDatas, addData]);
      resetTranscript();
      setDoChat(true);
    }
  }, [finalTranscript]);

  // useEffect(() => {
  //   if (finalTranscript !== "") {
  //   }
  // }, [interimTranscript, finalTranscript]);

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    console.log(
      "Your browser does not support speech recognition software! Try Chrome desktop, maybe?"
    );
    return null;
  }
  const listenContinuously = () => {
    SpeechRecognition.startListening({
      continuous: true,
      language: "en",
    });
  };
  // let elem = FCOneChat({"You", message});

  return (
    <div>
      <div>
        <div>{message}</div>
        {/* {FCOneChat( person="You", message={message})} */}
        {/* <div className="ChatArea" ref={element}>
          {() => FCOneChat("You", message)}
        </div> */}
        <FCOneChat person={"You"} message={message} />
        {/* {elem} */}
        <span>listening: {listening ? "on" : "off"}</span>
        <div>
          <button type="button" onClick={resetTranscript}>
            Reset
          </button>
          <button type="button" onClick={listenContinuously}>
            Listen
          </button>
          <button type="button" onClick={SpeechRecognition.stopListening}>
            Stop
          </button>
        </div>
      </div>
      <div>
        <span>{transcript}</span>
      </div>
    </div>
  );
};
