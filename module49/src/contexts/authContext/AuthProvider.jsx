import { createUserWithEmailAndPassword } from "firebase/auth";
import { AuthContext } from "./AuthContext";
import { auth } from "../../firebase/firebase.config";

const AuthProvider = ({ children }) => {
  const createUser = (email, pass) => {
    return createUserWithEmailAndPassword(auth, email, pass);
  };

  const authInfos = {
    createUser,
  };

  return (
    <>
      <AuthContext value={authInfos}>{children}</AuthContext>
    </>
  );
};

export default AuthProvider;
