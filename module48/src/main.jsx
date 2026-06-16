import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

// react router setup here
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./layout/Root";
import Home from "./components/home/Home";
import Register from "./components/authentication/register/Register";
import Login from "./components/authentication/login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "register", Component: Register },
      { path: "login", Component: Login },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
