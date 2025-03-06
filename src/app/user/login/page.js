import React from 'react'
import Image from "next/image";
import LoginLogo from "../../../../public/Assets/user/darklogowithtext@2x.png";
import Button from "../../../components/element/Button";
import Input from "../../../components/element/Input";
const LoginPage = () => {
  return (
    <div className="md:bg-[#F6F5F7] bg-white pt-3 pb-6 md:pb-14 md:pt-14  h-screen md:h-auto gap-5 flex-col justify-between  md:justify-center flex md:items-center overflow-x-hidden ">
      <div className="md:w-[520px] w-full text-center  md:h-auto px-4 py-8  md:px-10 md:py-10 gap-10 md:gap-8 flex flex-col items-center  md:rounded-[18px] bg-white md:border-[0.5px] md:border-gray-300">
        <div className="flex  flex-row gap-5">
          <Image
            width={150}
            className=" object-cover "
            src={LoginLogo}
            height={150}
            alt=""
          />
        
        </div>
       
  <Input
            label="Email or Mobile Number"
            placeholder="youremail@email.com"
          
            />
          <Input
            label="Password"
            placeholder="Password"
            type="password"
          />
       
        <div className="w-full">
          <Button
            text="Log In"
          />
        </div>
      </div>
      <p className=" text-[11px] md:text-[15px] font-medium max-w-[350px] mx-auto md:max-w-[380px] text-center text-black ">
        This site is protected by Google&apos;s{" "}
        <span className="text-blue-500">Privacy Policy</span> and{" "}
        <span className="text-blue-500">Term of service</span> Apply
      </p>
    </div>
  )
}

export default LoginPage