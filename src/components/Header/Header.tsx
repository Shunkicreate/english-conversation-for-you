import './Header.css'
import { FC } from 'react';
import { HumbergerMenu } from './components/HumbergerMenu';
import { ShareTwitter } from "./components/ShareTwitter";
import { MakeTweet } from "./functions/MakeTweet";
import { ChatType } from "../../types/ChatType"

export const Header: FC<{ WatchTogetherBool: boolean, setWatchTogetherBool: React.Dispatch<React.SetStateAction<boolean>>,
ChatDatas: ChatType[]
}> = ({WatchTogetherBool, setWatchTogetherBool, ChatDatas}) => {

  const handleClick = () => {
    setWatchTogetherBool(!WatchTogetherBool)
  }

  return (
    <header>
      <div className="Title">with AI</div>
      <ShareTwitter txt={MakeTweet(ChatDatas)}/>
      <div className='button' onClick={() => { handleClick() }}>watch YouTube</div>
      <HumbergerMenu />
    </header>
  )
}