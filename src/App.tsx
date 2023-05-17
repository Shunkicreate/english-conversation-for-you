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
import { Header } from "./components/Header/Header";
import { WatchTogether } from "./components/WatchTogether";
import { InputComponent } from "./components/InputComponent";

const App: FC<AppType> = ({ uid }) => {
  const location = useLocation();
  const [locationUid, setlocationUid]
    = useState<{ uid: string }>(location.state as { uid: string })
  const [Uid, setUid] = useState<string | null>(uid);
  const navigate = useNavigate();
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
    // debugger
    setUid(CheckLogin(auth));
    if (locationUid !== null) {
      setUid(locationUid.uid)
    }
    if (!Uid && !locationUid) {
      navigate("/login", { state: { Redirect: true } });
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