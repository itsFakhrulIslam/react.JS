import { Link, Outlet } from "react-router";

const RootDir = () => {
  return (
    <>
      <h1>root directorys headers</h1>
      {/* navigation bar */}
      <nav>
        <ul style={{ display: "flex", gap: "20px" }}>
          {/* manual navigation system with side loading */}
          {/* <li>
            <a href="/">Header</a>
          </li>
          <li>
            <a href="/skills">Skills</a>
          </li>
          <li>
            <a href="/services">Services</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/footer">Footer</a>
          </li>
          <li>
            <a href="/app">App</a>
          </li> */}

          {/* dynamic navigation system with side no loading  */}
          <Link to="/">Header</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/services">Services</Link>
          <Link to="/about">About</Link>
          <Link to="/footer">Footer</Link>
          <Link to="/app">App</Link>
        </ul>
      </nav>

      <Outlet />

      <h1>root directorys footer</h1>
    </>
  );
};

export default RootDir;
