"use client";
import Button from "@/components/element/Button";
import Image from "next/image";
import LoginLogo from "../../../../public/Assets/user/darklogowithtext@2x.png";
import React from "react";

const OfficialPage = () => {
 
  return (
    <div className="bg-[#F6F5F7] w-full py-6 sm:py-8 gap-6 flex-col min-h-screen justify-center flex items-center overflow-x-hidden">
      <div className="w-[90%] sm:w-[520px] max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl text-center px-6 sm:px-10 py-8 sm:py-10 gap-4 flex flex-col items-center  rounded-[18px] bg-white border-[0.5px] border-gray-300 ">
        <div className="flex  flex-row gap-5">
          <Image
            width={150}
            className=" object-cover "
            src={LoginLogo}
            height={150}
            alt=""
          />
        </div>
        <h5 className="text-[20px] sm:text-[28px] font-bold text-black leading-[30px] ">
          Let&apos;s make it official.{" "}
        </h5>
        <p className="text-[13px] sm:text-[15px]  mb-4 sm:mb-6 text-gray-500 leading-[20px] font-medium text-center ">
          To create your mywealth account, please agree to the Terms &
          Conditions.
        </p>{" "}
        <div className="flex flex-col items-center justify-center p-6">
          <div className="w-full max-w-sm ">
            {[
              { label: "Terms and Conditions", name: "terms", link: "#" },
              { label: "Privacy Policy", name: "privacy", link: "#" },
              { label: "Refund Policy", name: "refund", link: "#" },
            ].map((item) => (
              <div key={item.name} className="flex items-center gap-2 mb-4">
                <input
                  type="checkbox"
                  name={item.name}
                  className="w-4 h-4 accent-blue-600 cursor-pointer"
                />
                <a href={item.link} className="underline text-sm  text-gray-400 leading-[20px] font-medium text-center">
                  {item.label}
                </a>
              </div>
            ))}
          </div>
        </div>
        <p className="text-[13px] sm:text-[15px]  mb-4 sm:mb-6 text-gray-500 leading-[20px] font-medium text-center ">
          By tapping Create an account and using MyWealth, you agree to our
          Terms of Use and Privacy Statement.
        </p>
        <div className="w-full mb-8 sm:mb-6">
          <Button text="Continue" />
        </div>
        <p className="text-[11px] sm:hidden mb-6 mt-4 text-gray-900 leading-[20px] font-medium text-center ">
          This site is protected by Google&apos;s{" "}
          <a href="#" className="text-blue-600">
            Privacy Policy
          </a>{" "}
          and{" "}
          <a href="#" className="text-blue-600">
            Terms of Service
          </a>{" "}
          apply
        </p>
      </div>
    </div>
  );
};

export default OfficialPage;
