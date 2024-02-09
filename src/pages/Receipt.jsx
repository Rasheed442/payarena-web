import React, { useEffect, useRef, useState } from "react";
import cloud from "../assets/icons/cloud.svg";
import { useDispatch, useSelector } from "react-redux";
import { receiptActions } from "../store/services/catalog/receipt.service";
import { getReceipt } from "../store/api/catalog/receipt";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const Receipt = () => {
  const transactionId = window.location.search.split("&")[0].split("=")[1];
  const myElementRef = useRef(null);
  const [invoice, setInvoice] = useState(null);
  const dispatch = useDispatch();
  const [pdfLoading, setPdfLoading] = useState(false);

  useEffect(() => {
    setInvoice(myElementRef.current);
  }, [myElementRef.current]);

  useEffect(() => {
    dispatch(getReceipt(transactionId));
  }, [dispatch]);

  const { data: receipt, loading } = useSelector((state) => state.receipt);

  const convertedObject = {};

  receipt?.Data?.forEach((item) => {
    convertedObject[item.Key] = item.Value;
  });

  const modifiedReceipt = {};

  for (const key in convertedObject) {
    if (Object.prototype.hasOwnProperty.call(convertedObject, key)) {
      let modifiedKey = key.toLowerCase();

      // Check if the key has a space
      if (modifiedKey.includes(" ")) {
        const words = modifiedKey.split(" ");
        modifiedKey =
          words.shift() +
          words
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join("");
      }

      modifiedReceipt[modifiedKey] = convertedObject[key];
    }
  }

  const pdfDownloadHandler = () => {
    const capture = myElementRef.current;
    setPdfLoading(true);
    html2canvas(capture).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4", true);
      const componentWidth = pdf.internal.pageSize.getWidth();
      const componentHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(
        componentWidth / imgWidth,
        componentHeight / imgHeight
      );
      const imgX = (componentWidth - imgWidth * ratio) / 2;
      const imgY = (componentHeight - imgHeight * ratio) / 2;
      pdf.addImage(
        imgData,
        "PNG",
        imgX,
        imgY,
        imgWidth * ratio,
        imgHeight * ratio
      );
      setPdfLoading(false);
      pdf.save("receipt.pdf");
    });
  };

  return (
    <section className="w-full max-w-[1440px] mx-auto relative">
      {loading ? (
        <Loader />
      ) : (
        <>
          {receipt?.Success === false ? (
            <div className="px-[9rem] md:px-[1.5rem]">
              <div className="pt-[10rem] md:pt-[8rem]">
                <div className="flex justify-center items-center mt-[2rem]">
                  <p className="text-[1.2rem]">
                    Return to{" "}
                    <Link
                      to="/payment/airtime-recharge"
                      className="text-accent1"
                    >
                      Payment Page
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div
              className="px-[9rem] md:px-[1.5rem] receipt-page"
              ref={myElementRef}
            >
              <h2 className="font-roboto text-[#242331] text-[2rem] text-center pt-[10rem] md:pt-[8rem] md:text-[2rem]">
                Transasction Receipt
              </h2>{" "}
              <div className="flex justify-center items-center mt-[2rem]">
                <div
                  className="w-[500px] border-dashed border-2 border-[#bcbbbb] p-[2rem]"
                  id="document_to_print"
                >
                  <span className="flex justify-between items-center border-b border-[#c0c0c0] py-4">
                    <p className="text-[#808080] font-medium font-sans">
                      Order ID:
                    </p>
                    <p className="text-[#3d3d3d] font-medium font-sans">
                      {modifiedReceipt?.orderId}
                    </p>
                  </span>
                  <span className="flex justify-between items-center border-b border-[#c0c0c0] py-4">
                    <p className="text-[#808080] font-medium font-sans">
                      Transaction ID:
                    </p>
                    <p className="text-[#3d3d3d] font-medium font-sans">
                      {modifiedReceipt?.transactionId}
                    </p>
                  </span>
                  <span className="flex justify-between items-center border-b border-[#c0c0c0] py-4">
                    <p className="text-[#808080] font-medium font-sans">
                      Amount:
                    </p>
                    <p className="text-[#3d3d3d] font-medium font-sans">
                      ₦{modifiedReceipt?.amount}
                    </p>
                  </span>
                  <span className="flex justify-between items-center border-b border-[#c0c0c0] py-4">
                    <p className="text-[#808080] font-medium font-sans">
                      Description:
                    </p>
                    <p className="text-[#3d3d3d] font-medium font-sans w-[180px] text-right">
                      {modifiedReceipt?.description}{" "}
                    </p>
                  </span>
                  <span className="flex justify-between items-center border-b border-[#c0c0c0] py-4">
                    <p className="text-[#808080] font-medium font-sans">
                      Convenience Fee:
                    </p>
                    <p className="text-[#3d3d3d] font-medium font-sans">
                      {modifiedReceipt?.convenienceFee}
                    </p>
                  </span>
                  <span className="flex justify-between items-center border-b border-[#c0c0c0] py-4">
                    <p className="text-[#808080] font-medium font-sans">
                      Currency:
                    </p>
                    <p className="text-[#3d3d3d] font-medium font-sans">
                      {modifiedReceipt?.currency}
                    </p>
                  </span>
                  <span className="flex justify-between items-center border-b border-[#c0c0c0] py-4">
                    <p className="text-[#808080] font-medium font-sans">
                      Phone Number:
                    </p>
                    <p className="text-[#3d3d3d] font-medium font-sans">
                      {modifiedReceipt?.phoneNumber}
                    </p>
                  </span>
                  <span className="flex justify-between items-center border-b border-[#c0c0c0] py-4">
                    <p className="text-[#808080] font-medium font-sans">
                      Status:
                    </p>
                    <p
                      className={
                        modifiedReceipt?.status !== "APPROVED"
                          ? "text-[#ff4747] font-medium font-sans"
                          : "text-[#328B2B] font-medium font-sans"
                      }
                    >
                      {modifiedReceipt?.status}
                    </p>
                  </span>
                  <span className="flex justify-between items-center  border-[#c0c0c0] py-4">
                    <p className="text-[#808080] font-medium font-sans">
                      Transaction Date:
                    </p>
                    <p className="text-[#3d3d3d] font-medium font-sans">
                      {modifiedReceipt?.date}{" "}
                    </p>
                  </span>
                  <span className="flex items-center gap-7">
                    <button className="bg-transparent border text-accent1 w-full h-[40px] rounded-lg text-[13px] mt-[1.5rem] flex justify-center items-center gap-3 cursor-pointer first-letter:8765431">
                      <Link to="/payment/airtime-recharge">
                        Return to payment
                      </Link>
                    </button>
                    <button
                      className="bg-accent1 text-white w-full h-[40px] rounded-lg text-[13px] mt-[1.5rem] flex justify-center items-center gap-3 cursor-pointer first-letter:8765431"
                      onClick={pdfDownloadHandler}
                      disabled={!(pdfLoading === false)}
                    >
                      <img src={cloud} className="w-[20px]" alt="" />
                      {pdfLoading ? "Downloading..." : "Download"}
                    </button>
                  </span>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </section>
  );
};

export default Receipt;
