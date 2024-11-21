import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

export const authContext = createContext();

const googleProvider = new GoogleAuthProvider();

// const AuthProvider = ({ children }) => {
//     const [user, setUser] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [email, setEmail] = useState("");

//     const createNewUser = (email, password) => {
//         // setLoading(true);
//         return createUserWithEmailAndPassword(auth, email, password);
//     };

//     const loginUser = (email, password) => {
//         // setLoading(true);
//         return signInWithEmailAndPassword(auth, email, password);
//     };

//     const signInWithGoogle = () => {
//         // setLoading(true);
//         return signInWithPopup(auth, googleProvider);
//     };

//     const logoutUser = () => {
//         // setLoading(true);
//         return signOut(auth);
//     };

//     // const updateUserProfile = (name,photo) => {
//     //     return updateProfile(auth.currentUser, {
//     //         displayName:name,photoURL:photo
//     //     });
//     // };

//     const updateUserProfile = (updatedData) => {
//         // setLoading(true);
//         return updateProfile(auth.currentUser, updatedData);
//     };

//     useEffect(() => {
//         const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//             console.log(currentUser);
//             if (currentUser) {
//                 setUser(currentUser);
//             }
//             else {
//                 setUser(null);
//             }
//             setLoading(false);
//         })
//         return () => {
//             unsubscribe();
//         }
//     }, []);

//     const authData = {
//         createNewUser,
//         loginUser,
//         signInWithGoogle,
//         logoutUser,
//         user,
//         setUser,
//         loading,
//         updateUserProfile,
//         email,
//         setEmail
//     };

//     return (
//         <div>
//             <authContext.Provider value={ authData }>
//                 {children}
//             </authContext.Provider>
//         </div>
//     );
// };

// export default AuthProvider;








const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Add email state for global access
  const [email, setEmail] = useState("");

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

  const updateUserProfile = (updatedData) => {
    return updateProfile(auth.currentUser, updatedData);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser ? currentUser : null);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const authData = {
    createNewUser,
    loginUser,
    signInWithGoogle,
    logoutUser,
    user,
    setUser,
    loading,
    updateUserProfile,
    email, // Add email to the context
    setEmail, // Add setEmail to the context
  };

  return (
    <authContext.Provider value={authData}>{children}</authContext.Provider>
  );
};

export default AuthProvider;
