import React, { useState, FC, useEffect } from "react";
import { ChatType } from "../../types/ChatType";
import { InputType } from "../../types/InputType";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
export const VoiceInput: FC<InputType> = ({ ChatDatas, setChatDatas,  setDoChat }) => {
  const [message, messageSet] = useState("");
  const {
    transcript,
    interimTranscript,
    finalTranscript,
    resetTranscript,
    listening
  } = useSpeechRecognition({
    commands: [
      {
        command: "reset",
        callback: () => resetTranscript()
      },
      {
        command: "shut up",
        callback: () => messageSet("I wasn't talking.")
      },
      {
        command: "Hello",
        callback: () => messageSet("Hi there!")
      }
    ]
  });

  useEffect(()=>{
    console.log("finalTranscript", finalTranscript)
    const addData: ChatType = {
      person: "You",
      message: finalTranscript,
    };
    setChatDatas([...ChatDatas, addData]);
    resetTranscript()
    // setDoChat(true)
  }, [finalTranscript])

  useEffect(() => {
    if (finalTranscript !== "") {
      console.log("Got final result:", finalTranscript);
    }
  }, [interimTranscript, finalTranscript]);

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    console.log(
      "Your browser does not support speech recognition software! Try Chrome desktop, maybe?"
    );
    return null;
  }
  const listenContinuously = () => {
    SpeechRecognition.startListening({
      continuous: true,
      language: "en"
    });
  };

  return (
    <div>
      <div>
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
      <div>{message}</div>
      <div>
        <span>{transcript}</span>
      </div>
    </div>
  );
};
