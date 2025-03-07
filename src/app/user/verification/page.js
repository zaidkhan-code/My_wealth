"use client";

import Image from "next/image";
// import LoginLogo from "../../../../public/Assets/user/darklogowithtext.";
import LoginLogo from "../../../../public/Assets/user/darklogowithtext@2x.png";
import { SlClock } from "react-icons/sl";
import useApi from "@/util/useApi";
import { useMainContext } from "@/components/Context_Api/MainContext";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
const page = () => {
  const { fetchData } = useApi();
  const router = useRouter();
  const { userDetail } = useMainContext();
  const VerifyUser = () => {
    let payloadUser = {
      email: userDetail?.email,
    };
    fetchData(
      "api/v1/users/verification",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payloadUser),
      },
      (res, status) => {
        if (status) {
          if (
            res?.message !=
            "Admin approval is pending. Please wait for approval."
          ) {
            router.push("/user/approve");
          }
        }
      }
    );
  };
  useEffect(() => {
    const interval = setInterval(() => {
      VerifyUser();
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="md: bg-white pt-7 pb-7 md:pb-14 md:pt-14  h-screen md:h-auto gap-4 flex-col justify-between  md:justify-center flex md:items-center overflow-x-hidden ">
      <div className="md:w-[520px] w-full text-center  md:h-auto px-4 py-8  md:px-10 md:py-10 gap-10 md:gap-8 flex flex-col items-center  md:rounded-[18px] bg-white md:border-[0.5px] md:border-gray-300">
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
        <div className=" border p-4 md:p-5 mt-8 md:mt-7 rounded-full text-[60px] md:text-[75px] text-gray-400">
          <SlClock />
        </div>
        <h5 className="md:text-[28px] text-black font-extrabold md:font-bold text-[20px]   mx-auto ">
          Verification Pending
        </h5>
        <p className="md:text-[15px] text-[13px] text-gray-600 md:text-black leading-[20px] mx-auto font-medium max-w-[350px]">
          We will notify you when your account is verified, which can take up to
          5 hours during peak traffic times.
        </p>
      </div>
      <p className="text-[10px] md:text-xs text-black text-center md:mt-4 mt-2 w-full max-w-[270px] md:max-w-[368px] min-h-[26px] md:min-h-[38px] leading-relaxed mx-auto">
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
