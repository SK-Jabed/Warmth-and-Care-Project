import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';
import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

export const authContext = createContext();

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createNewUser = (email, password) => {
        // setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const loginUser = (email, password) => {
        // setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const signInWithGoogle = () => {
        // setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };
    
    const signInWithGitHub = () => {
        // setLoading(true);
        return signInWithPopup(auth, githubProvider);
    };

    const logoutUser = () => {
        // setLoading(true);
        return signOut(auth);
    };

    // const updateUserProfile = (name,photo) => {
    //     return updateProfile(auth.currentUser, {
    //         displayName:name,photoURL:photo
    //     });
    // };

    const updateUserProfile = (updatedData) => {
        // setLoading(true);
        return updateProfile(auth.currentUser, updatedData);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser);
            if (currentUser) {
                setUser(currentUser);
            }
            else {
                setUser(null);
            }
            setLoading(false);
        })
        return () => {
            unsubscribe();
        }
    }, []);

    const authData = {
        createNewUser,
        loginUser,
        signInWithGoogle,
        signInWithGitHub,
        logoutUser,
        user,
        setUser,
        loading,
        updateUserProfile
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