const { Configuration, OpenAIApi } = require("openai");

export const AccessOpenAIAPI = async (text: string) => {
  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_OPENAI_APIKEY,
  });
  console.log(configuration.apiKey);
  const openai = new OpenAIApi(configuration);
  const response = await openai
    .createCompletion({
      model: "text-davinci-002",
      prompt: text,
      temperature: 0.9,
      max_tokens: 150,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0.6,
      stop: [" You:"],
    })
    .catch((e: any) => {
      console.log(e.message);
      return "AI: Sorry. I have no idea.";
    });
  // .then(() => {
  // debugger;
  const body = "AI:" + response.data.choices[0].text;
  return body;
  // });
  // text = text + body + "\n"; // stateに反映する
  // return text;
};
export const Chat = (text: string) => {
  console.log("text", text);
  const result_text = AccessOpenAIAPI(text);
  return result_text;
};
