import '../stylesheets/Header.css'
import { useNavigate } from 'react-router-dom';
export const Header = () => {
  const navigate = useNavigate();

  return (
    <header>
      <div className="Title">AI Chat</div>
      <div className='button' onClick={() => {navigate('/watch-together')}}>watch YouTube together</div>
      <div className='Login'>login</div>
    </header>
  )
}