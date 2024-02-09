import React, { useState, lazy, useEffect } from "react";
import { createBrowserRouter, useNavigate, useParams } from "react-router-dom";
import PaymentLayout from "./layout/PaymentLayout";
import SharedLayout from "./layout/SharedLayout";
// import About from "./pages/About";
import AirtimePaymentPage from "./pages/PaymentPages/AirtimePaymentPage";
import BettingLottery from "./pages/PaymentPages/BettingLottery";
import CableTv from "./pages/PaymentPages/CableTv";
import CollectionLevies from "./pages/PaymentPages/CollectionLevies";
// import Contact from "./pages/Contact";
import EducationPayment from "./pages/PaymentPages/EducationPayment";
import Electricity from "./pages/PaymentPages/Electricity";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ResetPassword from "./pages/ResetPassword";
import TelecomsPayment from "./pages/PaymentPages/TelecomsPayment";
import TransportToll from "./pages/PaymentPages/TransportToll";
import DashboardLayout from "./layout/DashboardLayout";
import HomePage from "./pages/DashboardPages/Home";
import TransfersPage from "./pages/DashboardPages/Transfers";
import PaymentsPage from "./pages/DashboardPages/Payment";
import SelfServicePage from "./pages/DashboardPages/SelfService";
import TransactionsPage from "./pages/DashboardPages/Transactions";
import SettingsPage from "./pages/DashboardPages/Settings";
import Technology from "./pages/PaymentPages/Technology";
import UMT from "./pages/PaymentPages/UMT";
import ReligiousIntitutions from "./pages/PaymentPages/ReligiousIntitutions";
import MovieTickets from "./pages/PaymentPages/MovieTickets";
import Travel from "./pages/PaymentPages/Travel";
import Others from "./pages/PaymentPages/Others";
import Hospitals from "./pages/PaymentPages/Hospitals";
import Insurance from "./pages/PaymentPages/Insurance";
import Pensions from "./pages/PaymentPages/Pensions";
import BillsPayment from "./pages/PaymentPages/BillsPayment";
import SuspenseWrapper from "./components/SuspenseWrapper";
import Loader from "./components/Loader";
import ErrorEl from "./components/ErrorEl";
import PaymentPage from "./pages/PaymentPages/PaymentPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Receipt from "./pages/Receipt";

const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
// const PaymentLayout = lazy(() => import("./layout/PaymentLayout"));

// const [paymentbiller, setPaymentBiller] = useState();

export const router = createBrowserRouter([
  {
    path: "/",
    element: <SharedLayout />,
    errorElement: <ErrorEl />,
    children: [
      { path: "/", element: <Landing /> },
      {
        path: "/about-us",
        element: (
          <SuspenseWrapper fallback={<Loader />}>
            <About />
          </SuspenseWrapper>
        ),
      },
      {
        path: "/contact-us",
        element: (
          <SuspenseWrapper fallback={<Loader />}>
            <Contact />
          </SuspenseWrapper>
        ),
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/transaction-report",
        element: <Receipt />,
      },
      {
        path: "/payment",
        element: <PaymentLayout />,
        children: [
          // {
          //   path: "/payment/airtime_recharge",
          //   element: <AirtimePaymentPage />,
          // },
          // {
          //   path: "/payment/electricity",
          //   element: <Electricity />,
          // },

          // {
          //   path: "/payment/cable_tv",
          //   element: <CableTv />,
          // },
          // {
          //   path: "/payment/telecomms",
          //   element: <TelecomsPayment />,
          // },
          // {
          //   path: "/payment/transport_tollpayments",
          //   element: <TransportToll />,
          // },
          // {
          //   path: "/payment/collections_levies",
          //   element: <CollectionLevies />,
          // },
          // {
          //   path: "/payment/education",
          //   element: <EducationPayment />,
          // },
          // {
          //   path: "/payment/betting_lottery",
          //   element: <BettingLottery />,
          // },
          // {
          //   path: "/payment/technology",
          //   element: <Technology />,
          // },
          // {
          //   path: "/payment/unified_money_transfer",
          //   element: <UMT />,
          // },
          // {
          //   path: "/payment/religious_institutions",
          //   element: <ReligiousIntitutions />,
          // },
          // {
          //   path: "/payment/movie_tickets",
          //   element: <MovieTickets />,
          // },
          // {
          //   path: "/payment/travel_hospitality",
          //   element: <Travel />,
          // },
          // {
          //   path: "/payment/others",
          //   element: <Others />,
          // },
          // {
          //   path: "/payment/hospitals",
          //   element: <Hospitals />,
          // },
          // {
          //   path: "/payment/insurance",
          //   element: <Insurance />,
          // },
          // {
          //   path: "/payment/pensions",
          //   element: <Pensions />,
          // },
          //test
          {
            path: `/payment/:paymenttype`,
            element: <PaymentPage />,
          },
          {
            path: `/payment/:paymenttype/:billertype`,
            element: <PaymentPage />,
          },
        ],
      },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/reset-password", element: <ResetPassword /> },
    ],
  },

  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [{ path: "/dashboard", element: <HomePage /> }],
  },

  {
    path: "/transfers",
    element: <DashboardLayout />,
    children: [{ path: "/transfers", element: <TransfersPage /> }],
  },
  {
    path: "/payments",
    element: <DashboardLayout />,
    children: [{ path: "/payments", element: <PaymentsPage /> }],
  },
  {
    path: "/service",
    element: <DashboardLayout />,
    children: [{ path: "/service", element: <SelfServicePage /> }],
  },
  {
    path: "/history",
    element: <DashboardLayout />,
    children: [{ path: "/history", element: <TransactionsPage /> }],
  },
  {
    path: "/settings",
    element: <DashboardLayout />,
    children: [{ path: "/settings", element: <SettingsPage /> }],
  },
]);
function App() {
  // const [paymentbiller, setPaymentBiller] = useState();

  return <h1></h1>;
}

export default App;
