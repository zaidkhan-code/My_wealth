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
          addressfile: res?.file?.fileName,
        }));
      }
    );
  }
  const router = useRouter();
  return (
    <div className="md:bg-[#F6F5F7] bg-white pt-3 pb-6 md:pb-14 md:pt-14  h-screen md:h-auto gap-1 flex-col justify-between  md:justify-center flex md:items-center overflow-x-hidden ">
      <div className="md:w-[520px] w-full text-center  md:h-auto px-4 py-8  md:px-10 md:py-10 gap-4 md:gap-4 flex flex-col items-center  md:rounded-[18px] bg-white md:border-[0.5px] md:border-gray-300">
        {" "}
        <Image
          src={LoginLogo.src}
          width={150}
          height={150}
          className="object-contain "
          alt="Loginlogo"
        />
        {/* <Image
          src={Logo.src}
          width={150}
          height={150}
          className="object-contain md:hidden block"
          alt="Loginlogo"
        /> */}
        <h5 className="md:text-[32px] text-black font-extrabold md:font-bold text-[20px]  mx-auto ">
          Residential address confirmation Document
        </h5>
        <p className="md:text-[13px] text-[10px] md:text-black  text-gray-700 leading-[20px] mx-auto font-medium max-w-[350px]">
          Accepted documents, Utility bills, Bank statements, and
          Government-issued ID with residence address.Don’t worry, your data
          will be safe and private.
        </p>
        <div
          className={`w-full border cursor-pointer rounded-lg items-center flex ${
            userFileDocument?.addressfile
              ? "flex-row md:p-3 p-2"
              : "flex-col md:p-8 p-5"
          } gap-2`}
          onClick={() => document.getElementById("input")?.click()}
        >
          <CiFileOn size={35} color="black" />

          <p className="md:text-[14px] text-[10px] text-black truncate overflow-hidden whitespace-nowrap text-center">
            {userFileDocument?.addressfile
              ? userFileDocument?.addressfile
              : "Select the files. Supported files are PNG, JPG, PDF."}
          </p>
          <input
            type="file"
            className="hidden"
            id="input"
            onChange={(e) => {
              fileupload(e.target.files[0]);
            }}
          />
        </div>
        <Button
          text="Submit"
          onClick={() => router.push("/user/simplestep")}
          className={`${userFileDocument?.addressfile && "md:mt-12 mt-6"}`}
        />
      </div>
      <p className="text-[10px] md:text-xs text-black text-center md:mt-4 mt-1 w-full max-w-[270px] md:max-w-[368px] min-h-[26px] md:min-h-[38px] leading-relaxed mx-auto">
        This site is protected by Google's{" "}
        <a href="#" className="text-blue-600">
          Privacy Policy
        </a>{" "}
        and{" "}
        <a href="#" className="text-blue-600">
          Terms of Service
        </a>{" "}
        apply.
      </p>
    </div>
  );
};
export default page;
