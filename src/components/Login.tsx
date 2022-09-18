import { FC, useEffect, useState } from "react";
import { auth } from "../functions/Firebase";
import { onAuthStateChanged } from "firebase/auth";
import { signInWithRedirect, getRedirectResult } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "../stylesheets/Button.css"



const Login: FC<{ Redirect: boolean }> = ({ Redirect }) => {
  // const [signinAction, setSigninAction] = useState(false)

  // useEffect(() => {
  //   const createUser = async () => {
  //     const firebaseAuthUser = await getRedirectResult(auth)
  //     if (!firebaseAuthUser?.user) return
  //     const uid = firebaseAuthUser.user!.uid
  //     console.log("fin")
  //     navigate("/", { state: { uid: uid } });
  //   }
  //   createUser()
  // }, [signinAction])
  // console.log(Redirect)
  // debugger
  const [NewRedirect, setNewRedirect] = useState(Redirect)
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();
  const ClickLogin = function () {
    signInWithRedirect(auth, provider)
    setNewRedirect(true)
    // setSigninAction(true)
  };

  useEffect(() => {
    // if (NewRedirect) {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          navigate("/", { state: { uid: user.uid } });
        }
      });
    // }
    // if (NewRedirect) {
    //   onAuthStateChanged(auth, (user) => {
    //     setNewRedirect(false)
    //     if (user) {
    //       navigate("/", { state: { uid: user.uid } });
    //     }
    //   });
    // }
    // else if(user){
    //   navigate("/", { state: { uid: user.uid } });

    // }
  }, [navigate, NewRedirect, Redirect])

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
      {/* <div>
        <h3>Google ログイン{NewRedirect ? ("true") : ("false")}</h3>
      </div> */}
      <div>
        <button onClick={() => ClickLogin()} className="button">Login</button>
      </div>
      <button onClick={() => clickLogout()} className="button">Logout</button>
    </div>
  );
};

export default Login;
