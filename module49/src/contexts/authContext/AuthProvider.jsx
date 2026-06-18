import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { AuthContext } from "./AuthContext";
import { auth } from "../../firebase/firebase.config";

const AuthProvider = ({ children }) => {
  const createUser = (email, pass) => {
    return createUserWithEmailAndPassword(auth, email, pass);
  };

  const loginUser = (email, pass) => {
    return signInWithEmailAndPassword(auth, email, pass);
  };

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
