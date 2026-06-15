import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

// react router setup here
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./layout/Root";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
