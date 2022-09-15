import { onAuthStateChanged, Auth } from "firebase/auth";

export const CheckLogin: (auth: Auth) => null | string = (auth) => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            return user.uid;
        }
    });
    return null;
};
