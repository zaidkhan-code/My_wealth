"use client";

import Image from "next/image";
// import LoginLogo from "../../../../public/Assets/user/darklogowithtext.";
import LoginLogo from "../../../../public/Assets/user/darklogowithtext@2x.png";
import { FaCheck } from "react-icons/fa6";
const page = () => {
  return (
    <div className="md:bg-[#F6F5F7] bg-white pt-7 pb-7 md:pb-10 md:pt-20   h-screen md:h-screen gap-16 flex-col justify-between  md:justify-center flex md:items-center overflow-x-hidden ">
      <div className="md:w-[520px] w-full text-center  md:h-auto px-4 py-10  md:px-10 md:py-10 gap-8  md:gap-20 flex flex-col  items-center  md:rounded-[18px] bg-white md:border-[0.5px] md:border-gray-300">
        {" "}
        <Image
          src={LoginLogo.src}
          width={150}
          height={150}
          className="object-contain "
          alt="Loginlogo"
        />
        <div className=" mt-[20vh] md:mt-0 border border-[#41cc8e] text-[#41cc8e] text-[40px] rounded-full p-3">
          {" "}
          <FaCheck />
        </div>
        <h5 className="md:text-[28px] font-extrabold md:font-bold text-[20px]   mx-auto ">
          Your account is approved
        </h5>
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
