"use client";
import Image from "next/image";
import LoginLogo from "../../../../public/Assets/user/darklogowithtext.svg";
import Logo from "../../../../public/Assets/user/Logo.png";
import Button from "../../../components/element/Button";
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { Bs1CircleFill, Bs2CircleFill } from "react-icons/bs";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const [stepCompleted, setStepCompleted] = useState({
    idScan: false,
    addressConfirmation: false,
  });

  const toggleStep = (step) => {
    setStepCompleted((prev) => ({
      ...prev,
      [step]: !prev[step],
    }));
  };
  return (
    <div className="md:bg-[#F6F5F7] bg-white pt-3 pb-6 md:pb-14 md:pt-14  h-screen md:h-auto gap-5 flex-col justify-between  md:justify-center flex md:items-center overflow-hidden ">
      <div className="md:w-[520px] w-full text-center  md:h-auto px-4 py-8  md:px-10 md:py-10 gap-8 flex flex-col items-center  md:rounded-[18px] bg-white md:border-[0.5px] md:border-gray-300">
        <div className="flex  flex-row gap-5">
          <Image
            width={150}
            className="object-cover hidden md:block"
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

        <h5 className="text-[20px] md:text-[28px] font-bold text-black leading-[30px] ">
          2 simple steps
        </h5>

        <p className="text-[13px] md:text-[15px] text-black leading-[20px] font-medium text-center">
          Only 3 minutes to verify your identity
        </p>

        <div className="mt-6 space-y-4 w-full">
          <button
            onClick={() => {
              router.push("/user/document/idverification");
            }}
            className="flex items-center gap-4 w-full px-4 py-3 border rounded-md text-gray-950  border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
          >
            {" "}
            <FaCheckCircle className="text-green-500 text-xl" fill="black" />
            {/* <Bs1CircleFill className="text-blue-700 text-xl" /> */}
            <span>Scan your ID or Passport</span>
          </button>

          <button
            onClick={() => toggleStep("addressConfirmation")}
            className="flex items-center gap-4 w-full px-4 py-3 border rounded-md text-gray-950 border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
          >
            {stepCompleted.addressConfirmation ? (
              <FaCheckCircle className="text-green-500 text-xl" />
            ) : (
              <Bs2CircleFill className="text-blue-700 text-xl" />
            )}
            <span>Residential address confirmation</span>
          </button>
        </div>
        <div className="mt-6 w-full">
          <Button text="Submit" className="w-full" />
        </div>
      </div>

      <p className=" text-[11px] md:text-[15px] font-medium max-w-[350px] mx-auto md:max-w-[380px] text-center text-black">
        This site is protected by Google&apos;s{" "}
        <span className="text-blue-500">Privacy Policy</span> and{" "}
        <span className="text-blue-500">Term of service</span> Apply
      </p>
    </div>
  );
};

export default Page;
