import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>hello react router world</h1>,
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
