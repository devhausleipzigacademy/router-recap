import { Outlet } from "react-router-dom";
import { Header } from "../components/header";

export function RootLayout() {
  return (
    <div className="h-screen overflow-hidden">
      <Header />
      <Outlet />
    </div>
  );
}
