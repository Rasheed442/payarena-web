import React from "react";
import LogoIcon from "../assets/icons/logo.png";
import HomeIcon from "../assets/icons/dashboardIIcons/homeIcon";
import TransferIcon from "../assets/icons/dashboardIIcons/transferIcon";
import ServiceIcon from "../assets/icons/dashboardIIcons/serviceIcon";
import PaymentIcon from "../assets/icons/dashboardIIcons/paymentIcon";
import HistoryIcon from "../assets/icons/dashboardIIcons/historyIcon";
import SettingsIcon from "../assets/icons/dashboardIIcons/settingsIcon";
import { useNavigate } from "react-router-dom";

export default function DashboardSideBar() {
  const navLinks = [
    {
      name: "Dashboard",
      link: "/dashboard",
      icon: HomeIcon,
    },
    {
      name: "Transfers",
      link: "/transfers",
      icon: TransferIcon,
    },
    {
      name: "Payments",
      link: "/payments",
      icon: PaymentIcon,
    },
    {
      name: "Self Service",
      link: "/service",
      icon: ServiceIcon,
    },
    {
      name: "Transaction History",
      link: "/history",
      icon: HistoryIcon,
    },
    {
      name: "Settings",
      link: "/settings",
      icon: SettingsIcon,
    },
  ];

  const navigate = useNavigate();
  return (
    <div className=" h-[80vh] w-full text-center flex flex-col justify-between">
      <div className="text-center flex items-center justify-center py-10">
        <img src={LogoIcon} alt="" />
      </div>
      <div>
        {navLinks.map((item) => {
          return (
            <div
              onClick={() => {
                navigate(item.link);
              }}
              className={`flex flex-col py-6 px-4 cursor-pointer transition-all ${
                window.location.pathname === item.link &&
                "before:transition-all before:w-[4px] before:h-full before:bg-accent1 before:absolute before:left-0 before:top-0 relative transition-all bg-[#F8F8F9]"
              } items-center justify-center`}
            >
              <item.icon
                width="20"
                height="20"
                color={
                  (window.location.pathname === item.link && "#F58220") ||
                  "#464255"
                }
                opacity={
                  (window.location.pathname === item.link && "1") || "0.5"
                }
              />
              <div
                className={`text-xs mt-2 font-bold transition-all ${
                  (window.location.pathname === item.link && "text-accent1") ||
                  "text-[#464255]"
                }`}
              >
                {item.name}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
