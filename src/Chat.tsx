import React, { useEffect, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ResponseType } from '../types/OpenAiType'
const { Configuration, OpenAIApi } = require("openai");

// interface Propstype {
//     text: string;
// }
const accessApi = async (text:string) => {
    const configuration = new Configuration({
        apiKey: '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',
    });
    const openai = new OpenAIApi(configuration);
    // debugger;
    const response: ResponseType = await openai.createCompletion("text-davinci-002", {
        prompt: text,
        temperature: 0.5,
        max_tokens: 60,
        top_p: 1.0,
        frequency_penalty: 0.5,
        presence_penalty: 0.0,
        stop: ["You:"],
    });
    // debugger;
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