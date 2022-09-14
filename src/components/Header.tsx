import '../stylesheets/Header.css'
import { HumbergerMenu } from './HumbergerMenu';
import { FC } from 'react';
import { ShareTwitter } from "./ShareTwitter";
import { MakeTweet } from "../functions/MakeTweet";
import { ChatType } from "../types/ChatType"

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