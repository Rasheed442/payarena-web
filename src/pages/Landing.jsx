import React, { useState, useEffect, useRef } from "react";
import backgroundImg1 from "../assets/images/l1.png";
import backgroundImg2 from "../assets/images/l2.jpeg";
import backgroundImg3 from "../assets/images/l3.jpeg";
import backgroundImg4 from "../assets/images/l4.jpeg";
import ActiveBackgroundMarker from "../components/bits/ActiveBackgroundMarker";
import people from "../assets/icons/people.svg";

import iconDivider from "../assets/icons/iconDivider.svg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  catalogActions,
  catalogSelector,
} from "../store/services/catalog/catalog.service";
import { getCatalog } from "../store/api/catalog/getCatalog";
import { icons } from "../assets/svg/landingIcons";
import styled from "styled-components";
import "./Landing.css";
import Loader from "../components/Loader";
import { osName } from "react-device-detect";
import { FaArrowDown } from "react-icons/fa6";
import { toast } from "sonner";

const Landing = () => {
  const dispatch = useDispatch();
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const [backgroundIndex, setbackgroundIndex] = useState(0);
  const backgrounds = [
    backgroundImg1,
    backgroundImg2,
    backgroundImg3,
    backgroundImg4,
  ];

  const delay = 7000;
  const timeoutRef = useRef(null);
  const storedCatalog = JSON.parse(sessionStorage.getItem("catalogs"));

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setbackgroundIndex((prevIndex) =>
          prevIndex === backgrounds.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );
    return () => {
      resetTimeout();
    };
  }, [backgroundIndex]);

  const { data, error, loading } = useSelector(catalogSelector);
  useEffect(() => {
    if (storedCatalog === null) {
      dispatch(getCatalog());
    }
    dispatch(catalogActions.setBiller(data[0]?.Merchants));
  }, [dispatch]);

  const updateDimensions = () => {
    setScreenWidth(window.innerWidth);
    setScreenHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  const downloadAppHandler = () => {
    if (osName === "iOS") {
      window.location.href =
        "https://apps.apple.com/ng/app/payarena/id1637449009";
    } else if (osName === "Android") {
      window.location.href =
        "https://play.google.com/store/apps/details?id=com.unifiedpayment.payarena";
    } else {
      toast.error(
        "Visit payarena.com on a mobile browser to download the mobile app"
      );
    }
  };
  return (
    <>
      {/* {loading ? (
        <Loader />
      ) : (
        <section className="min-w-screen w-screen min-h-screen h-screen relative">
          <div className="slideshow">
            <div
              className="slideshowSlider"
              style={{
                transform: `translate3d(${-backgroundIndex * 100}%, 0, 0)`,
              }}
            >
              {backgrounds.map((background, idx) => (
                <div className="slide" key={idx}>
                  <img
                    src={background}
                    alt=""
                    className="w-screen h-screen object-cover sm:object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
          <ActiveBackgroundMarker
            currentIdx={backgroundIndex}
            backgroundLength={backgrounds}
          />
          {screenWidth > 889 && (
            <div
              className={`w-[100%] max-w-[1600px] ${
                screenHeight > 800
                  ? "bottom-20"
                  : screenHeight > 900
                  ? "bottom-30"
                  : "bottom-0"
              } absolute left-1/2 transform -translate-x-1/2 -translate-y-3/2 z-[9100]`}
            >
              <div className="flex flex-col	px-[8rem] py-[5rem] justify-center w-full lg2:px-[3rem]">
                {backgroundIndex == 0 && (
                  <>
                    <h1 className="text-white text-5xl font-bold leading-[1.1] font-roboto  min-16:text-[6rem] min-16:leading-[1.2] min-imac:text-[7rem]">
                      Welcome to a world <br /> of more{" "}
                      <span className="hover:bg-accent1 bg-accent2 rounded-lg p-[0.2rem] px-[0.3rem] ">
                        Options
                      </span>
                    </h1>
                    <p className="text-white font-thin mt-[3%] text-lg font-generalsans-light short:mt-3 sm:text-[1rem] min-16:text-[1.5rem]  min-imac:text-[1.8rem]  min-imac:leading-[1.4]">
                      Revolutionizing Mobile Payments: Seamlessly Innovative,{" "}
                      <br />
                      Incredibly Convenient!"
                    </p>
                  </>
                )}
                {backgroundIndex == 1 && (
                  <>
                    <h1 className="text-white text-5xl font-bold leading-[1.15] font-roboto min-16:text-[6rem] min-16:leading-[1.3]  min-imac:text-[7rem] min-16:hidden">
                      Unveil Infinite Shopping Excitement: <br /> Your{" "}
                      <span className="hover:bg-accent1 bg-accent2 rounded-lg p-[0.2rem] px-[0.3rem] ">
                        Ultimate Destination
                      </span>{" "}
                      For <br /> Everything Your Need
                    </h1>
                  </>
                )}
                {backgroundIndex == 2 && (
                  <h1 className="text-white text-5xl font-bold leading-[1.1] font-roboto min-16:text-[6rem] min-16:leading-[1.2]  min-imac:text-[7rem]">
                    Seamless Payments, <br />
                    Boundless{" "}
                    <span className="hover:bg-accent1 bg-accent2 rounded-lg p-[0.2rem] px-[0.3rem] ">
                      Possibilities.
                    </span>
                  </h1>
                )}
                {backgroundIndex == 3 && (
                  <h1 className="text-white text-5xl font-bold leading-[1.1] font-roboto min-16:text-[6rem] min-16:leading-[1.2]  min-imac:text-[6rem]">
                    Where Trust Finds <br /> Its{" "}
                    <span className="hover:bg-accent1 bg-accent2 rounded-lg p-[0.2rem] px-[0.25rem] ">
                      Verification
                    </span>
                    .{" "}
                  </h1>
                )}

                <div className="mt-[3%] short:mt-2 flex items-center h-[220px] pr-[3rem] min-16:mt-[9rem]  min-imac:mb-[23rem] min-16:mb-[2rem]">
                  <div className="bg-white flex-1 rounded-l-lg flex items-center pl-[3rem] md2:pl-[2rem] min-16:gap-[3rem] py-[2rem]">
                    <div className="flex-initial w-[45%]">
                      <h3 className="text-accent2 font-semibold text-[1.5rem] mb-3 md:text-[1rem] lg:text-[1.2rem] min-16:text-[2rem]">
                        The Payarena Experience
                      </h3>
                      <p className="text-[0.8rem] font-thin w-[78%] lg:text-[.7rem] min-16:text-[1rem]">
                        Empower Your Mobile Experience: Cutting-edge Payment
                        Platform, Uniting Convenience and Innovation!
                      </p>
                    </div>
                    <div className="flex flex-1 items-center gap-12">
                      <PayIcon to="/payment/airtime_recharge">
                        {icons.pay}
                      </PayIcon>
                      <img src={iconDivider} alt="" />
                      <ShopIcon
                        href="https://mall.payarena.com/"
                        target="_blank"
                      >
                        {icons.shop}
                      </ShopIcon>
                      <img src={iconDivider} alt="" />
                      <VerifyIcon href="">{icons.verify}</VerifyIcon>
                    </div>
                  </div>
                  <div className="bg-accent2 rounded-r-lg px-[3.5rem] py-[1.5rem] flex flex-col items-center shadow-small-left">
                    <DownloadIcon onClick={downloadAppHandler}>
                      <FaArrowDown />
                    </DownloadIcon>
                    <p className="font-normal text-white border-b py-2 px-2	text-xs mb-3 border-#ededed font-roboto min-16:text-[1.1rem]">
                      Download Payarena Mobile
                    </p>

                    <img src={people} alt="" className="w-55" />
                    <p className="text-center text-[0.5rem] mt-1 text-white font-thin min-16:text-[0.7rem]">
                      Used by 10M+ users <br /> around the Africa.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
          {screenWidth <= 890 && (
            <div
              className={`w-[100%] max-w-[1600px] absolute left-1/2 transform -translate-x-1/2 -translate-y-3/2 md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 z-[9100]`}
            >
              <div className="flex flex-col	px-[8rem] py-[5rem] justify-center w-full md:px-[1.5rem] sm:py-[6rem]">
                {backgroundIndex == 0 && (
                  <h1 className="text-white text-5xl font-bold leading-[1.4] font-roboto text-[2.5rem]">
                    Welcome to a world of more{" "}
                    <span className="hover:bg-accent1 bg-accent2 rounded-lg p-[0.2rem] px-[0.3rem] ">
                      Options
                    </span>
                  </h1>
                )}
                {backgroundIndex == 1 && (
                  <h1 className="text-white text-5xl font-bold leading-[1.4] font-roboto text-[1.5rem]">
                    Unveil Infinite Shopping <br /> Excitement: Your{" "}
                    <span className="hover:bg-accent1 bg-accent2 rounded-lg p-[0.2rem] px-[0.3rem] ">
                      Ultimate Destination
                    </span>{" "}
                    For Everything <br /> Your Need
                  </h1>
                )}
                {backgroundIndex == 2 && (
                  <h1 className="text-white text-5xl font-bold leading-[1.4] font-roboto text-[2.5rem]">
                    Seamless Payments, Boundless{" "}
                    <span className="hover:bg-accent1 bg-accent2 rounded-lg p-[0.2rem] px-[0.3rem] ">
                      Possibilities.
                    </span>
                  </h1>
                )}
                {backgroundIndex == 3 && (
                  <h1 className="text-white text-5xl font-bold leading-[1.4] font-roboto text-[2.5rem]">
                    Trust Assured: Where Authenticity finds
                    <span className="hover:bg-accent1 bg-accent2 rounded-lg p-[0.2rem] px-[0.3rem] ">
                      its Proof
                    </span>
                    .{" "}
                  </h1>
                )}
                <p className="text-white font-thin mt-7 text-lg font-generalsans-light sm:text-[1rem] sm:leading-[1.3]">
                  Experience the ultimate in mobile services with our payment
                  platform - where convenience meets innovation
                </p>
                <div className="mt-[3rem] flex items-center h-[50px] pr-[3rem] md:pr-0 md:mt-[6rem] mobile:flex-col">
                  <div className="sm:h-0 bg-white flex-1 h-5/6 rounded-l-lg flex items-center pl-[3rem] md:h-[10rem] md:px-[1.5rem] md:rounded-lg sm:hidden">
                    <div className="flex-initial w-[45%] sm:hidden">
                      <h3 className="text-accent2 font-semibold text-[1.5rem] mb-3 md:text-[1rem]">
                        The Payarena Experience
                      </h3>
                      <p className="text-[0.8rem] font-thin w-[78%]">
                        Experience the ultimate in mobile services with our
                        payment platform - where convenience meets innovation
                      </p>
                    </div>
                    <div className="flex flex-1 items-center gap-12 sm:justify-between md:justify-around md:gap-[unset]">
                      <PayIcon to="/payment/airtime_recharge">
                        {icons.pay}
                      </PayIcon>
                      <img src={iconDivider} alt="" />
                      <ShopIcon
                        href="https://mall.payarena.com/"
                        target="_blank"
                      >
                        {icons.shop}
                      </ShopIcon>
                      <img src={iconDivider} alt="" />
                      <VerifyIcon href="">{icons.verify}</VerifyIcon>
                    </div>
                  </div>
                  <div className="h-[6rem] bg-white flex-1 rounded-l-lg  items-center pl-[3rem] md:px-[1.5rem] md:rounded-lg hidden mobile:block">
                    <div className="flex-initial w-[45%] sm:hidden">
                      <h3 className="text-accent2 font-semibold text-[1.5rem] mb-3 md:text-[1rem]">
                        The Payarena Experience
                      </h3>
                      <p className="text-[0.8rem] font-thin w-[78%]">
                        Experience the ultimate in mobile services with our
                        payment platform - where convenience meets innovation
                      </p>
                    </div>
                    <div className="flex flex-1 items-center gap-12 sm:justify-between md:justify-around md:gap-[unset]">
                      <PayIcon to="/payment/airtime_recharge">
                        {icons.pay}
                      </PayIcon>
                      <img src={iconDivider} alt="" />
                      <ShopIcon
                        href="https://mall.payarena.com/"
                        target="_blank"
                      >
                        {icons.shop}
                      </ShopIcon>
                      <img src={iconDivider} alt="" />
                      <VerifyIcon href="">{icons.verify}</VerifyIcon>
                    </div>
                  </div>
                  <div className="bg-accent2 rounded-r-lg px-[3.5rem] py-[1.5rem] flex flex-col items-center shadow-small-left mobile:px-[1rem] mobile:py-[0l.8rem]">
                    <DownloadIcon onClick={downloadAppHandler}>
                      <FaArrowDown />
                    </DownloadIcon>
                    <p className="font-normal text-white border-b py-2 px-2	text-xs mb-3 border-#ededed font-roboto ">
                      Download Payarena Mobile
                    </p>

                    <img src={people} alt="" className="w-55" />
                    <p className="text-center text-[0.5rem] mt-1 text-white font-thin">
                      Used by 10M+ users <br /> around the Africa.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>
      )} */}
      {loading ? (
        <Loader />
      ) : (
        <Container>
          <div className="slideshow">
            <div
              className="slideshowSlider"
              style={{
                transform: `translate3d(${-backgroundIndex * 100}%, 0, 0)`,
              }}
            >
              {backgrounds.map((background, idx) => (
                <div className="slide" key={idx}>
                  <img
                    src={background}
                    alt=""
                    className="w-screen h-screen object-cover sm:object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
          <ActiveBackgroundMarker
            currentIdx={backgroundIndex}
            backgroundLength={backgrounds}
          />
          <div className="contentContainer">
            <div className="content">
              <div className="heroTextContainer">
                {backgroundIndex == 0 && (
                  <>
                    <h1 className="text-white font-bold leading-[1.1] font-roboto">
                      Welcome to a world <br /> of more{" "}
                      <span className="hover:bg-accent1 bg-accent2 rounded-lg p-[0.2rem] px-[0.3rem] ">
                        Options
                      </span>
                    </h1>
                    <p className="text-white font-thin mt-[3%] text-lg font-generalsans-light">
                      Revolutionizing Mobile Payments: Seamlessly Innovative,{" "}
                      <br />
                      Incredibly Convenient!"
                    </p>
                  </>
                )}
                {backgroundIndex == 1 && (
                  <>
                    <h1 className="text-white font-bold leading-[1.4] font-roboto unveil">
                      Unveil Infinite Shopping Excitement: <br /> Your{" "}
                      <span className="hover:bg-accent1 bg-accent2 rounded-lg p-[0.2rem] px-[0.3rem] ">
                        Ultimate Destination
                      </span>{" "}
                      For Everything <br /> You Need
                    </h1>
                    <p className="text-white font-thin mt-[3%] text-lg font-generalsans-light revo">
                      Revolutionizing Mobile Payments: Seamlessly Innovative,{" "}
                      <br />
                      Incredibly Convenient!"
                    </p>
                  </>
                )}
                {backgroundIndex == 2 && (
                  <>
                    <h1 className="text-white font-bold leading-[1.4] font-roboto">
                      Seamless Payments, Boundless <br />{" "}
                      <span className="hover:bg-accent1 bg-accent2 rounded-lg p-[0.2rem] px-[0.3rem] ">
                        Possibilities.
                      </span>
                    </h1>
                    <p className="text-white font-thin mt-[3%] text-lg font-generalsans-light revo">
                      Revolutionizing Mobile Payments: Seamlessly Innovative,{" "}
                      <br />
                      Incredibly Convenient!"
                    </p>
                  </>
                )}
                {backgroundIndex == 3 && (
                  <>
                    <h1 className="text-white leading-[1.4] font-roboto">
                      Where Trust Find Its <br />
                      <span className="hover:bg-accent1 bg-accent2 rounded-lg p-[0.2rem] px-[0.3rem] ">
                        Verification.{" "}
                      </span>
                    </h1>
                    <p className="text-white font-thin mt-[3%] text-lg font-generalsans-light revo">
                      Revolutionizing Mobile Payments: Seamlessly Innovative,{" "}
                      <br />
                      Incredibly Convenient!"
                    </p>
                  </>
                )}
              </div>
              <div className="actionsWrapper">
                <div className="bg-white actionContainer">
                  <div className="actionTexts">
                    <h3 className="heading">The Payarena Experience</h3>
                    <p className="empower">
                      Empower Your Mobile Experience: Cutting-edge Payment
                      Platform, Uniting Convenience and Innovation!
                    </p>
                  </div>
                  <div className="flex flex-1 items-center buttonsWrapper">
                    <PayIcon to="/payment/airtime_recharge">
                      {icons.pay}
                    </PayIcon>
                    <img src={iconDivider} alt="" className="iconDivider" />
                    <ShopIcon href="https://mall.payarena.com/" target="_blank">
                      {icons.shop}
                    </ShopIcon>
                    <img src={iconDivider} alt="" className="iconDivider" />
                    <VerifyIcon
                      href="https://payarenaverification.com/home"
                      target="_blank"
                    >
                      {icons.verify}
                    </VerifyIcon>
                  </div>
                </div>
                <div className="downloadAppContainer">
                  <DownloadIcon onClick={downloadAppHandler}>
                    <FaArrowDown />
                  </DownloadIcon>
                  <p className="font-normal text-white border-b py-2 px-2	text-xs mb-3 border-#ededed font-roboto downloadText">
                    Download Payarena Mobile
                  </p>

                  <img src={people} alt="" className="w-55 people" />
                  <p className="text-center text-[0.5rem] mt-1 text-white font-thin min-16:text-[0.7rem] users">
                    Used by 1K+ users <br /> around the Africa.
                  </p>
                </div>
                <div className="downloadMobile" onClick={downloadAppHandler}>
                  <DownloadIcon>
                    <FaArrowDown />
                  </DownloadIcon>
                  <p className="font-normal text-white border-b py-2 px-2	text-xs mb-3 border-#ededed font-roboto downloadText">
                    Download Payarena Mobile
                  </p>

                  <img src={people} alt="" className="w-55 people" />
                  <p className="text-center text-[0.5rem] mt-1 text-white font-thin min-16:text-[0.7rem] users">
                    Used by 1K+ users <br /> around the Africa.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      )}
    </>
  );
};

export default Landing;
const Container = styled.section`
  position: relative;

  .contentContainer {
    width: 100%;
    max-width: 1600px;
    margin: 0 auto;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 100%;
    width: 100%;
    display: flex;
    align-items: flex-end;

    .content {
      .heroTextContainer {
        padding: 0 8rem;
        margin-bottom: 5rem;
        h1 {
          font-size: 3rem;
        }
        .revo {
          display: none;
        }
        /* .unveil {
        font-size: 1.7rem;
      } */
      }
      .actionsWrapper {
        display: flex;
        padding: 0 8rem;
        align-items: center;
        .actionContainer {
          display: flex;
          flex: 1;
          align-items: center;
          height: 170px;
          border-top-left-radius: 0.5rem;
          border-bottom-left-radius: 0.5rem;
          padding: 0 3rem;
          .actionTexts {
            flex: 0.5;
            .heading {
              font-weight: 600;
              color: #009bff;
              font-size: 1.4rem;
              margin-bottom: 1rem;
            }
            .empower {
              font-size: 0.8rem;
              /* width: 70%; */
            }
          }
          .buttonsWrapper {
            display: flex;
            flex: 1;
            gap: 3rem;
            justify-content: center;
          }
        }

        .downloadAppContainer {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background-color: #009bff;
          width: 250px;
          height: 200px;
          border-top-right-radius: 1rem;
          border-bottom-right-radius: 1rem;
          /* padding: rem 0; */
        }
        .downloadMobile {
          display: none;
        }
      }
    }
  }

  //Mobile View Responsiveness//////////
  @media screen and (max-width: 550px) {
    .contentContainer {
      top: 50%;
      align-items: center;
      display: block;

      .content {
        margin-top: 50%;
        position: relative;
        width: 100%;
        height: 50%;
        .heroTextContainer {
          padding: 0 1.5rem;
          margin-bottom: 2rem;

          h1 {
            font-size: 2rem;
          }
          .unveil {
            font-size: 1rem;
          }
          p {
            font-size: 0.8rem;
            line-height: 1.3;
          }
          .revo {
            display: block;
            visibility: hidden;
            line-height: 1.3;
          }
        }
        .actionsWrapper {
          /* display: none; */
          padding: 0 1rem;
          flex-direction: column;
          gap: 10px;
          /* position: absolute;
          width: 100%;
          bottom: 0; */
          .actionContainer {
            padding: 0rem;
            border-radius: 0.5rem;
            width: 100%;
            .actionTexts {
              display: none;
            }
            .buttonsWrapper {
              justify-content: space-around;
              padding: 0 20px;
              gap: 3px !important;
              .iconDivider {
                /* display: none; */
              }
            }
          }

          .downloadAppContainer {
            display: none;
          }
          .downloadMobile {
            background-color: #009bff;
            display: flex;
            height: 50px;
            flex-direction: row-reverse;
            align-items: center;
            justify-content: center;
            gap: 10px;
            width: 100%;
            border-radius: 10px;
            .downloadText {
              border: none;
              padding: 0;
              margin: 0;
            }
            .people {
              display: none;
            }
            .users {
              display: none;
            }
          }
        }
      }
    }
  }
  /////////////////////////////////////
  //Mini to Large Tablet View Responsiveness//////////
  @media screen and (min-width: 551px) and (max-width: 970px) {
    .contentContainer {
      margin: 0 auto;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      height: 100%;
      width: 100%;
      display: block;
      align-items: flex-end;

      .content {
        margin-top: 30%;
        /* width: 100%;
        height: 100%; */
        .heroTextContainer {
          padding: 0 1.5rem;
          margin-bottom: 2rem;

          h1 {
            font-size: 2.5rem;
          }
          .unveil {
            font-size: 1rem;
          }
          p {
            font-size: 0.8rem;
            line-height: 1.3;
          }
          .revo {
            display: block;
            visibility: hidden;
            line-height: 1.3;
          }
        }
        .actionsWrapper {
          /* display: none; */
          padding: 0 1rem;
          /* flex-direction: column; */
          gap: 0;
          .actionContainer {
            padding: 0rem;
            border-top-left-radius: 0.5rem;
            border-bottom-left-radius: 0.5rem;
            width: 100%;
            .actionTexts {
              display: none;
            }
            .buttonsWrapper {
              justify-content: center;
              padding: 0 20px;
              gap: 10%;
            }
          }

          .downloadAppContainer {
            display: flex;
          }
          .downloadMobile {
            display: none;
            background-color: #009bff;
            height: 80px;
            flex-direction: row-reverse;
            align-items: center;
            justify-content: center;
            gap: 10px;
            width: 100%;
            border-radius: 10px;
            .downloadText {
              border: none;
              padding: 0;
              margin: 0;
            }
            .people {
              display: none;
            }
            .users {
              display: none;
            }
          }
        }
      }
    }
  }
  /////////////////////////////////////
  //Mini to Large Screen View Responsiveness//////////
  @media screen and (min-width: 971px) and (max-width: 1200px) {
    .contentContainer {
      margin: 0 auto;
      position: absolute;
      top: 10%;
      left: 50%;
      transform: translate(-50%, -50%);
      height: 100%;
      width: 100%;
      display: block;
      align-items: flex-end;

      .content {
        /* width: 100%;
        height: 100%; */
        margin-top: 50%;

        .heroTextContainer {
          padding: 0 3rem;
          margin-bottom: 2rem;

          h1 {
            font-size: 2.5rem;
          }
          .unveil {
            font-size: 1rem;
          }
          p {
            font-size: 1rem;
            line-height: 1.3;
          }
          .revo {
            display: block;
            visibility: hidden;
            line-height: 1.3;
          }
        }
        .actionsWrapper {
          /* display: none; */
          padding: 0 3rem;
          /* flex-direction: column; */
          gap: 0;
          .actionContainer {
            padding: 0 2rem;
            border-top-left-radius: 0.5rem;
            border-bottom-left-radius: 0.5rem;
            width: 100%;
            .actionTexts {
              /* display: none; */
              .heading {
                font-weight: 600;
                color: #009bff;
                font-size: 1.2rem;
                margin-bottom: 1rem;
              }
              .empower {
                font-size: 0.7rem;
                /* width: 70%; */
              }
            }
            .buttonsWrapper {
              justify-content: center;
              padding: 0 20px;
              gap: 10%;
            }
          }

          .downloadAppContainer {
            display: flex;
          }
          .downloadMobile {
            display: none;
            background-color: #009bff;
            height: 80px;
            flex-direction: row-reverse;
            align-items: center;
            justify-content: center;
            gap: 10px;
            width: 100%;
            border-radius: 10px;
            .downloadText {
              border: none;
              padding: 0;
              margin: 0;
            }
            .people {
              display: none;
            }
            .users {
              display: none;
            }
          }
        }
      }
    }
  }
  /////////////////////////////////////

  @media screen and (min-width: 1610px) and (min-height: 890px) {
    .contentContainer {
      align-items: center;
      .content {
        .heroTextContainer {
        }
      }
    }
  }
  @media screen and (min-width: 2500px) and (min-height: 1300px) {
    .contentContainer {
      align-items: center;
      .content {
        .heroTextContainer {
          h1 {
            font-size: 6rem;
          }
        }
      }
    }
  }
`;

const VerifyIcon = styled.a`
  &:hover svg path {
    transition: all 0.2s ease-in-out;
    fill: #008d30;
  }
  @media screen and (max-width: 390px) {
    svg {
      width: 30px;
    }
  }
  @media screen and (min-width: 391px) and (max-width: 480px) {
    svg {
      width: 30px;
    }
  }
  @media screen and (min-width: 481px) and (max-width: 1020px) {
    svg {
      width: 30px;
    }
  }
  @media screen and (min-width: 1021px) and (max-width: 1280px) {
    svg {
      width: 40px;
    }
  }
`;
const ShopIcon = styled.a`
  &:hover svg path {
    transition: all 0.2s ease-in-out;
    fill: #f58220;
  }
  @media screen and (max-width: 390px) {
    svg {
      width: 30px;
    }
  }
  @media screen and (min-width: 391px) and (max-width: 480px) {
    svg {
      width: 30px;
    }
  }
  @media screen and (min-width: 481px) and (max-width: 1020px) {
    svg {
      width: 30px;
    }
  }
  @media screen and (min-width: 1021px) and (max-width: 1280px) {
    svg {
      width: 40px;
    }
  }
`;
const PayIcon = styled(Link)`
  &:hover svg path {
    transition: all 0.2s ease-in-out;
    fill: #009bff;
  }
  @media screen and (max-width: 390px) {
    svg {
      width: 30px;
    }
  }
  @media screen and (min-width: 391px) and (max-width: 480px) {
    svg {
      width: 30px;
    }
  }
  @media screen and (min-width: 481px) and (max-width: 1020px) {
    svg {
      width: 30px;
    }
  }
  @media screen and (min-width: 1021px) and (max-width: 1280px) {
    svg {
      width: 40px;
    }
  }
`;

const DownloadIcon = styled.div`
  display: flex;
  height: 55px;
  width: 55px;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 50%;
  background-color: #fff;
  transition: all 0.3s ease;
  cursor: pointer;

  svg {
    color: #009bff;
  }

  &:hover {
    background-color: transparent;
    border: 3px solid #fff;

    svg {
      color: #fff;
    }
  }
  @media screen and (max-width: 550px) {
    height: 20px;
    width: 20px;
  }
`;

// const DownloadSection = styled.div``;
