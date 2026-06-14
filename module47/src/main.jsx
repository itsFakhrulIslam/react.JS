import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

// react router setup here
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./layout/Root";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Skills from "./components/skills/Skills";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "/about", Component: About },
      { path: "/skills", Component: Skills },
      { path: "/contact", Component: Contact },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
