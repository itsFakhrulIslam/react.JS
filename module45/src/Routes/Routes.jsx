import { createBrowserRouter } from "react-router";
import Root from "../pages/rootPage/Root";
import Error from "../pages/errorPage/Error";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import BookDetails from "../pages/bookDetails/BookDetails";
import Contact from "../pages/contact/Contact";

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
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/contact",
        Component: Contact,
      },
      {
        path: "/bookDetails/:id",
        loader: () => fetch("./booksData.json"),
        Component: BookDetails,
      },
    ],
  },
  {
    path: "*",
    Component: Error,
  },
]);
