import { Outlet } from "react-router";

const Root = () => {
  return (
    <div>
      <h1>this is root pages</h1>
      <Outlet />
    </div>
  );
};

export default Root;
