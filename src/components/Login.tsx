import React, { useState } from "react";
import { useEffect } from "react";
import { auth } from "../functions/Firebase";
import { onAuthStateChanged } from "firebase/auth";
import { signInWithRedirect } from "firebase/auth";
import { getRedirectResult, GoogleAuthProvider } from "firebase/auth";
import { OAuthCredential } from "firebase/auth";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "../stylesheets/Button.css"
const Login = () => {
  // const [Uid, setUid] = useState("");
  const navigate = useNavigate();
  // const CheckLogin = () => {
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       setUid(user.uid);
  //       console.log("set uid!", Uid);
  //       navigate("/");
  //     }
  //   });
  // };
  // CheckLogin();
  const provider = new GoogleAuthProvider();
  const ClickLogin = function () {
    signInWithRedirect(auth, provider);
  };
  useEffect(() => {
    getRedirectResult(auth)
      .then((result) => {
        // console.log(result);
        if (result !== null) {
          const credential: OAuthCredential | null =
            GoogleAuthProvider.credentialFromResult(result);
          if (credential !== null) {
            const user = result.user;
            // setUid(user.uid);
            console.log('go to root')
            navigate("/", { state: { uid: user.uid } });
          }
        }
      })
      .catch((error) => {
        console.error(error);
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // console.error(errorCode);
        // console.error(errorMessage);
      });
  }, []);

  const CheckLogont = () => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        console.log("signed out");
      }
    });
  };
  CheckLogont();
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
