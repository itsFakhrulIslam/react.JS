import { AuthContext } from "./AuthContext";

const AuthProvider = ({ children }) => {
  const myName = {
    name: "miraj",
  };

  return (
    <>
      <AuthContext value={myName}>{children}</AuthContext>
    </>
  );
};

export default AuthProvider;
