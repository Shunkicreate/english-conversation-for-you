import React, { useState, FC, useEffect, useRef } from "react";
import { ChatType } from "../types/ChatType";
import { VoiceInputType } from "../types/VoiceInputType";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import recordingGif from "../assets/recording.gif";
import { Recording } from "./Recording";
import "../stylesheets/Button.css"
export const VoiceInput: FC<VoiceInputType> = ({
  ChatDatas,
  setChatDatas,
  DoChat,
  setDoChat,
  InputText,
  setInputText
}) => {
  const [message, messageSet] = useState("");
  const element = useRef<HTMLDivElement>(null);
  const {
    transcript,
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
  useEffect(() => {
    setInputText(InputText + transcript)
  }, [transcript])
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
  return (
    <div>
      <button type="button" onClick={listenContinuously} className="button">
        Listen
      </button>
      <button type="button" onClick={SpeechRecognition.stopListening} className="button">
        Stop
      </button>
      <Recording visible={listening} source={recordingGif}></Recording>
    </div>
  );
};
