import { TextCleaner } from "./TextCleaner";
const { Configuration, OpenAIApi } = require("openai");

export const AccessOpenAIAPI = async (text: string) => {
  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_OPENAI_APIKEY,
  });
  const openai = new OpenAIApi(configuration);
  const response = await openai
    //Open Ai params
    //temperature: 値が高いほど、モデルがより多くのリスクを負うことを意味します。 より創造的なアプリケーションには 0.9 を、明確に定義された答えを持つアプリケーションには 0 (argmax サンプリング) を試してください。 これを使用するか、トップ p を使用する
    //max_tokens: 1 つのトークンは約 4 文字のテキストに相当します (プロンプトから完了までの間に最大 4000 トークン)
    //top_p: 温度によるサンプリングに代わる核サンプリングと呼ばれるもので、モデルは top_p の確率質量を持つトークンの結果を考慮します。 したがって、0.1 は、上位 10％ の確率質量を構成するトークンのみが考慮されることを意味します。
    //frequency_penalty: -2.0 ～ 2.0 の数。 正の値は、これまでのテキストにおける既存の頻度に基づいて新しいトークンにペナルティを与え、モデルが同じ行をそのまま繰り返す可能性を減少させます。
    //presence_penalty: -2.0 ～ 2.0 の数。 正の値は、新しいトークンがこれまでのテキストに表示されているかどうかに基づいてペナルティを課し、モデルが新しいトピックについて話す可能性を高めます。

    //Freiend Chat ver.
    .createCompletion({
      model: "text-davinci-002",
      prompt: text,
      temperature: 0.5,
      max_tokens: 60,
      top_p: 1.0,
      frequency_penalty: 0.5,
      presence_penalty: 0.0,
      stop: [" You:"],
    })
    .catch((e: any) => {
      console.log(e.message);
      return "AI: Sorry. I have no idea.";
    });
  // debugger;
  let body = response.data.choices[0].text;
  // console.log("before cleaned", body)
  return TextCleaner(body);
};
export const Chat = (text: string) => {
  const result_text = AccessOpenAIAPI(text);
  return result_text;
};
