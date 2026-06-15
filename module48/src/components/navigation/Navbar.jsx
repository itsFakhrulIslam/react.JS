import { NavLink } from "react-router";
import './navbar.css'

const Navbar = () => {
  return (
    <nav className="navStyle">
      <NavLink to="/">home</NavLink>
      <NavLink to="about">about</NavLink>
      <NavLink to="skills">skills</NavLink>
      <NavLink to="contact">contact</NavLink>
    </nav>
  );
};

export default Navbar;
