import { Outlet } from "react-router";
import Header from "../../components/Header";

const Home = () => {
  return (
    <div>
      {/* header area */}
      <header>
        <Header />
      </header>

      {/* main area */}
      <main>
        {/* left side menu */}
        <section className="leftMenu"></section>

        {/* outlet/dynamic area */}
        <Outlet />

        {/* right side menu */}
        <section className="rightMenu"></section>
      </main>
    </div>
  );
};

export default Home;
