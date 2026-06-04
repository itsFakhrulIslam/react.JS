import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Header from "./components/comp_collection/header/Header.jsx";
import RootDir from "./components/rootDirectory/RootDir.jsx";
import Footer from "./components/comp_collection/footer/Footer.jsx";

// for react router
// import { createBrowserRouter } from "react-router";
// import { RouterProvider } from "react-router/dom";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <h1>Hello inside of main, react routers</h1>,
//   },
// ]);

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <h1>this is the home page</h1>,
//   },
//   {
//     path: "/about",
//     element: <h1>this is the about page</h1>,
//   },
//   {
//     path: "/services",
//     element: <h1>this is the services page</h1>,
//   },
//   {
//     path: "/blog",
//     element: <h1>this is the blog page</h1>,
//   },
//   {
//     path: "/contact",
//     element: <h1>this is the contact page</h1>,
//   },
//   {
//     path: "/app",
//     element: <App />,
//   },
//   {
//     path: "/apps",
//     Component: App,
//   },
// ]);

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: RootDir },
      { path: "/header", Component: Header },
      { path: "/footer", Component: Footer },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <RouterProvider router={router} /> */}
    <RouterProvider router={router} />
  </StrictMode>,
);
