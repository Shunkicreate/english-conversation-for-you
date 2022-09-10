import '../stylesheets/Header.css'
import { useNavigate } from 'react-router-dom';
import { HumbergerMenu } from './HumbergerMenu';

export const Header = () => {
  const navigate = useNavigate();

  return (
    <header>
      <div className="Title">AI Chat</div>
      <div className='button' onClick={() => { navigate('/watch-together') }}>watch YouTube together</div>
      <HumbergerMenu/>
    </header>
  )
}