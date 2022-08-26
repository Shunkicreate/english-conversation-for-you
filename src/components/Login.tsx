import React, { useState } from "react";
import { useEffect } from "react";
import { auth } from "../functions/Firebase";
import { onAuthStateChanged } from "firebase/auth";
import { signInWithRedirect } from "firebase/auth";
import { getRedirectResult, GoogleAuthProvider } from "firebase/auth";
import { OAuthCredential } from "firebase/auth";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const [Uid, setUid] = useState("");
    const navigate = useNavigate();
    const CheckLogin = () => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUid(user.uid);
                console.log("set uid!", Uid);
                navigate("/");
            }
        });
    };
    CheckLogin();
    const provider = new GoogleAuthProvider();
    const ClickLogin = function () {
        signInWithRedirect(auth, provider);
    };
    useEffect(() => {
        getRedirectResult(auth)
            .then((result) => {
                console.log(result);
                if (result !== null) {
                    const credential: OAuthCredential | null =
                        GoogleAuthProvider.credentialFromResult(result);
                    if (credential !== null) {
                        const user = result.user;
                        setUid(user.uid);
                        navigate("/");
                    }
                }
            })
            .catch((error) => {
                console.error(error);
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                console.error(errorCode);
                console.error(errorMessage);
                console.error(email);
            });
    }, []);

    const CheckLogont = () => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                const email = user.email;
                console.log(uid);
                console.log(email);
            } else {
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
            <h1>ログイン Google</h1>
            <div>
                <button onClick={() => ClickLogin()}>Login</button>
            </div>
            <hr />
            <hr />
            <button onClick={() => clickLogout()}>Logout</button>
        </div>
    );
};

export default Login;
