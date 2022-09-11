import React, { FC, useEffect } from "react";
import { VoiceInputType } from "../types/VoiceInputType";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import recordingGif from "../assets/recording.gif";
import { Recording } from "./Recording";
import "../stylesheets/Button.css"
export const VoiceInput: FC<VoiceInputType> = ({
  InputText,
  setInputText,
  setSubmit
}) => {
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
    ],
  });
  
  useEffect(()=>{
    console.log("transcript: ", transcript)
    // setInputText(InputText + transcript)
  }, [transcript])
  
  useEffect(() => {
    if (finalTranscript !== "") {
      setInputText(InputText + finalTranscript)
      setSubmit(true)
      resetTranscript();
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
