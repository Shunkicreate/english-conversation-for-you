import { onAuthStateChanged, Auth } from "firebase/auth";
// import { auth } from "./Firebase";

export const CheckLogin: (auth: Auth) => null | string = (auth) => {
    // debugger
    onAuthStateChanged(auth, (user) => {
        if (user) {
            return user.uid;
        }
    });
    return null;
};
