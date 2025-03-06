"use client";
import React from "react";
import Image from "next/image";
import Header from "../../components/element/Header";
import Sidebar from "../../components/element/Sidebar";
import Walletcircle from "../../../public/Assets/user/WalletImg.png";
import EyeImg from "../../../public/Assets/user/Icon feather-eye.png";
import PlusIcon from "../../../public/Assets/user/Icon feather-plus.png";

export default function Page() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <div className="flex flex-col flex-1">
        <Header />

        <div className="p-10">
          {/* Wallet Heading */}
          <h2 className="text-lg font-semibold mt-8 sm:mt-14 text-blue-700 sm:ml-10 md:ml-[15%] lg:ml-[21%] sm:mr-10">
            Wallet
          </h2>

          {/* Wallet Container */}
          <div className="flex justify-center items-center mt-4">
            <div className="bg-white w-full h-[380px] max-w-[600px] sm:h-[350px] p-4 rounded-lg shadow-md">
              <div className="flex flex-col items-start sm:items-start">
                <p className="text-3xl font-bold text-[#5F6471]">$0.00</p>

                <div className="flex items-center mt-2">
                  <Image
                    src={EyeImg}
                    alt="Eye Icon"
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  <p className="text-gray-500 text-sm">Current balance</p>
                </div>
              </div>

              <div className="flex flex-col items-center mt-6">
                <Image src={Walletcircle} alt="Wallet" width={60} height={60} />

                <h3 className="mt-4 font-medium text-gray-700">
                  Get started invest
                </h3>
                <p className="text-sm text-gray-400">
                  Your assets will appear here.
                </p>

                <button
                  className="mt-14 bg-blue-600 text-white px-6 py-3 rounded-md flex items-center justify-center gap-2 text-sm font-medium shadow-md 
                  hover:bg-blue-700 w-full sm:w-auto md:w-80 sm:px-12"
                >
                  <Image
                    src={PlusIcon}
                    alt="Plus Icon"
                    width={16}
                    height={16}
                    className="mr-2"
                  />
                  <span className="text-white text-base">Deposit</span>
                </button>
              </div>
            </div>
          </div> 
        </div>
      </div>
    </div>
  );
}
