const GitLogin = () => {
  const userInfo = true;

  return (
    <div>
      <h1>this is github login page</h1>
      {/* <button className="border-2 border-amber-500 p-2 rounded-2xl hover:bg-blue-500 cursor-pointer">
        Login with github
      </button> */}

      {userInfo ? (
        <button
          onClick={""}
          className="border-2 border-amber-500 p-2 rounded-2xl hover:bg-blue-500 cursor-pointer"
        >
          Signout
        </button>
      ) : (
        <button
          onClick={""}
          className="border-2 border-amber-500 p-2 rounded-2xl hover:bg-blue-500 cursor-pointer"
        >
          Sign in with github
        </button>
      )}
    </div>
  );
};

export default GitLogin;
