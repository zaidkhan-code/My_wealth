"use client";
import Image from "next/image";
import LoginLogo from "../../../../../public/Assets/user/darklogowithtext@2x.png";
import Logo from "../../../../../public/Assets/user/Logo.png";
import Button from "../../../../components/element/Button";
import { CiFileOn } from "react-icons/ci";
import Input from "../../../../components/element/Input";
import { useState } from "react";

const page = () => {
  const [inputDocument, setinputDocument] = useState();

  return (

    <div className="md:bg-[#F6F5F7] bg-white pt-3 pb-6 md:pb-14 md:pt-14 h-screen md:h-auto gap-5 flex-col justify-between md:justify-center flex md:items-center overflow-x-hidden">
      <div className="md:w-[520px] w-full text-center md:h-auto px-4 py-8 md:px-10 md:py-10 gap-10 md:gap-8 flex flex-col items-center md:rounded-[18px] bg-white md:border-[0.5px] md:border-gray-300">
        
        {/* Responsive Image Container */}
        <div className="w-full flex justify-center">
          <div className="w-full max-w-[150px] md:max-w-[200px] lg:max-w-[300px]">
            <Image
              src={LoginLogo.src}
              width={150}
              height={150}
              className="object-contain w-full h-auto"
              alt="Loginlogo"
            />
          </div>
        </div>

        <h5 className="md:text-[28px] text-black font-extrabold md:font-bold text-[20px] mx-auto">
          Upload your ID verification Document
        </h5>
        <p className="md:text-[12px] text-[10px] text-gray-700 leading-[20px] mx-auto font-medium max-w-[350px]">
          Accepted documents, passport, ID, and driving licences. Don’t worry, your data will be safe and private.
        </p>

        <div
          className="flex items-center w-full border border-gray-300 rounded-lg px-3 py-2 gap-2 cursor-pointer"
          onClick={() => document.getElementById("pdfInput")?.click()}
        >
          {/* File Icon in black */}
          <CiFileOn size={20} color="black" />

          {/* File name or default text */}
          <p className="text-sm text-gray-700 truncate">
            {inputDocument ? inputDocument.name : "image.pdf"}
          </p>

          {/* Hidden file input restricted to PDF */}
          <input
            type="file"
            accept=".pdf"
            className="hidden"
            id="pdfInput"
            onChange={(e) => {
              setinputDocument(e.target.files[0]);
            }}
          />
        </div>

        <Button text="Submit" className={`${inputDocument && "mt-12"}`} />
      </div>

      <p className="text-[10px] md:text-xs text-black text-center mt-4 w-full max-w-[270px] md:max-w-[368px] min-h-[26px] md:min-h-[38px] leading-relaxed mx-auto">
        This site is protected by Google's{" "}
        <a href="#" className="text-blue-600">
          Privacy Policy
        </a>{" "}
        and{" "}
        <a href="#" className="text-blue-600">
          Terms of Service
        </a>{" "}
        apply.
      </p>
    </div>
  );
};

export default page;
