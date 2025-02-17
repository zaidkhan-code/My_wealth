"use client"; // Ensures client-side rendering in Next.js (App Router)

import Image from "next/image";
import LoginLogo from "../../public/Assets/user/darklogowithtext@2x.png";
import Button from "../components/element/Button";
import Input from "../components/element/Input";
import LikeImg from "../../public/Assets/user/thumb-up-icn(1).svg";

export default function Home() {
  return (
    <div className="bg-[#F6F5F7] w-full py-8 flex flex-col justify-center items-center min-h-screen overflow-x-hidden px-4">
      <div className="w-full max-w-[90%] sm:max-w-[520px] text-center px-6 py-10 gap-4 flex flex-col items-center rounded-[18px] bg-white border-[0.5px] border-gray-300 shadow-md">
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 items-center">
          <h5 className="text-[22px] sm:text-[28px] font-bold leading-[28px] sm:leading-[30px]">
            Register in
          </h5>
          <Image
            width={100}
            className="object-cover"
            src={LoginLogo}
            height={100}
            alt="MyWealth Logo"
          />
        </div>
        <p className="text-[14px] sm:text-[15px] mt-3 sm:mt-6 text-gray-700 leading-[20px] font-medium text-wrap balance">
          The fastest-growing Investment and wealth management company
        </p>
        <div className="flex gap-2 items-center mt-2">
          <Image width={18} height={18} alt="Like Icon" src={LikeImg} />
          <p className="text-[12px] sm:text-[14px] font-medium text-gray-500">
            +10,000 users trust us
          </p>
        </div>
        <Input label="Referral Code" placeholder="REFFERAL01MCO" className="w-full" />
        <div className="flex flex-col gap-2 w-full mt-4">
          <Button text="Skip" Theme="light" className="w-full" />
          <Button text="Continue" className="w-full" />
        </div>
        <p className="text-[10px] sm:text-[12px] text-gray-500 mt-4">
          This site is protected by Google's <a href="#" className="text-blue-500">Privacy Policy</a> and <a href="#" className="text-blue-500">Terms of Service</a>.
        </p>
      </div>
    </div>
  );
}
