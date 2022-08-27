import React, { useState, FC, useEffect, useRef } from "react";
import { ChatType } from "../types/ChatType";
import { VoiceInputType } from "../types/VoiceInputType";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { FCOneChat } from "./OneChat";
import "../stylesheets/ShowChat.css";
import recordingGif from "../assets/recording.gif";
import { Recording } from "./Recording";
import "../stylesheets/Button.css"
import { TextUploader } from "../functions/TextUploader";
export const VoiceInput: FC<VoiceInputType> = ({
  ChatDatas,
  setChatDatas,
  DoChat,
  setDoChat,
  Uid
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
      TextUploader({ChatDatas, Uid})
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
        <div className="ShowChat">
          <div className="ChatArea">
            <div className="You OneChat">
              <div className="person">You</div>
              <div className="message default">{transcript}</div>
            </div>
          </div>
        </div>

        {/* <span>listening: {listening ? "on" : "off"}</span> */}
        <div>
          {/* <button type="button" onClick={resetTranscript}>
            Reset
          </button> */}
          <button type="button" onClick={listenContinuously} className="button">
            Listen
          </button>
          <button type="button" onClick={SpeechRecognition.stopListening} className="button">
            Stop
          </button>
          <Recording visible={listening} source={recordingGif}></Recording>
        </div>
      </div>
    </div>
  );
};
