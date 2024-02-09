import React from "react";
import { useLocation } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import payattitude from "../assets/icons/payattitude.svg";
import visa from "../assets/icons/visa.svg";
import mastercard from "../assets/icons/mastercard.svg";
import amex from "../assets/icons/amex.svg";
import unionpay from "../assets/icons/unionpay.svg";
import mail from "../assets/icons/mail.svg";
import phone from "../assets/icons/phone.svg";
import facebook from "../assets/icons/facebook.svg";
import twitter from "../assets/icons/twitter.svg";
import instagram from "../assets/icons/instagram.svg";
import linkedin from "../assets/icons/linkedin.svg";
import DownloadComponent from "./DownloadComponent";
import { Link, useNavigate } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  if (location.pathname === "/") {
    return null;
  }
  return (
    <footer className="bg-footer pt-[5rem] px-24 pb-[1.6rem] md:px-7">
      <div className="flex justify-between md2:flex-col w-full max-w-[1440px] mx-auto">
        <div className="mr-[5rem]">
          <img src={logo} alt="" />
          <p className="text-white font-generalsans-light text-[0.7rem] mt-5 leading-relaxed sm:hidden">
            Payarena is a group of companies <br /> with services including
            Financial <br /> Technology, Banking, Payment <br /> Scheme, Value
            Added Service, <br /> etc.
          </p>
          <p className="text-white font-generalsans-light text-[0.7rem] mt-5 leading-relaxed min-md:hidden">
            Payarena is a group of companies with services including Financial
            Technology, Banking, Payment Scheme, Value Added Service, etc.
          </p>
          <div className="flex items-center gap-3 mt-7">
            <img src={payattitude} alt="" width="40px" />
            <img src={visa} alt="" width="35px" />
            <img src={mastercard} alt="" width="30px" />
            <img src={amex} alt="" width="25px" />
            <img src={unionpay} alt="" />
          </div>
        </div>
        <div className="flex flex-col mr-10">
          <div className="flex flex-col">
            <h3 className="text-footerHead font-semibold mb-6">Services</h3>
            <Link to="/payment/airtime_recharge" className="footer-link">
              Payment
            </Link>
            <a
              href="https://mall.payarena.com/"
              target="_blank"
              className="footer-link"
            >
              Shopping
            </a>
            <a
              href="https://payarenaverification.com/home"
              target="_blank"
              className="footer-link"
            >
              Verification
            </a>
            <a
              href="https://sandbox.up-ng.com"
              target="_blank"
              className="footer-link"
            >
              API Sandbox
            </a>
          </div>
        </div>
        <div className="flex flex-col mr-10">
          <h3 className="text-footerHead font-semibold mb-6">Company</h3>
          <Link
            to="/about-us"
            className="footer-link"
            onClick={() => scroll.scrollToTop()}
          >
            About us{" "}
          </Link>
          <Link
            to="/contact-us"
            className="footer-link"
            onClick={() => scroll.scrollToTop()}
          >
            Contact us{" "}
          </Link>
          <ScrollLink
            to="faqs"
            className="footer-link cursor-pointer"
            onClick={() => navigate("/contact-us")}
          >
            FAQs{" "}
          </ScrollLink>

          <Link
            to="/privacy-policy"
            className="footer-link"
            onClick={() => scroll.scrollToTop()}
          >
            Privacy Policy{" "}
          </Link>
        </div>
        {/* <div className="flex flex-col mr-20">
            <h3 className="text-footerHead font-semibold mb-6">Resources</h3>
            <a href="#" className="footer-link">
              API Docs{" "}
            </a>
            <a href="#" className="footer-link">
              Payattitude{" "}
            </a>
            <a href="#" className="footer-link">
              HopePSBank{" "}
            </a>
            <a href="#" className="footer-link">
              Unified Payments{" "}
            </a>
          </div> */}
        <div className="flex flex-col">
          <h3 className="text-footerHead font-semibold mb-6">Reach Us</h3>

          <div className="flex items-center gap-3 mb-7">
            <img src={mail} alt="" width="20px" />
            <p className="text-white font-light font-generalsans-light text-sm">
              helpdesk@up-ng.com
            </p>
          </div>
          <div className="flex items-start gap-2 mb-7">
            <img src={phone} alt="" width="20px" />
            <div className="flex flex-col items-start gap-2 justify-start">
              <p className="text-white font-light font-generalsans-light text-sm">
                0700UNIFIED (07008643433)
              </p>
              <p className="text-white font-light font-generalsans-light text-sm">
                +234 (1) 2778930
              </p>
              <p className="text-white font-light font-generalsans-light text-sm">
                +234 (1) 2808472
              </p>
              <p className="text-white font-light font-generalsans-light text-sm">
                +234 (1) 2703010 – 14
              </p>
              <p className="text-white font-light font-generalsans-light text-sm">
                +234 (1) 2272870 (Payattitude)
              </p>
              <p className="text-white font-light font-generalsans-light text-sm">
                +234 (1) 2272871 (Hope PSBank){" "}
              </p>
            </div>
          </div>
        </div>
        <DownloadComponent />
      </div>
      <div className="mt-[2.6rem] border-t border-[#667085] py-4 flex items-center justify-between w-full max-w-[1440px] mx-auto">
        <div>
          <p className="text-white text-[.77vw] font-generalsans-extralight sm:text-[.7rem]">
            © 2023 Payarena. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <img src={twitter} alt="" width="20px" />
          <img src={linkedin} alt="" width="20px" />
          <img src={instagram} alt="" width="20px" />
          <img src={facebook} alt="" width="20px" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
