import { Outlet } from "react-router";
import Navbar from "../../components/header/Navbar";
import Footer from "../../components/footer/Footer";

const Root = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
