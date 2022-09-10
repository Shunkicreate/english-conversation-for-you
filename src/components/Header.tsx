import '../stylesheets/Header.css'
import { HumbergerMenu } from './HumbergerMenu';
import { FC } from 'react';
export const Header: FC<{ WatchTogetherBool: boolean, setWatchTogetherBool: React.Dispatch<React.SetStateAction<boolean>> }> = ({WatchTogetherBool, setWatchTogetherBool}) => {

  const handleClick = () => {
    setWatchTogetherBool(!WatchTogetherBool)
  }

  return (
    <header>
      <div className="Title">AI Chat</div>
      <div className='button' onClick={() => { handleClick() }}>watch YouTube</div>
      <HumbergerMenu />
    </header>
  )
}