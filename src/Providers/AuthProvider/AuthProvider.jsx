import AuthContext from "./AuthContext";
import {
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "./../../firebase/firebase.init";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { GoogleAuthProvider } from "firebase/auth";
import axios from "axios";

const googleProvider = new GoogleAuthProvider();

export const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);


  // FIREBASE CLIENT SDks
  // 3rd party: GOOGLE LOG IN

  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  // auth state observer set
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("On auth currentUser=>", currentUser);

      setLoading(false);
      if(user)
      {
        navigate('/dashboard')
      }

      console.log("On auth user=>", user);
    });

    return () => {
      return unsubscribe();
    };
  }, []);

  // logout
  const logoutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
    logoutUser,
    googleSignIn,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
