"use client";

import { useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import Image from "next/image";
import LoginLogo from "../../../../public/Assets/user/darklogowithtext@2x.png";
import Button from "../../../components/element/Button";
import Input from "../../../components/element/Input";
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
          Choose your password.{" "}
        </h5>

        <div className="relative w-full mt-4 sm:mt-6">
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
          <label className=" text-[13px] sm:text-[18px] font-semibold text-gray-700">
            Strength
          </label>
          <div className="h-3 bg-gray-200 overflow-hidden w-full rounded">
            <div
              className={`h-full ${getPasswordStrength()} transition-all duration-300`}
            ></div>
          </div>
        </div>

        <p className="text-[11px] sm:text-[15px]  mb-4 sm:mb-6 text-gray-500 leading-[20px] font-medium text-center ">
          Password should be long enough, unique to you and difficult to other
          to guess.
        </p>
        <div className="w-full mb-10 sm:mb-6"><Button text="Continue" /></div>
        
        <p className="text-[11px] sm:hidden mt-4 text-gray-900 leading-[20px] font-medium text-center ">
         This site is protected by Google&apos;s <a href="#" className="text-blue-600">Privacy Policy</a> and <a href="#" className="text-blue-600">Terms of Service</a> apply
        </p>
      </div>
    </div>
  );
};

export default PasswordPage;

