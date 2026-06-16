import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase/firebase.config";
import { useState } from "react";

const Register = () => {
  const [userCreatedMassage, setUserCreatedMassage] = useState(false);
  const [userCreatedError, setUserCreatedError] = useState("");

  const handleRegister = (e) => {
    // console.log("register click");

    e.preventDefault();
    // console.log("form submitted");

    const email = e.target.email.value;
    const pass = e.target.password.value;
    // console.log("get form data:", email, pass);

    // state reset status: error, createed/success
    setUserCreatedError("");
    setUserCreatedMassage(false);

    createUserWithEmailAndPassword(auth, email, pass)
      .then((userInfo) => {
        setUserCreatedMassage(userInfo);
        console.log(userInfo.user);
        e.target.reset();
      })
      .catch((err) => {
        console.log(err);
        setUserCreatedError(err.message);
      });
  };

  return (
    <>
      <div>
        <h1>this is register page</h1>
      </div>

      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleRegister}>
                <fieldset className="fieldset">
                  <label className="label">Email</label>
                  <input
                    name="email"
                    type="email"
                    className="input"
                    placeholder="Email"
                  />
                  <label className="label">Password</label>
                  <input
                    name="password"
                    type="password"
                    className="input"
                    placeholder="Password"
                  />
                  <div>
                    <a className="link link-hover">Forgot password?</a>
                  </div>
                  <button className="btn btn-neutral mt-4">Register</button>
                  {userCreatedMassage && (
                    <p className="text-green-600">user created succesfully</p>
                  )}
                  {userCreatedError && (
                    <p className="text-red-600">{userCreatedError} </p>
                  )}
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
