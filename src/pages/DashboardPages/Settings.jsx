import React, { useState } from "react";
import DashboardHeader from "../../components/DashboardHeader";
import NairaIcon from "../../assets/icons/dashboardIIcons/nairaIcon";
import NairaIcon2 from "../../assets/icons/dashboardIIcons/nairaIcon2";
import Card from "../../assets/images/card.png";
import MainSection from "../../components/MainSection";
import DataVendingModal from "../../modals/DataVendingModal";
import AirtimeVendingModal from "../../modals/AirtimeVendingModal";
import SendMoneyModal from "../../modals/SendMoneyModal";
import ScheduleTransferModal from "../../modals/ScheduleTransferModal";
import ProfileSettingsModal from "../../modals/ProfileSettings";
import { ArrowDownCircleIcon } from "@heroicons/react/24/solid";
import ArrowDownIcon from "../../icons/ArrowDown";
import Button from "../../components/bits/Button";
import ChangePasswordModal from "../../modals/ChangePasswordModal";
import ChangePinModal from "../../modals/ChangePinModal";
import ResetPinModal from "../../modals/ResetPinModal";
import TransactionNotificationsModal from "../../modals/TransactionNotificationsModal";

export default function SettingsPage() {
  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);
  const [modal4, setModal4] = useState(false);
  const [modal5, setModal5] = useState(false);
  const [modal6, setModal6] = useState(false);

  const [current, setCurrent] = useState("");

  return (
    <div>
      <DashboardHeader
        title="Settings"
        desc="Change settings based on your preference."
      />

      <ProfileSettingsModal
        modal={modal}
        closeModal={() => {
          setModal(false);
        }}
      />
      <ChangePasswordModal
        modal={modal2}
        closeModal={() => {
          setModal2(false);
        }}
      />
      <ChangePinModal
        modal={modal3}
        closeModal={() => {
          setModal3(false);
        }}
      />
      <ChangePinModal
        modal={modal4}
        closeModal={() => {
          setModal4(false);
        }}
      />
      <ResetPinModal
        modal={modal5}
        closeModal={() => {
          setModal5(false);
        }}
      />
      <TransactionNotificationsModal
        modal={modal6}
        closeModal={() => {
          setModal6(false);
        }}
      />

      <div className="bg-white border mt-4 border-[#F0F0F0] rounded-lg">
        <div>
          <div
            onClick={() => {
              setCurrent("profile");
            }}
            className="p-6 border-b border-[#F0F0F0] text-2xl flex justify-between items-center cursor-pointer"
          >
            <span>Profile</span> <ArrowDownIcon />
          </div>
          {current === "profile" && (
            <div className="p-6 border-b border-[#F0F0F0] grid grid-cols-2">
              <span className="text-lg">
                To update your profile, click the update button to proceed.
              </span>{" "}
              <Button
                text="UPDATE"
                background="#F58220"
                color="#ffffff"
                style={{ flexDirection: "row-reverse" }}
                height="50px"
                fontSize="13px"
                action={() => {
                  setModal(true);
                }}
              />{" "}
            </div>
          )}
        </div>
        <div>
          <div
            onClick={() => {
              setCurrent("password");
            }}
            className="p-6 border-b border-[#F0F0F0] text-2xl flex justify-between items-center cursor-pointer"
          >
            <span>Password</span> <ArrowDownIcon />
          </div>
          {current === "password" && (
            <div className="p-6 border-b border-[#F0F0F0] grid grid-cols-2">
              <span className="text-lg">
                To update your profile, click the update button to proceed.
              </span>{" "}
              <Button
                text="CHANGE PASSWORD"
                background="#F58220"
                color="#ffffff"
                style={{ flexDirection: "row-reverse" }}
                height="50px"
                fontSize="13px"
                action={() => {
                  setModal2(true);
                }}
              />{" "}
            </div>
          )}
        </div>
        <div>
          <div
            onClick={() => {
              setCurrent("card");
            }}
            className="p-6 border-b border-[#F0F0F0] text-2xl flex justify-between items-center cursor-pointer"
          >
            <span>Card Info</span> <ArrowDownIcon />
          </div>
          {current === "card" && (
            <div className="p-6 border-b border-[#F0F0F0] grid grid-cols-2">
              <span className="text-lg">
                To update your profile, click the update button to proceed.
              </span>{" "}
              <Button
                text="ADD CARD"
                background="#F58220"
                color="#ffffff"
                style={{ flexDirection: "row-reverse" }}
                height="50px"
                fontSize="13px"
                action={() => {
                  setModal(true);
                }}
              />{" "}
            </div>
          )}
        </div>

        <div>
          <div
            onClick={() => {
              setCurrent("pinChange");
            }}
            className="p-6 border-b border-[#F0F0F0] text-2xl flex justify-between items-center cursor-pointer"
          >
            <span>PIN Change</span> <ArrowDownIcon />
          </div>
          {current === "pinChange" && (
            <div className="p-6 border-b border-[#F0F0F0] grid grid-cols-2">
              <span className="text-lg">
                To update your profile, click the update button to proceed.
              </span>{" "}
              <Button
                text="CHANGE PIN"
                background="#F58220"
                color="#ffffff"
                style={{ flexDirection: "row-reverse" }}
                height="50px"
                fontSize="13px"
                action={() => {
                  setModal4(true);
                }}
              />{" "}
            </div>
          )}
        </div>

        <div>
          <div
            onClick={() => {
              setCurrent("pinReset");
            }}
            className="p-6 border-b border-[#F0F0F0] text-2xl flex justify-between items-center cursor-pointer"
          >
            <span>PIN Reset</span> <ArrowDownIcon />
          </div>
          {current === "pinReset" && (
            <div className="p-6 border-b border-[#F0F0F0] grid grid-cols-2">
              <span className="text-lg">
                To update your profile, click the update button to proceed.
              </span>{" "}
              <Button
                text="RESET PIN"
                background="#F58220"
                color="#ffffff"
                style={{ flexDirection: "row-reverse" }}
                height="50px"
                fontSize="13px"
                action={() => {
                  setModal5(true);
                }}
              />{" "}
            </div>
          )}
        </div>

        <div>
          <div
            onClick={() => {
              setCurrent("transactions");
            }}
            className="p-6 border-b border-[#F0F0F0] text-2xl flex justify-between items-center cursor-pointer"
          >
            <span>Transaction Notifications</span> <ArrowDownIcon />
          </div>
          {current === "transactions" && (
            <div className="p-6 border-b border-[#F0F0F0] grid grid-cols-2">
              <span className="text-lg">
                To update your profile, click the update button to proceed.
              </span>{" "}
              <Button
                text="GET STARTED"
                background="#F58220"
                color="#ffffff"
                style={{ flexDirection: "row-reverse" }}
                height="50px"
                fontSize="13px"
                action={() => {
                  setModal6(true);
                }}
              />{" "}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
