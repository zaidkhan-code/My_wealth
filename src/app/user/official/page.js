"use client";
import Button from "@/components/element/Button";
import Image from "next/image";
import LoginLogo from "../../../../public/Assets/user/darklogowithtext@2x.png";
import React from "react";
import Logo from "../../../../public/Assets/user/Logo.png";

const OfficialPage = () => {
 
  return (
    <div className="md:bg-[#F6F5F7] bg-white pt-3 pb-6 md:pb-14 md:pt-14  h-screen md:h-auto gap-5 flex-col justify-between  md:justify-center flex md:items-center overflow-x-hidden ">
      <div className="md:w-[520px] w-full text-center  md:h-auto px-4 py-8  md:px-10 md:py-10 gap-10 md:gap-8 flex flex-col items-center  md:rounded-[18px] bg-white md:border-[0.5px] md:border-gray-300">
      <div className="flex  flex-row gap-5">
          <Image
            width={150}
            className=" object-cover hidden md:block"
            src={LoginLogo}
            height={150}
            alt=""
            
          />
            <Image
            src={Logo}
            width={44}
            height={44}
            className="block md:hidden"
            alt="MyWealth Logo"
          />
        </div>
        <h5 className="text-[20px] sm:text-[28px] font-bold text-black leading-[30px] ">
          Let&apos;s make it official.{" "}
        </h5>
        <p className="text-[13px] md:text-[15px] text-gray-500 leading-[20px] font-medium text-center ">
          To create your mywealth account, please agree to the Terms &
          Conditions.
        </p>{" "}
        <div className="flex flex-col items-center justify-center p-2 md:p-6">
          <div className="w-full max-w-sm">
            {[
              { label: "Terms and Conditions", name: "terms", link: "#" },
              { label: "Privacy Policy", name: "privacy", link: "#" },
              { label: "Refund Policy", name: "refund", link: "#" },
            ].map((item) => (
              <div key={item.name} className="flex items-center gap-2 mb-4">
                <input
                  type="checkbox"
                  name={item.name}
                  className="w-4 h-4 accent-blue-800 cursor-pointer"
                />
                <a href={item.link} className="underline text-[13px] md:text-[15px]  text-gray-500 leading-[20px] font-semibold text-center">
                  {item.label}
                </a>
              </div>
            ))}
          </div>
        </div>
        <p className="text-[13px] md:text-[15px] mb-4 md:mb-6 text-gray-500 leading-[20px] font-semibold text-center ">
          By tapping Create an account and using MyWealth, you agree to our
          Terms of Use and Privacy Statement.
        </p>
        <div className="w-full">
          <Button text="Continue" />
        </div>
    
      </div>
      <p className=" text-[11px] md:text-[15px] font-medium max-w-[350px] mx-auto md:max-w-[380px] text-center md:hidden ">
        This site is protected by Google&apos;s{" "}
        <span className="text-blue-500">Privacy Policy</span> and{" "}
        <span className="text-blue-500">Term of service</span> Apply
      </p>
    </div>
  );
};

export default OfficialPage;
