import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import PaymentNav from "../components/PaymentNav";
import Suscribe from "../components/Suscribe";
import SideSelect from "../components/paymentpage/SideSelect";
import AdBanner from "../components/AdBanner";
import SideSelectMobile from "../components/paymentpage/SideSelectMobile";

const PaymentLayout = () => {
  const [selectedNetwork, setSelectedNetwork] = useState("mtn");

  return (
    <div className="pt-[100px]">
      <PaymentNav />
      <div className="pt-[6rem] px-[9rem] flex justify-between gap-[4rem] md:px-[2rem] md:gap-[2rem] sm:flex-col sm:pt-[2rem] max-w-[1440px] mx-auto">
        <div className="flex-[0.6] px-[0] md:px-0 sm:hidden">
          <SideSelect
            selectedNetwork={selectedNetwork}
            setSelectedNetwork={setSelectedNetwork}
          />
        </div>
        <div className="hidden sm:block">
          <SideSelectMobile
            selectedNetwork={selectedNetwork}
            setSelectedNetwork={setSelectedNetwork}
          />
        </div>
        <div className="px-[2rem] flex-1 md:flex-[0.8] sm:px-0">
          <Outlet />
        </div>
        <div className="flex-[0.6] flex justify-end md:hidden">
          <AdBanner />
        </div>
      </div>
    </div>
  );
};

export default PaymentLayout;
