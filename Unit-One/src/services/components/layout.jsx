import Topbar from "./topbar";
import Sidebar from "./sidebar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="flex flex-col h-screen">
      <Topbar />
      <div className="flex flex-1 overflow-hidden ">
        <div>
          <Sidebar />
        </div>

        <div className=" flex-1 overflow-y-auto p-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
