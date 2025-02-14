"use client";
import Image from "next/image";
import LoginLogo from "../../../../public/Assets/user/darklogowithtext.svg";
import Button from "../../../components/element/Button";
import Input from "../../../components/element/Input";
const page = () => {
  return (
    <div className="bg-[#F6F5F7] py-8 gap-5 flex-col  justify-center flex items-center overflow-x-hidden ">
      <div className="w-[520px] text-center  px-10 py-10 gap-4 flex flex-col items-center  rounded-[18px] bg-white border-[0.5px] border-gray-300">
        {" "}
        <Image
          src={LoginLogo.src}
          width={150}
          height={150}
          className="object-contain"
          alt="Loginlogo"
        />
        <h5 className="text-[28px] font-bold leading-[30px] ">
          Personal Information.
        </h5>
        <p className="text-[15px] text-gray-700 leading-[20px] font-medium max-w-[350px]">
          Make sure this the same Information as on your passport or ID,so we
          can verify it later on
        </p>
        <div className="w-[100%] justify-between mt-3 gap-3 flex ">
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
        <Input label="Email Addres" placeholder="john@gmail.com" type="email" />
        <Button text="Continue" />
      </div>
      <p className="text-[15px] font-medium max-w-[380px] text-center">
        This site is protected by Google's{" "}
        <span className="text-blue-500">Privacy Policy</span> and{" "}
        <span className="text-blue-500">Term of service</span> Apply
      </p>
    </div>
  );
};
export default page;
