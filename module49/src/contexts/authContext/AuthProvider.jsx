import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { AuthContext } from "./AuthContext";
import { auth } from "../../firebase/firebase.config";
import { useEffect, useState } from "react";

const AuthProvider = ({ children }) => {
  // set a state for hold users
  const [user, setUser] = useState();

  // set a loder/loding state for coming users
  const [loading, setLoading] = useState(true);

  const createUser = (email, pass) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, pass);
  };

  const loginUser = (email, pass) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, pass);
  };

  const signOutUser = () => {
    setLoading(true);
    signOut(auth);
  };

  //   get user info to firebase
  // onAuthStateChanged(auth, (currentUser) => {
  //   if (currentUser) {
  //     console.log("inside onAuthStateChanged- if", currentUser);
  //   } else {
  //     console.log("inside onAuthStateChanged- else", currentUser);
  //   }
  // });

  useEffect(() => {
    // set observer using unsubcribe
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("authStateChange", currentUser);
      setUser(currentUser);
      setLoading(false);
    });

    // clear observer using unsubcribe
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfos = {
    user,
    loading,
    createUser,
    loginUser,
    signOutUser,
  };

  return (
    <>
      <AuthContext value={authInfos}>{children}</AuthContext>
    </>
  );
};

export default AuthProvider;
