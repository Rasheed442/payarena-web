import React, { useState } from "react";
import DashboardHeader from "../../components/DashboardHeader";
import Card from "../../assets/images/card.png";
import NairaIcon2 from "../../assets/icons/dashboardIIcons/nairaIcon2";
import NairaIcon from "../../assets/icons/dashboardIIcons/nairaIcon";
import ApexCharts from "react-apexcharts";
import AppModal from "../../components/Modal/AppModal";
import SendMoneyModal from "../../modals/SendMoneyModal";
import MainSection from "../../components/MainSection.jsx";
import FundWalletModal from "../../modals/FundWalletModal";
import AirtimeVendingModal from "../../modals/AirtimeVendingModal";
import DataVendingModal from "../../modals/DataVendingModal";
export default function HomePage() {
  const optionsBar = {
    colors: ["#1D4ED8", "#F58220", "#29AAF3", "#22C55E"],
    dataLabels: {
      enabled: false,
    },

    chart: {
      height: 380,
      type: "bar",
      stacked: true,

      toolbar: {
        show: false,
      },
    },
    legend: {
      show: false,
    },
    plotOptions: {
      bar: {
        columnWidth: "16%",
        labels: {
          enabled: false,
        },

        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
        style: {
          colors: ["#333"],
        },
        offsetX: 30,
      },
    },
    grid: {
      show: true,
      borderColor: "#EBEEF2",
      strokeDashArray: 0,

      position: "back",
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: true,
          borderWidth: 4,
        },
      },
      row: {
        colors: undefined,
        opacity: 1,
      },
      column: {
        colors: undefined,
        opacity: 1,
        borderWidth: 4,
      },
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
    },
    series: [
      {
        name: "PRODUCT A",
        data: [14, 25, 21, 17, 12, 13, 11],
      },
      {
        name: "PRODUCT B",
        data: [13, 23, 20, 8, 13, 27, 33],
      },
      {
        name: "PRODUCT C",
        data: [11, 17, 15, 15, 21, 14, 15],
      },
      {
        name: "PRODUCT C",
        data: [16, 27, 7, 25, 20, 25, 24],
      },
    ],
    xaxis: {
      categories: ["M", "T", "W", "T", "F", "S", "S"],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        style: {
          colors: "#B8BFCC",
          fontSize: "14px",
          fontWeight: "600",
          fontFamily: "Poppins-bold",
        },
      },
    },
    yaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
      },
    },
    fill: {
      opacity: 1,
    },
  };
  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);
  const [modal4, setModal4] = useState(false);

  return (
    <div>
      <DashboardHeader
        title="Dashboard"
        desc="Realtime Insight on various transactions"
      />
      <SendMoneyModal
        modal={modal}
        closeModal={() => {
          setModal(false);
        }}
      />

      <AirtimeVendingModal
        modal={modal3}
        closeModal={() => {
          setModal3(false);
        }}
      />

      <DataVendingModal
        modal={modal4}
        closeModal={() => {
          setModal4(false);
        }}
      />

      <MainSection
        action1={setModal}
        actionTitle1="Send Money"
        action2={setModal2}
        actionTitle2="Receive Money"
        action3={setModal3}
        actionTitle3="Airtime Vending"
        action4={setModal4}
        actionTitle4="Data Vending"
      />
      <div className="grid grid-cols-10 gap-[1vw]">
        <div className="bg-white p-[0.8vw] rounded-xl col-span-8">
          <ApexCharts
            options={optionsBar}
            type="bar"
            height="270"
            series={optionsBar.series}
          />
        </div>
        <div className="col-span-2 text-white flex w-full flex-col justify-between">
          <div className="bg-accent1 p-[1.2vw] w-full flex items-start justify-center flex-col rounded-lg h-full">
            <div className="text-[0.8vw] font-bold">Approval Rate</div>
            <div className="text-[1.4vw] font-bold mt-[6%]">70.1%</div>
          </div>
          <div className="bg-accent2 p-[1.2vw] w-full flex items-start justify-center flex-col rounded-lg h-full mt-[20%]">
            <div className="text-[0.8vw] font-bold">Decline Rate</div>
            <div className="text-[1.4vw] font-bold mt-[6%]">30.1%</div>
          </div>
        </div>
      </div>
    </div>
  );
}
