import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";

import Home from "../page/index";
import Test from "../page/test";
import About from "../page/About";
import Blog from "../page/blogs";
import Post from "../page/blogs/_id";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/test",
        element: <Test />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/blog/:id",
        element: <Post />,
      },
    ],
  },
]);
