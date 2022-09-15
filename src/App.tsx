import { useEffect } from "react";
import "./stylesheets/App.css";
import { useState, FC } from "react";
import { ChatType } from "./types/ChatType";
import { ChatAI } from "./functions/ChatAI";
import { ShowChat } from "./components/ShowChat";
import { CheckLogin } from "./functions/CheckLogin";
import { useNavigate } from "react-router-dom";
import { auth } from "./functions/Firebase";
import { AppType } from "./types/AppType";
import { useLocation } from 'react-router-dom';
import { Header } from "./components/Header";
import { WatchTogether } from "./components/WatchTogether";
import { InputComponent } from "./components/InputComponent";
import { StackScreenProps } from '@react-navigation/stack';
type RootStackParamList = {
  login: undefined
  Details:  { // 画面名
    Redirect: boolean; // 受け渡すパラメータの型を定義
  };
};

const App: FC<AppType> = ({ uid }) => {
  type NewsPageNavigationProp = StackScreenProps<
    RootStackParamList,// 画面とパラメータの定義を呼び出し
    'News'// 画面名を設定
  >;
  const location = useLocation();
  const [locationUid, setlocationUid]
    = useState<{ uid: string }>(location.state as { uid: string })
  const [Uid, setUid] = useState<string | null>(uid);
  const navigate = useNavigate:NewsPageNavigationProp();
  const [ChatDatas, setChatDatas] = useState<ChatType[]>([
    {
      person: "AI",
      message: "I am an AI created by OpenAI. How can I help you today?\n",
    },
  ]);
  const [DoChat, setDoChat] = useState(false);
  const [WatchTogetherBool, setWatchTogetherBool] = useState(false);

  useEffect(() => {
    if (ChatDatas.length > 1 && DoChat) {
      ChatAI({ ChatDatas, setChatDatas, Uid });
      setDoChat(false);
    }
  }, [ChatDatas, DoChat, Uid]);
  useEffect(() => {
    setUid(CheckLogin(auth));
    if (locationUid !== null) {
      setUid(locationUid.uid)
    }
    if (!Uid && !locationUid) {
      navigate("/login", {Redirect: false});
    }
  }, []);


  return (
    <div className="App">
      <Header WatchTogetherBool={WatchTogetherBool} setWatchTogetherBool={setWatchTogetherBool} ChatDatas={ChatDatas} />
      <div className="content">
        {WatchTogetherBool ? (
          <WatchTogether
            // ShowYouTube={true}
            ChatDatas={ChatDatas}
            setChatDatas={setChatDatas}
          />

        ) : (
          <div style={{ display: 'none' }}></div>
        )}
        <ShowChat ChatDatas={ChatDatas}></ShowChat>
        <InputComponent
          ChatDatas={ChatDatas}
          setChatDatas={setChatDatas}
          DoChat={DoChat}
          setDoChat={setDoChat}
        />
      </div>
    </div>
  );
};

export default App;
