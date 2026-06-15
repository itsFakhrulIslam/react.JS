import { GithubAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase._config";
import { useState } from "react";

const githubProvider = new GithubAuthProvider();

const GitLogin = () => {
  const [userInfo, setUserInfo] = useState(null);

  const handleGithubLogin = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        // console.log("git login succes", result);
        console.log(result.user.displayName);

        const loggedInUser = result.user;
        console.log(loggedInUser);
        

        if (!loggedInUser.email) {
          console.log(`user id not found`);

          if (loggedInUser.providerData) {
            console.log(`provider found, but user id not found`);

            const gitProvider = loggedInUser.providerData.find(
              (provider) => provider.providerId === "github.com",
            );

            if (gitProvider) {
              console.log("github user id", gitProvider.uid);
            }
          }
        }

        setUserInfo(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleGithubLogout = () => {
    signOut(auth)
      .then(() => {
        alert("git logout success");

        setUserInfo(null);
        console.log("git logout success");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>this is github login page</h1>
      <div className="">{}</div>

      <div className="">
        {/* <button
        onClick={handleGithubLogin}
        className="border-2 border-amber-500 p-2 rounded-2xl hover:bg-blue-500 cursor-pointer"
        >
        Sign in with github
        </button>
        <button
        onClick={handleGithubLogout}
        className="border-2 border-amber-500 p-2 rounded-2xl hover:bg-blue-500 cursor-pointer"
        >
        Signout
        </button> */}
      </div>

      {userInfo ? (
        <button
          onClick={handleGithubLogout}
          className="border-2 border-amber-500 p-2 rounded-2xl hover:bg-blue-500 cursor-pointer"
        >
          Signout
        </button>
      ) : (
        <button
          onClick={handleGithubLogin}
          className="border-2 border-amber-500 p-2 rounded-2xl hover:bg-blue-500 cursor-pointer"
        >
          Sign in with github
        </button>
      )}

      <div className="p-5 border-2 border-amber-200">
        {userInfo && (
          <div className="">
            <h1>Name: {userInfo.user.displayName}</h1>
            <h1>email: {userInfo.user.email}</h1>
            <img src={userInfo.user.photoURL} alt="" />
          </div>
        )}
      </div>
    </div>
  );
};

export default GitLogin;
