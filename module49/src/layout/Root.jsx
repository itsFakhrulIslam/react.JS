import { Outlet } from "react-router";
import Navbar from "../components/header/navigation/Navbar";

const Root = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Root;
