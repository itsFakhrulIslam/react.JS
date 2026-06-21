import { createBrowserRouter } from "react-router";
import Home from "../layouts/home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/auth",
    element: <h1>hello react authentication world</h1>,
  },
  {
    path: "/news",
    element: <h1>hello react news world</h1>,
  },
  {
    path: "*",
    element: <h1>hello react ERROR 404 world</h1>,
  },
]);
