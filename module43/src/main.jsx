import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import RootDir from "./components/rootDirectory/RootDir";
import Header from "./components/comp_collection/header/Header";
import Footer from "./components/comp_collection/footer/Footer";
import Skills from "./components/comp_collection/skills/Skills.jsx";
import Servic from "./components/comp_collection/servic/Servic.jsx";
import About from "./components/comp_collection/about/About.jsx";
import Users from "./components/comp_collection/users/Users.jsx";
import Posts from "./components/comp_collection/posts/Posts.jsx";
import Todos from "./components/comp_collection/todos/Todos.jsx";

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
    Component: RootDir,
    children: [
      { index: true, Component: Header },
      { path: "/footer", Component: Footer },
      { path: "/skills", Component: Skills },
      { path: "/services", Component: Servic },
      { path: "/about", Component: About },
      { path: "/app", Component: App },
      {
        path: "/users",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        Component: Users,
      },
      {
        path: "/posts",
        loader: () => fetch("https://jsonplaceholder.typicode.com/posts"),
        Component: Posts,
      },
      {
        path: "/todos",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Todos />
          </Suspense>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <RouterProvider router={router} /> */}
    <RouterProvider router={router} />
  </StrictMode>,
);
