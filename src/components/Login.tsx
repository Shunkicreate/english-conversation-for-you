import { useEffect } from "react";
import { auth } from "../functions/Firebase";
import { onAuthStateChanged } from "firebase/auth";
import { signInWithRedirect } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "../stylesheets/Button.css"

const Login = () => {
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();
  const ClickLogin = function () {
    signInWithRedirect(auth, provider);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/", { state: { uid: user.uid } });
      }
    });
  }, [navigate])

  const clickLogout = async () => {
    signOut(auth)
      .then(() => {
        console.log("ログアウトしました");
      })
      .catch((error) => {
        console.log(`ログアウト時にエラーが発生しました (${error})`);
      });
  };

  return (
    <div>
      <div>
        <h3>Google ログイン</h3>
      </div>
      <div>
        <button onClick={() => ClickLogin()} className="button">Login</button>
      </div>
      <button onClick={() => clickLogout()} className="button">Logout</button>
    </div>
  );
};

export default Login;
