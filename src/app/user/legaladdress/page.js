"use client";
import Image from "next/image";
import LoginLogo from "../../../../public/Assets/user/darklogowithtext.svg";
import Logo from "../../../../public/Assets/user/Logo.png";
import Button from "../../../components/element/Button";
import Input from "../../../components/element/Input";

const LegalAddressPage = () => {
  return (
    <div className="md:bg-[#F6F5F7] bg-white pt-3 pb-6 md:pb-14 md:pt-14  h-screen md:h-auto gap-5 flex-col justify-between  md:justify-center flex md:items-center overflow-x-hidden ">
      <div className="md:w-[520px] w-full text-center  md:h-auto px-4 py-8  md:px-10 md:py-10 gap-10 md:gap-8 flex flex-col items-center  md:rounded-[18px] bg-white md:border-[0.5px] md:border-gray-300">
        {/* Logo */}
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

        {/* Title */}
        <h5 className="text-[20px] md:text-[28px] font-bold text-black leading-[30px] ">
          What’s your legal address?
        </h5>

        {/* Description */}
        <p className="text-[13px] md:text-[15px]  text-gray-500 leading-[20px] font-medium text-center ">
          Enter the address in your National ID or residence permit. You’ll need
          to verify it later.
        </p>

        {/* Form Inputs */}
        <Input label="" placeholder="Address" />
        <Input label="" placeholder="City" />
        <div className="w-[100%] justify-between gap-10 flex flex-col md:flex-row">
          <Input label="" placeholder="Country" />
          <Input label="" placeholder="ZIP / Postal Code" />
        </div>
        {/* Continue Button */}
        <Button text="Continue" />
      </div>
      {/* Privacy Policy */}
      <p className=" text-[11px] md:text-[15px] font-medium max-w-[350px] mx-auto md:max-w-[380px] text-center md:hidden ">
        This site is protected by Google&apos;s{" "}
        <span className="text-blue-500">Privacy Policy</span> and{" "}
        <span className="text-blue-500">Term of service</span> Apply
      </p>
    </div>
  );
};

export default LegalAddressPage;
