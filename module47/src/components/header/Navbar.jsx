import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className="flex gap-4 capitalize">
      <NavLink to="/">home</NavLink>
      <NavLink to="/about">about</NavLink>
      <NavLink to="/skills">skills</NavLink>
      <NavLink to="/contact">contact</NavLink>
    </nav>
  );
};

export default Navbar;
