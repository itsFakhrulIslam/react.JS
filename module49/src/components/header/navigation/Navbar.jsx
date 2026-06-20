import { Link, NavLink } from "react-router";
import "./navbar.css";
import { use } from "react";
import { AuthContext } from "../../../contexts/authContext/AuthContext";

const Navbar = () => {
  const { user, signOutUser } = use(AuthContext);
  // console.log(signOutUser);
  // console.log(user);

  const handleLogout = () => {
    signOutUser()
      .then(() => {
        console.log("signOut succesfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const links = (
    <>
      <nav className="flex gap-4 capitalize">
        <NavLink to="/">home</NavLink>
        <NavLink to="register">register</NavLink>
        <NavLink to="login">login</NavLink>
        <NavLink to="dashboard">dashboard</NavLink>

        {/* privet router setup here */}
        {user && (
          <>
            <NavLink to="orders">orders</NavLink>
            <NavLink to="profile">profile</NavLink>
          </>
        )}
      </nav>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      <div className="navbar-end">
        {user ? (
          <a onClick={handleLogout} className="btn">
            Sign Out
          </a>
        ) : (
          <Link className="btn" to="/login">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
