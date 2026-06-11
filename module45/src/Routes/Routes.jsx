import { createBrowserRouter } from "react-router";
import Root from "../pages/rootPage/Root";
import Error from "../pages/errorPage/Error";
import Home from "../pages/home/Home";

// react router setups here
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Error />,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
      },
    ],
  },
  {
    path: "*",
    Component: Error,
  },
]);
