"use client";
import Image from "next/image";
// import LoginLogo from "../../../../public/Assets/user/darklogowithtext.";
import LoginLogo from "../../../../../public/Assets/user/darklogowithtext@2x.png";
import Logo from "../../../../../public/Assets/user/Logo.png";
import Button from "../../../../components/element/Button";
import { CiFileOn } from "react-icons/ci";

import Input from "../../../../components/element/Input";
import { useState } from "react";
const page = () => {
  const [inputDocument, setinputDocument] = useState();
  return (
    <div className="md:bg-[#F6F5F7] bg-white pt-3 pb-6 md:pb-14 md:pt-14  h-screen md:h-auto gap-5 flex-col justify-between  md:justify-center flex md:items-center overflow-x-hidden ">
      <div className="md:w-[520px] w-full text-center  md:h-auto px-4 py-8  md:px-10 md:py-10 gap-10 md:gap-8 flex flex-col items-center  md:rounded-[18px] bg-white md:border-[0.5px] md:border-gray-300">
        {" "}
        <Image
          src={LoginLogo.src}
          width={150}
          height={150}
          className="object-contain "
          alt="Loginlogo"
        />
        {/* <Image
          src={Logo.src}
          width={150}
          height={150}
          className="object-contain md:hidden block"
          alt="Loginlogo"
        /> */}
        <h5 className="md:text-[28px] font-extrabold md:font-bold text-[20px]   mx-auto ">
          Upload your ID verification Document
        </h5>
        <p className="md:text-[15px] text-[13px] text-gray-700 leading-[20px] mx-auto font-medium max-w-[350px]">
          Accepted document, password ID,and driving licences. Dont't Worry Your
          date well be safe and private
        </p>
        <div
          className={`w-full border cursor-pointer rounded-lg items-center  flex ${
            inputDocument ? "flex-row md:p-3 p-2 " : "flex-col  md:p-8 p-5 "
          }gap-5 `}
          onClick={() => document.getElementById("input")?.click()}
        >
          <CiFileOn size={35} />

          <p className="text-[14px] text-gray-500">
            {inputDocument
              ? inputDocument?.name
              : "Select the files. Supported files are PNG, JPG, PDF."}
          </p>
          <input
            type="file"
            className="hidden"
            id="input"
            onChange={(e) => {
              setinputDocument(e.target.files[0]);
            }}
          />
        </div>
        <Button text="Submit" className={`${inputDocument && "mt-12"}`} />
      </div>
      <p className=" text-[11px] md:text-[15px] font-medium max-w-[350px] mx-auto md:max-w-[380px] text-center ">
        This site is protected by Google's{" "}
        <span className="text-blue-500">Privacy Policy</span> and{" "}
        <span className="text-blue-500">Term of service</span> Apply
      </p>
    </div>
  );
};
export default page;
