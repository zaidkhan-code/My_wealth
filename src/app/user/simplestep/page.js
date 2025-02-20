"use client";
import Image from "next/image";
import LoginLogo from "../../../../public/Assets/user/darklogowithtext.svg";
import Logo from "../../../../public/Assets/user/Logo.png";
import Button from "../../../components/element/Button";
import Input from "../../../components/element/Input";
import { FaCheck } from "react-icons/fa";

const Page = () => {
  return (
    <div className="md:bg-[#F6F5F7] bg-white min-h-screen flex flex-col  items-center text-center justify-between  md:justify-center px-4 py-9 md:px-4 md:py-4">
      <div className="w-full md:max-w-[450px] gap-6 md:gap-4 flex flex-col   bg-white md:p-8 md:rounded-[18px] md:shadow-md md:border md:border-gray-200 text-center">
        <div className="flex justify-center ">
          <Image
            src={Logo}
            width={44}
            height={44}
            className="block md:hidden"
            alt="MyWealth Logo"
          />

          <Image
            src={LoginLogo}
            width={120}
            height={40}
            className="hidden md:block"
            alt="MyWealth Logo"
          />
        </div>

        <h2 className="sm:text-[20px] md:text-[32px] font-bold text-gray-900  leading-snug text-center">
          2 simple steps
        </h2>

        <p className="text-[7px] md:text-[14px] text-black  w-full  md:max-w-[402px]  leading-relaxed">
          Only 3 minutes to verify your identity
        </p>

          <div className=" border border-gray-300 rounded-lg w-full  flex items-center px-4 py-2 ">
            <div className="bg-green-500 text-black rounded-full p-2 flex items-center justify-center">
              <FaCheck className="text-lg" />
            </div>

            <span className="ml-3 text-black whitespace-nowrap text-xs sm:text-sm md:text-base">
              Scan your ID or Passport
            </span>
          </div>

          <div className=" border border-gray-300 rounded-lg w-full flex items-center px-4 py-2 mx-auto">
            <div className="bg-green-500 text-black rounded-full p-2 flex items-center justify-center w-8 h-8">
              <span className="text-lg font-bold">2</span>
            </div>

            <span className="ml-3 text-black whitespace-nowrap text-xs sm:text-sm md:text-base">
              Residential address confirmation
            </span>
          </div>


        <div className=" mt-10 md:mt-6">
          <Button text="Submit" />
        </div>
      </div>

      <p className="text-[10px] md:text-xs  text-black text-center mt-4  w-full max-w-[270px] md:max-w-[368px] min-h-[26px] md:min-h-[38px] leading-relaxed">
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

export default Page;
