import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootLayout } from "./layouts/root";
import { Home } from "./routes/home";
import { Blog } from "./routes/blog";
import { Post } from "./utils/types";

async function blogLoader() {
  const response = await fetch("https://jsonplaceholder.org/posts");
  const posts: Post[] = await response.json();
  console.log(posts);
  return {
    posts,
  };
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "blog",
        element: <Blog />,
        loader: blogLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
