import React, { useState } from "react";
import line1 from "../assets/images/line1.png";
import line2 from "../assets/images/line2.png";
import line3 from "../assets/images/line3.png";
import { Link } from "react-router-dom";
import Button from "../components/bits/Button";
import Checkbox from "@mui/material/Checkbox";
import { orange } from "@mui/material/colors";
import { PiEye, PiEyeSlash } from "react-icons/pi";
import scan from "../assets/icons/scan.svg";

const ResetPassword = () => {
  const [resetData, setResetData] = useState({
    password: "",
    confirmPassword: "",
  });
  const [inputFocus, setInputFocus] = useState({
    passwordFocus: false,
    confirmPasswordFocus: false,
  });
  const [showPassword, setShowPassword] = useState({
    showPassword1: false,
    showPassword2: false,
  });
  const [labelStyle, setlabelStyle] = useState({
    passwordLabel: {
      position: "absolute",
      top: "25%",
      left: "1rem",
      fontSize: "16px",
      color: "#afb4c0",
      pointerEvents: "none",
      transition: "all 0.5s ease-in-out",
    },
    confirmPasswordLabel: {
      position: "absolute",
      top: "25%",
      left: "1rem",
      fontSize: "16px",
      color: "#afb4c0",
      pointerEvents: "none",
      transition: "all 0.5s ease-in-out",
    },
  });
  return (
    <div className="py-[9rem] mb-[20rem] sm:px-[1.5rem] sm:mb-[1rem] sm:py-0 sm:pt-[9rem]">
      {" "}
      <div className="bg-accent1 h-[26rem] max-h-[26rem] relative px-[8rem] md:px-[2rem] sm:hidden">
        <img
          src={line1}
          alt="line1"
          className="absolute left-0 opacity-[.7] h-[26rem]"
        />
        <img
          src={line2}
          alt="line2"
          className="absolute right-0 opacity-[.7] h-[26rem]"
        />
        <img
          src={line3}
          alt="line3"
          className="absolute right-0 bottom-0 opacity-[.7] h-[60%]"
        />
        <div className="flex flex-col justify-center h-[100%] w-full max-w-[1440px] mx-auto">
          <p className="text-white font-generalsans-regular mb-[1rem]">
            Sign into your
          </p>
          <h2 className="text-[2.5rem] leading-tight text-white font-roboto  md:text-[2rem]  min-16:text-[4rem]">
            Payarena Payment <br /> Account
          </h2>
          <p className="text-[.7rem] text-white mt-[1rem] min-16:text-[1.2rem]">
            Lorem Ipsum is simply dummy text of the printing <br /> and
            typesetting industry. Lorem Ipsum has been <br /> the industry's
            standard dummy text ever since <br /> the 1500s,
          </p>
        </div>
        <div className="bg-white absolute top-0 right-[8rem] py-[6rem] px-[3rem] border-b border-l border-r border-[#E3E3E3] rounded-b-[1rem] md:right-2 min-16:right-[20rem] min-imac:right-[46rem]">
          <h2 className="text-[1.8rem] leading-tight font-roboto-regular">
            Reset your <br /> Password Credential
          </h2>
          <p className="mt-[1rem] text-[#767E93]">
            Please enter your credential to log into your <br /> account.
          </p>

          <form className="mt-[1.5rem]">
            <div
              className="input-container"
              style={
                inputFocus.passwordFocus === true
                  ? { border: "1px solid #000000" }
                  : {}
              }
            >
              <input
                type={showPassword.showPassword1 ? "text" : "password"}
                name="password"
                value={resetData.password}
                onChange={(e) => {
                  setResetData((prev) => {
                    return { ...prev, password: e.target.value };
                  });
                }}
                onFocus={() => {
                  setInputFocus((prev) => {
                    return { ...prev, passwordFocus: true };
                  });
                  setlabelStyle((prev) => {
                    return {
                      ...prev,
                      passwordLabel: {
                        position: "absolute",
                        left: "1rem",
                        color: "#afb4c0",
                        pointerEvents: "none",
                        transition: "all 0.5s ease-in-out",
                        top: "0.2rem",
                        fontSize: "10px",
                      },
                    };
                  });
                }}
                onBlur={() => {
                  setInputFocus((prev) => {
                    return { ...prev, passwordFocus: false };
                  });
                  setlabelStyle((prev) => {
                    return {
                      ...prev,
                      passwordLabel: {
                        position: "absolute",
                        top: `${resetData.password ? "0.2rem" : "25%"}`,
                        left: "1rem",
                        fontSize: `${resetData.password ? "10px" : "16px"}`,
                        color: "#afb4c0",
                        pointerEvents: "none",
                        transition: "all 0.5s ease-in-out",
                      },
                    };
                  });
                }}
              />
              <label for="name" style={labelStyle.passwordLabel}>
                Password
              </label>
              {showPassword.showPassword1 ? (
                <PiEye
                  className="w-[20px] absolute right-[1rem] cursor-pointer z-[0]"
                  style={
                    inputFocus.passwordFocus === false
                      ? { opacity: "0.5" }
                      : { opacity: "1" }
                  }
                  onClick={() => {
                    setShowPassword((prev) => {
                      return { ...prev, showPassword1: false };
                    });
                  }}
                />
              ) : (
                <PiEyeSlash
                  className="w-[20px] absolute right-[1rem] cursor-pointer z-[0]"
                  style={
                    inputFocus.passwordFocus === false
                      ? { opacity: "0.5" }
                      : { opacity: "1" }
                  }
                  onClick={() => {
                    setShowPassword((prev) => {
                      return { ...prev, showPassword1: true };
                    });
                  }}
                />
              )}
            </div>
            <div
              className="input-container"
              style={
                inputFocus.confirmPasswordFocus === true
                  ? { border: "1px solid #000000" }
                  : {}
              }
            >
              <input
                type={showPassword.showPassword2 ? "text" : "password"}
                name="name"
                value={resetData.confirmPassword}
                onChange={(e) => {
                  setResetData((prev) => {
                    return { ...prev, confirmPassword: e.target.value };
                  });
                }}
                onFocus={() => {
                  setInputFocus((prev) => {
                    return { ...prev, confirmPasswordFocus: true };
                  });
                  setlabelStyle((prev) => {
                    return {
                      ...prev,
                      confirmPasswordLabel: {
                        position: "absolute",
                        left: "1rem",
                        color: "#afb4c0",
                        pointerEvents: "none",
                        transition: "all 0.5s ease-in-out",
                        top: "0.2rem",
                        fontSize: "10px",
                      },
                    };
                  });
                }}
                onBlur={() => {
                  setInputFocus((prev) => {
                    return { ...prev, confirmPasswordFocus: false };
                  });
                  setlabelStyle((prev) => {
                    return {
                      ...prev,
                      confirmPasswordLabel: {
                        position: "absolute",
                        top: `${resetData.confirmPassword ? "0.2rem" : "25%"}`,
                        left: "1rem",
                        fontSize: `${
                          resetData.confirmPassword ? "10px" : "16px"
                        }`,
                        color: "#afb4c0",
                        pointerEvents: "none",
                        transition: "all 0.5s ease-in-out",
                      },
                    };
                  });
                }}
              />
              <label for="name" style={labelStyle.confirmPasswordLabel}>
                Confirm Password
              </label>
              {showPassword.showPassword2 ? (
                <PiEye
                  className="w-[20px] absolute right-[1rem] cursor-pointer z-[0]"
                  style={
                    inputFocus.confirmPasswordFocus === false
                      ? { opacity: "0.5" }
                      : { opacity: "1" }
                  }
                  onClick={() => {
                    setShowPassword((prev) => {
                      return { ...prev, showPassword2: false };
                    });
                  }}
                />
              ) : (
                <PiEyeSlash
                  className="w-[20px] absolute right-[1rem] cursor-pointer z-[0]"
                  style={
                    inputFocus.confirmPasswordFocus === false
                      ? { opacity: "0.5" }
                      : { opacity: "1" }
                  }
                  onClick={() => {
                    setShowPassword((prev) => {
                      return { ...prev, showPassword2: true };
                    });
                  }}
                />
              )}
            </div>
            <Button
              text="Continue"
              background="#F58220"
              style={{
                marginTop: "3rem",
                borderRadius: "1rem",
                fontFamily: "GeneralSans-SemiBold",
              }}
              height="60px"
            />
            <p className="text-center mt-[0.8rem] text-[0.8rem]">
              Have an account?{" "}
              <Link to="/login">
                <span className="font-generalsans-semiBold text-accent1">
                  Login here.
                </span>
              </Link>
            </p>
          </form>
        </div>
      </div>
      <div className="bg-white p-[1rem] border border-[#E3E3E3] rounded-[1rem] md:right-2 min-16:right-[20rem] min-imac:right-[46rem] hidden sm:block">
        <h2 className="text-[1.3rem] leading-tight font-roboto-regular">
          Reset your Password Credential
        </h2>
        <p className="mt-[1rem] text-[#767E93] text-[0.8rem]">
          Please enter your credential to log into your <br /> account.
        </p>

        <form className="mt-[1.5rem]">
          <div
            className="input-container"
            style={
              inputFocus.passwordFocus === true
                ? { border: "1px solid #000000" }
                : {}
            }
          >
            <input
              type={showPassword.showPassword1 ? "text" : "password"}
              name="password"
              value={resetData.password}
              onChange={(e) => {
                setResetData((prev) => {
                  return { ...prev, password: e.target.value };
                });
              }}
              onFocus={() => {
                setInputFocus((prev) => {
                  return { ...prev, passwordFocus: true };
                });
                setlabelStyle((prev) => {
                  return {
                    ...prev,
                    passwordLabel: {
                      position: "absolute",
                      left: "1rem",
                      color: "#afb4c0",
                      pointerEvents: "none",
                      transition: "all 0.5s ease-in-out",
                      top: "0.2rem",
                      fontSize: "10px",
                    },
                  };
                });
              }}
              onBlur={() => {
                setInputFocus((prev) => {
                  return { ...prev, passwordFocus: false };
                });
                setlabelStyle((prev) => {
                  return {
                    ...prev,
                    passwordLabel: {
                      position: "absolute",
                      top: `${resetData.password ? "0.2rem" : "25%"}`,
                      left: "1rem",
                      fontSize: `${resetData.password ? "10px" : "16px"}`,
                      color: "#afb4c0",
                      pointerEvents: "none",
                      transition: "all 0.5s ease-in-out",
                    },
                  };
                });
              }}
            />
            <label for="name" style={labelStyle.passwordLabel}>
              Password
            </label>
            {showPassword.showPassword1 ? (
              <PiEye
                className="w-[20px] absolute right-[1rem] cursor-pointer z-[0]"
                style={
                  inputFocus.passwordFocus === false
                    ? { opacity: "0.5" }
                    : { opacity: "1" }
                }
                onClick={() => {
                  setShowPassword((prev) => {
                    return { ...prev, showPassword1: false };
                  });
                }}
              />
            ) : (
              <PiEyeSlash
                className="w-[20px] absolute right-[1rem] cursor-pointer z-[0]"
                style={
                  inputFocus.passwordFocus === false
                    ? { opacity: "0.5" }
                    : { opacity: "1" }
                }
                onClick={() => {
                  setShowPassword((prev) => {
                    return { ...prev, showPassword1: true };
                  });
                }}
              />
            )}
          </div>
          <div
            className="input-container"
            style={
              inputFocus.confirmPasswordFocus === true
                ? { border: "1px solid #000000" }
                : {}
            }
          >
            <input
              type={showPassword.showPassword2 ? "text" : "password"}
              name="name"
              value={resetData.confirmPassword}
              onChange={(e) => {
                setResetData((prev) => {
                  return { ...prev, confirmPassword: e.target.value };
                });
              }}
              onFocus={() => {
                setInputFocus((prev) => {
                  return { ...prev, confirmPasswordFocus: true };
                });
                setlabelStyle((prev) => {
                  return {
                    ...prev,
                    confirmPasswordLabel: {
                      position: "absolute",
                      left: "1rem",
                      color: "#afb4c0",
                      pointerEvents: "none",
                      transition: "all 0.5s ease-in-out",
                      top: "0.2rem",
                      fontSize: "10px",
                    },
                  };
                });
              }}
              onBlur={() => {
                setInputFocus((prev) => {
                  return { ...prev, confirmPasswordFocus: false };
                });
                setlabelStyle((prev) => {
                  return {
                    ...prev,
                    confirmPasswordLabel: {
                      position: "absolute",
                      top: `${resetData.confirmPassword ? "0.2rem" : "25%"}`,
                      left: "1rem",
                      fontSize: `${
                        resetData.confirmPassword ? "10px" : "16px"
                      }`,
                      color: "#afb4c0",
                      pointerEvents: "none",
                      transition: "all 0.5s ease-in-out",
                    },
                  };
                });
              }}
            />
            <label for="name" style={labelStyle.confirmPasswordLabel}>
              Confirm Password
            </label>
            {showPassword.showPassword2 ? (
              <PiEye
                className="w-[20px] absolute right-[1rem] cursor-pointer z-[0]"
                style={
                  inputFocus.confirmPasswordFocus === false
                    ? { opacity: "0.5" }
                    : { opacity: "1" }
                }
                onClick={() => {
                  setShowPassword((prev) => {
                    return { ...prev, showPassword2: false };
                  });
                }}
              />
            ) : (
              <PiEyeSlash
                className="w-[20px] absolute right-[1rem] cursor-pointer z-[0]"
                style={
                  inputFocus.confirmPasswordFocus === false
                    ? { opacity: "0.5" }
                    : { opacity: "1" }
                }
                onClick={() => {
                  setShowPassword((prev) => {
                    return { ...prev, showPassword2: true };
                  });
                }}
              />
            )}
          </div>
          <Button
            text="Continue"
            background="#F58220"
            style={{
              marginTop: "3rem",
              borderRadius: "1rem",
              fontFamily: "GeneralSans-SemiBold",
            }}
            height="60px"
          />
          <p className="text-center mt-[0.8rem] text-[0.8rem]">
            Have an account?{" "}
            <Link to="/login">
              <span className="font-generalsans-semiBold text-accent1">
                Login here.
              </span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
