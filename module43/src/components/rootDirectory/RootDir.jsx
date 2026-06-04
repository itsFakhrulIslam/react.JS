import { Outlet } from "react-router";

const RootDir = () => {
  return (
    <>
      <h1>root directorys</h1>
      <Outlet />
    </>
  );
};

export default RootDir;
