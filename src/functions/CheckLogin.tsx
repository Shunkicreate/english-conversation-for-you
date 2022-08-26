import { onAuthStateChanged,  Auth,  User } from "firebase/auth";
import { useState } from "react";

export const CheckLogin = (auth: Auth) => {
    const [users, setusers] = useState<User|null>(null) 
    onAuthStateChanged(auth, (user) => {
        if (user) {
            setusers(user)
        } else {
            return(-1)
        }
    });
    return users
}