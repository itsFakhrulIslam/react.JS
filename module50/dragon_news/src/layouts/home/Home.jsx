import { Outlet } from "react-router";

const Home = () => {
  return (
    <div>
      {/* header area */}
      <header></header>

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
