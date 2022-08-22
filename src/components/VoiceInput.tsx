import React, { useState, FC } from "react";
import { ChatType } from "../../types/ChatType";
import { InputType } from "../../types/InputType";
// import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
export const VoiceInput: FC<InputType> = ({ ChatDatas, setChatDatas,  setDoChat }) => {
  const [text, setText] = useState("");
  const handleSubmitEvent = () => {
    const addData: ChatType = {
      person: "You",
      message: text,
    };
    setChatDatas([...ChatDatas, addData]);
    setText("");
    setDoChat(true)
  };

  // const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  // const recognizer = new Recognition();
  // // 言語設定を日本語に
  // recognizer.lang = 'ja-JP';
  // // 解析中の結果を表示する
  // recognizer.interimResults = true;
  // // 認識のたびに継続的に結果を返す
  // recognizer.continuous = true;
  // // 結果表示用のHTML要素を取得
  // const resultDiv = document.getElementById('js-result');
  // let prevResultText: string;
  // recognizer.onresult = function (event) {
  //   const results = event.results;
  //  // 中でも最終的な確実性の高い結果を取得
  //   const resultText = results[results.length - 1][0].transcript.trim();
  //  // interimResults, continuousをtrueにすると素早く多くの結果が返ってくるため、一つ前と同じテキストは弾いている
  //   if (prevResultText === resultText) {
  //     return;
  //   }
  //   prevResultText = resultText;
  //   console.log(resultText);
  //   resultDiv.textContent = resultText;
  //   actionByResult(resultText);
  //   startRecognizer();
  // }




  return (
    <div className="input">
      <label>
        <input
          type="text"
          value={text}
          onChange={(event) => {
            setText(event.target.value);
          }}
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              handleSubmitEvent();
            }
          }}
        />
      </label>
      <input
        type="submit"
        value="Submit"
        onClick={(event) => {
          handleSubmitEvent();
        }}
      />
      <div>{text}</div>
    </div>
  );
};
