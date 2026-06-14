import { Outlet } from "react-router";
import Navbar from "../components/header/Navbar";

const Root = () => {
  return (
    <div>
      <h1>this is root layout in react</h1>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Root;
