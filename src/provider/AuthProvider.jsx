import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

export const authContext = createContext();

const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const createNewUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    };

    const logoutUser = () => {
        return signOut(auth);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser);
        })
        return () => {
            unsubscribe();
        }
    }, []);

    const authData = {
        createNewUser,
        loginUser,
        signInWithGoogle,
        logoutUser,
        user,
        setUser
    };

    return (
        <div>
            <authContext.Provider value={ authData }>
                {children}
            </authContext.Provider>
        </div>
    );
};

export default AuthProvider;