import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  LoaderFunction,
  RouterProvider,
} from "react-router-dom";
import { RootLayout } from "./layouts/root";
import { Home } from "./routes/home";
import { Blog } from "./layouts/blog";
import { Post as PostType } from "./utils/types";
import { Post } from "./routes/post";

export async function blogLoader() {
  const response = await fetch("https://jsonplaceholder.org/posts");
  const posts: PostType[] = await response.json();
  return {
    posts,
  };
}

const postLoader: LoaderFunction = async ({ params }) => {
  const response = await fetch(
    `https://jsonplaceholder.org/posts/${params.id}`
  );
  const post: PostType = await response.json();
  return {
    post,
  };
};

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
        children: [
          {
            index: true,
            element: <p className="flex-1">Please select a Post</p>,
          },
          {
            path: ":id",
            element: <Post />,
            loader: postLoader,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
