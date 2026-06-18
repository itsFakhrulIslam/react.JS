import { Link } from "react-router";
import { use } from "react";
import { AuthContext } from "../../contexts/authContext/AuthContext";

const Register = () => {
  const { createUser } = use(AuthContext);
  // console.log("register", createUser);

  const handleRegister = (e) => {
    // console.log("register btn clicked");

    // stop reloading site
    e.preventDefault();

    // get data using form
    const name = e.target.name.value;
    const email = e.target.email.value;
    const pass = e.target.password.value;
    console.log("get form data:", name, email, pass);

    // create a new user
    createUser(email, pass)
      .then((users) => {
        console.log("user created", users.user);
        alert("user created successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1 className="text-center text-4xl">register page</h1>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Please Register now!</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleRegister}>
                <fieldset className="fieldset">
                  {/* name field */}
                  <label className="label">Name</label>
                  <input
                    name="name"
                    type="text"
                    className="input"
                    placeholder="Name"
                  />

                  {/* email field */}
                  <label className="label">Email</label>
                  <input
                    name="email"
                    type="email"
                    className="input"
                    placeholder="Email"
                  />

                  {/* password field */}
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
                </fieldset>
              </form>
              <p>
                already have an account? please{" "}
                <Link className="underline text-blue-500" to="/login">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
