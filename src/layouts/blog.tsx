import { Outlet, useLoaderData } from "react-router-dom";
import { blogLoader } from "../main";
import { Sidebar } from "../components/sidebar";

type LoaderData = Awaited<ReturnType<typeof blogLoader>>;

export function Blog() {
  const { posts } = useLoaderData() as LoaderData;
  return (
    <div className="flex h-full">
      <Sidebar posts={posts} />
      <Outlet />
    </div>
  );
}
