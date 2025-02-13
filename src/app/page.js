"use client";
import useApi from "../util/useApi";
import { useEffect } from "react";
import Image from "next/image";
import LoginLogo from "../../public/Assets/user/darklogowithtext@2x.png";
import Button from "../components/element/Button";
import Input from "../components/element/Input";
import LikeImg from "../../public/Assets/user/thumb-up-icn(1).svg";
export default function Home() {
  const { fetchData } = useApi();
  const url = "/api/admin/register";

  const payload = {
    name: "L45yxuxza445545ik45j45d",
    email: "lyxuxu4455b44455a4545i@gmail.com",
    password: "Test@454547123",
  };
  useEffect(() => {
    fetchData(
      url,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      },
      (res) => {
        console.log(res, "responce check please");
      }
    );
  }, []);

  return (
    <div className="bg-[#F6F5F7] w-full  py-8 gap-6 flex-col h-screen justify-center flex items-center overflow-x-hidden">
      <div className="w-[520px] text-center  px-10 py-10 gap-4 flex flex-col items-center  rounded-[18px] bg-white border-[0.5px] border-gray-300 ">
        <div className="flex  flex-row gap-5">
          <h5 className="text-[28px] font-bold leading-[30px] ">
            Register in{" "}
          </h5>
          <Image
            width={150}
            className=" object-cover "
            src={LoginLogo.src}
            height={150}
            alt=""
          />
        </div>
        <p className="text-[15px] mt-6 text-nowrap text-gray-700 leading-[20px] font-medium ">
          The fastest-growing Investment and wealth managment company
        </p>
        <div className="flex gap-2">
          <Image width={25} height={25} alt=" " src={LikeImg.src} />
          <p className="text-[14px] font-medium text-gray-500">
            +10,000 user trust us
          </p>
        </div>
        <Input
          label="Referral Code"
          placeholder="REFFERAL01MCO"
        />
         <Button text="Skip"Theme="light" />
         <Button text="Continue" />
      </div>
    </div>
  );
}
