"use client";
import Image from "next/image";
import LoginLogo from "../../../../../public/Assets/user/darklogowithtext@2x.png";
import Logo from "../../../../../public/Assets/user/Logo.png";
import Button from "../../../../components/element/Button";
import { CiFileOn } from "react-icons/ci";
import { useMainContext } from "@/components/Context_Api/MainContext";
import { useRouter } from "next/navigation";
import useApi from "../../../../util/useApi";

const page = () => {
  const { fetchData } = useApi();
  const router = useRouter();
  const { userFileDocument, setUserFileDocument } = useMainContext();
  function fileupload(file) {
    const formData = new FormData();
    formData.append("file", file);
    fetchData(
      "files/upload",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: formData,
      },
      (res, status) => {
        setUserFileDocument((prev) => ({
          ...prev,
          idverification: res?.file?.fileName,
        }));
      }
    );
  }
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
          Upload your ID verification Document
        </h5>
        <p className="text-[13px] md:text-[15px] text-black leading-[20px] font-medium text-center">
          Accepted documents, passport, ID, and driving licences. Don’t worry,
          your data will be safe and private.
        </p>

        <div
          className={`flex ${
            userFileDocument?.idverification
              ? "flex-row p-2 "
              : "flex-col px-4 py-6  "
          } gap-4 items-center  w-full border border-gray-300 rounded-md  cursor-pointer`}
          onClick={() => document.getElementById("pdfInput")?.click()}
        >
          <CiFileOn size={40} color="black" />
          <p
            className={` text-[13px] md:text-[15px]  truncate overflow-hidden whitespace-nowrap  text-gray-700 `}
          >
            {userFileDocument?.idverification
              ? userFileDocument?.idverification
              : "Select files, supported file are PDF, JPG,PNG"}
          </p>
          <input
            type="file"
            accept=".pdf, .jpg, .png"
            className="hidden"
            id="pdfInput"
            onChange={(e) => {
              fileupload(e.target.files[0]);
            }}
          />
        </div>

        <Button
          text="Submit"
          onClick={() => router.push("/user/simplestep")}
          className={`${userFileDocument?.idverification && "md:mt-12 mt-6"}`}
        />
      </div>

      <p className=" text-[11px] md:text-[15px] font-medium max-w-[350px] mx-auto md:max-w-[380px] text-center text-black">
        This site is protected by Google&apos;s{" "}
        <span className="text-blue-500">Privacy Policy</span> and{" "}
        <span className="text-blue-500">Term of service</span> Apply
      </p>
    </div>
  );
};

export default page;
