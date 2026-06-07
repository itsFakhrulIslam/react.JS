import { NavLink, Outlet } from "react-router";

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
          <NavLink to="/">Header</NavLink>
          <NavLink to="/skills">Skills</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/footer">Footer</NavLink>
          <NavLink to="/app">App</NavLink>
          <NavLink to="/users">Users</NavLink>
          <NavLink to="/posts">Posts</NavLink>
          <NavLink to="/todos">Todos</NavLink>
          <NavLink to="/albums">Albums</NavLink>
          <NavLink to="/comments">Comments</NavLink>
        </ul>
      </nav>

      <Outlet />

      <h1>root directorys footer</h1>
    </>
  );
};

export default RootDir;
