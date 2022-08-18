// import React, { useEffect, useCallback, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { ResponseType } from '../types/OpenAiType'
const { Configuration, OpenAIApi } = require("openai");

// interface Propstype {
//     text: string;
// }
const accessApi = async (text:string) => {
    const configuration = new Configuration({
        apiKey: process.env.REACT_APP_OPENAI_APIKEY,
    });
    console.log(configuration.apiKey)
      const openai = new OpenAIApi(configuration);
      
      const response = await openai.createCompletion({
        model: "text-davinci-002",
        prompt: "The following is a conversation with an AI assistant. The assistant is helpful, creative, clever, and very friendly.\n\nHuman: Hello, who are you?\nAI: I am an AI created by OpenAI. How can I help you today?\nHuman: ",
        temperature: 0.9,
        max_tokens: 150,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0.6,
        stop: [" Human:", " AI:"],
      });
    debugger;
    const body = response.data.choices[0].text;
    text = (text + body + "\n"); // stateに反映する
    return text
};
export const Chat = (text: string) => {
    // const [state, setState] = useState(text);
    console.log("text", text)
    // useEffect(() => {
    // useEffect自体ではasyncの関数を受け取れないので内部で関数を定義して呼び出す。
    const result_text  = accessApi(text);
    
    return result_text
}