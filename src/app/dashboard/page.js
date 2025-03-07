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
    
    <div className="flex min-h-screen bg-gray-100 w-full h-[552px] sm:w-auto sm:h-auto">
      <Sidebar />

      <div className="flex flex-col flex-1">
        <Header />

        <div className="p-6 ">
          {/* Wallet Heading */}
          <h2 className="text-lg font-semibold mt-14 sm:mt-14 md:mt-20 text-[#0068B7] ml-1 sm:ml-2 sm:mr-auto lg:ml-[22%]">
            Wallet
          </h2>

          {/* Wallet Container */}
          <div className="flex sm:justify-center mt-4">
            <div className="bg-white w-full h-[402px] max-w-[605px]  p-4 pr-2 rounded-lg shadow-md s sm:ml-auto sm:mr-auto">
              <div className="flex flex-col items-start">
                <p className="text-34px md:text-30px font-bold text-black">$0.00</p>

                <div className="flex items-center mt-2">
  <Image
    src={EyeImg}
    alt="Eye Icon"
    width={20} // Default for mobile
    height={20} // Default for mobile
    className="w-3 h-3  mr-2"
  />
  <p className="text-gray-500 text-xs sm:text-sm gap-4">Current balance</p>
</div>
</div>

              <div className="flex flex-col items-center mt-10 md:mt-4">
                <Image src={Walletcircle} alt="Wallet" width={90} height={90} />

                <h3 className="mt-8 font-medium text-black text-18px">
                  Get started invest
                </h3>
                <p className="text-sm text-[#878787]">
                  Your assets will appear here.
                </p>

                <button
                  className="mt-16 bg-[#115FBD] text-white px-6 py-3 rounded-md flex items-center justify-center gap-2 text-sm font-medium shadow-md 
                  hover:bg-blue-700 w-full sm:w-auto md:w-64 sm:px-12"
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
