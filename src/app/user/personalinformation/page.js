"use client";
import Image from "next/image";
import LoginLogo from "../../../../public/Assets/user/darklogowithtext.svg";
import Button from "../../../components/element/Button";
import Input from "../../../components/element/Input";
import Logo from "../../../../public/Assets/user/Logo.png";

const page = () => {
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
        <h5 className="text-[20px] md:text-[28px] font-bold text-black leading-[30px] ">
          Personal Information.
        </h5>
        <p className="text-[13px] md:text-[15px] text-gray-500 leading-[20px] mx-auto font-medium max-w-[350px]">
          Make sure this the same Information as on your passport or ID,so we
          can verify it later on
        </p>
        <div className="w-[100%] justify-between gap-10 flex flex-col md:flex-row">
          <Input label="First name" placeholder="Enter your first name" />
          <Input label="Last name" placeholder="Enter your last name" />
        </div>
        <Input label="DOB" placeholder="1992/12/23" />
        <Input
          label="Mubile Number"
          placeholder="+917 566 4567"
          type="number"
          className="appearance-none"
        />
        <Input label="Email Address" placeholder="john@gmail.com" type="email" />
        <Button text="Continue" />
      </div>
      <p className=" text-[11px] md:text-[15px] font-medium max-w-[350px] mx-auto md:max-w-[380px] text-center md:hidden ">
        This site is protected by Google&apos;s{" "}
        <span className="text-blue-500">Privacy Policy</span> and{" "}
        <span className="text-blue-500">Term of service</span> Apply
      </p>
    </div>
  );
};
export default page;
