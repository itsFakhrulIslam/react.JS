import { signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router";
import { auth } from "../../firebase/firebase.config";

const Login = () => {
  const handleLogin = (e) => {
    console.log("login btn clicked");

    // stop reloading site
    e.preventDefault();

    // get data using form
    const email = e.target.email.value;
    const pass = e.target.password.value;
    console.log("get form data:", email, pass);

    // sign in existing users
    signInWithEmailAndPassword(auth, email, pass)
      .then((userData) => {
        console.log(userData.user);
        alert("user access his/her account");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1 className="text-center text-4xl">login page</h1>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Please Login now!</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleLogin}>
                <fieldset className="fieldset">
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

                  <button className="btn btn-neutral mt-4">Login</button>
                </fieldset>
              </form>
              <p>
                are you new in websites? please{" "}
                <Link className="underline text-blue-500" to="/register">
                  Register
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
