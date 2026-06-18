import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { AuthContext } from "./AuthContext";
import { auth } from "../../firebase/firebase.config";
import { useEffect } from "react";

const AuthProvider = ({ children }) => {
  const createUser = (email, pass) => {
    return createUserWithEmailAndPassword(auth, email, pass);
  };

  const loginUser = (email, pass) => {
    return signInWithEmailAndPassword(auth, email, pass);
  };

  //   get user info to firebase
  //   onAuthStateChanged(auth, (currentUser) => {
  //     if (currentUser) {
  //       console.log("inside onAuthStateChanged- if", currentUser);
  //     } else {
  //       console.log("inside onAuthStateChanged- else", currentUser);
  //     }
  //   });
//   useEffect(() => {
//     onAuthStateChanged(auth, (currentUser) => {
//       console.log(currentUser);
//     });
//   }, []);

  const authInfos = {
    createUser,
    loginUser,
  };

  return (
    <>
      <AuthContext value={authInfos}>{children}</AuthContext>
    </>
  );
};

export default AuthProvider;
