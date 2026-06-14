import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase/firebase.init_config";

const gooleProvider = new GoogleAuthProvider();

const Login = () => {
  const handleGoogleSignIn = () => {
    console.log("google btn click");

    signInWithPopup(auth, gooleProvider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <h1>this is Login page</h1>
      <button
        onClick={handleGoogleSignIn}
        className="border-2 border-amber-500 p-2 rounded-2xl hover:bg-blue-500 cursor-pointer"
      >
        Sign in with goolge
      </button>
    </div>
  );
};

export default Login;
