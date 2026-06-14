import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase.init_config";
import {useState } from "react";

const gooleProvider = new GoogleAuthProvider();

const Login = () => {
  const [userInfo, setUserInfo] = useState(null);

  const handleGoogleSignIn = () => {
    console.log("google btn click");

    signInWithPopup(auth, gooleProvider)
      .then((result) => {
        console.log(result);

        setUserInfo(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        alert("signout success");
        setUserInfo(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <h1>this is Login page</h1>
      {/* <button
        onClick={handleGoogleSignIn}
        className="border-2 border-amber-500 p-2 rounded-2xl hover:bg-blue-500 cursor-pointer"
      >
        Sign in with goolge
      </button>

      <button
        onClick={handleSignOut}
        className="border-2 border-amber-500 p-2 rounded-2xl hover:bg-blue-500 cursor-pointer"
      >
        Signout
      </button> */}

      {userInfo ? (
        <button
          onClick={handleSignOut}
          className="border-2 border-amber-500 p-2 rounded-2xl hover:bg-blue-500 cursor-pointer"
        >
          Signout
        </button>
      ) : (
        <button
          onClick={handleGoogleSignIn}
          className="border-2 border-amber-500 p-2 rounded-2xl hover:bg-blue-500 cursor-pointer"
        >
          Sign in with goolge
        </button>
      )}

      <div className="p-5 border-2 border-amber-200">
        {userInfo && (
          <div className="">
            <h1>Name: {userInfo.displayName}</h1>
            <h1>email: {userInfo.email}</h1>
            <img src={userInfo.photoURL} alt="" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
