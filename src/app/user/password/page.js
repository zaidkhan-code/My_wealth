"use client";

import { useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import Image from "next/image";
import LoginLogo from "../../../../public/Assets/user/darklogowithtext@2x.png";
import Button from "../../../components/element/Button";
import Input from "../../../components/element/Input";
import Logo from "../../../../public/Assets/user/Logo.png";

const PasswordPage = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [validation, setValidation] = useState({
    length: false,
    uppercase: false,
    lowercase: false,
    digit: false,
    specialChar: false,
  });
  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setValidation({
      length: newPassword.length >= 8,
      uppercase: /[A-Z]/.test(newPassword),
      lowercase: /[a-z]/.test(newPassword),
      digit: /[0-9]/.test(newPassword),
      specialChar: /[\W_]/.test(newPassword),
    });
  };

  const getPasswordStrength = () => {
    const validCount = Object.values(validation).filter(Boolean).length;
    switch (validCount) {
      case 5:
        return "w-full bg-green-500";
      case 4:
        return "w-4/5 bg-blue-500";
      case 3:
        return "w-3/5 bg-yellow-500";
      case 2:
        return "w-2/5 bg-orange-500";
      case 1:
        return "w-1/5 bg-red-500";
      default:
        return "w-0 bg-gray-200";
    }
  };
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
          Choose your password.{" "}
        </h5>

        <div className="relative w-full mt-4 md:mt-6">
          <Input
            label=""
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            type={showPassword ? "text" : "password"}
          />
          <button
            type="button"
            className="absolute inset-y-0 right-3 flex items-center text-blue-600 hover:text-blue-800"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <IoEyeOutline size={20} />
            ) : (
              <IoEyeOffOutline size={20} />
            )}
          </button>
        </div>
        <div className="flex w-full flex-col items-start gap-1">
          <label className=" text-[13px] md:text-[15px] font-semibold text-gray-700">
            Strength
          </label>
          <div className="h-3 bg-gray-200 overflow-hidden w-full rounded">
            <div
              className={`h-full ${getPasswordStrength()} transition-all duration-300`}
            ></div>
          </div>
        </div>

        <p className="text-[13px] md:text-[15px]  mb-4 md:mb-6 text-gray-500 leading-[20px] font-medium text-center ">
          Password should be long enough, unique to you and difficult to other
          to guess.
        </p>
        <div className="w-full"><Button text="Continue" /></div>
        
      
      </div>
      <p className=" text-[11px] md:text-[15px] font-medium max-w-[350px] mx-auto md:max-w-[380px] text-center md:hidden ">
        This site is protected by Google&apos;s{" "}
        <span className="text-blue-500">Privacy Policy</span> and{" "}
        <span className="text-blue-500">Term of service</span> Apply
      </p>
    </div>
  );
};

export default PasswordPage;

