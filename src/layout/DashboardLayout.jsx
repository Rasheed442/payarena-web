import React from "react";
import { Outlet } from "react-router-dom";
import DashboardTopBar from "../components/DashboardTopBar";
import DashboardSideBar from "../components/DashboardSideBar";
import Dots from "../assets/icons/dashboardIIcons/Dots";
import NotificationPanel from "../components/NotificationPanel";

const DashboardLayout = () => {
  return (
    <div className="flex items-start max-w-main mx-auto font-poppins-regular">
      <div className="col-span-1 w-[7%]">
        <DashboardSideBar />
      </div>
      <div className="col-span-11 w-[93%] bg-[#F8F8F9]">
        <DashboardTopBar />
        <div className="grid grid-cols-8">
          <div className="p-6 col-span-6 h-screen overflow-hidden">
            <Outlet />
          </div>
          <div className="pr-[7%] col-span-2 w-full">
            <NotificationPanel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
