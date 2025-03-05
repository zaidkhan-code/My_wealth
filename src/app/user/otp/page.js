"use client";
import React from "react";
import Button from "../../../components/element/Button";
import Input from "@/components/element/Input";
import { useMainContext } from "@/components/Context_Api/MainContext";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import useApi from "@/util/useApi";
const validationSchema = Yup.object({
  otp: Yup.string().required("please enter otp code"),
});
const Page = () => {
  const { timeLeft, userDetail } = useMainContext();
  const { fetchData } = useApi();
  const { values, handleSubmit, setErrors, setFieldValue, errors } = useFormik({
    initialValues: {
      otp: "",
    },
    validationSchema,
    onSubmit: (values) => {
      let payload = {
        email: userDetail?.email || "",
        otp: otpcode || "",
      };
      fetchData(
        "users/verify-otp",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        },
        (res, status) => {
          if (status) {
            router.push("/user/simplestep");
          } else {
            setErrors("otp", "Otp is expired or invalid");
          }
        }
      );
    },
  });
  return (
    <div className="md:bg-[#F6F5F7] bg-white min-h-screen flex flex-col items-center text-center justify-between md:justify-center px-4 py-9 md:px-4 md:py-4">
      <div className="w-full md:max-w-[450px] gap-6 md:gap-4 flex flex-col bg-white md:p-8 md:rounded-[18px] md:shadow-md md:border md:border-gray-200 text-center">
        <h2 className="sm:text-[20px] md:text-[32px] font-bold text-gray-900 leading-snug text-center">
          OTP verification
        </h2>
        <p className="text-[7px] md:text-[14px] text-black w-full md:max-w-[402px] leading-relaxed text-center mx-auto">
          Please enter the OTP (One-Time Password) sent to your <br />
          gcy****@gamil.com to complete <br />
          your verification.
        </p>
        <div className="flex justify-between w-full  mx-auto mt-0 text-xs sm:text-xs md:text-sm lg:text-base text-black gap-4  md:gap-8">
          <Input
            onChange={(e) => setFieldValue("otp", e?.target?.value)}
            value={values?.otp}
            error={errors?.otp}
          />
          {/* <input
            type="text"
            maxLength={1}
            className="w-12 h-12 sm:w-16 sm:h-16 md:w-16 md:h-16 border border-gray-300 rounded-md text-center text-sm sm:text-base md:text-xl focus:outline-none focus:border-blue-500"
          />
          <input
            type="text"
            maxLength={1}
            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 border border-gray-300 rounded-md text-center text-sm sm:text-base md:text-xl focus:outline-none focus:border-blue-500"
          />
          <input
            type="text"
            maxLength={1}
            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 border border-gray-300 rounded-md text-center text-sm sm:text-base md:text-xl focus:outline-none focus:border-blue-500"
          />
          <input
            type="text"
            maxLength={1}
            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 border border-gray-300 rounded-md text-center text-sm sm:text-base md:text-xl focus:outline-none focus:border-blue-500"
          /> */}
        </div>

        <div className="ml-1  flex justify-between text-[15px] w-full  mx-auto mt-0 text-xs sm:text-xs md:text-sm lg:text-base text-black">
          <p>
            Remaining time : {Math.floor(timeLeft / 60)}:
            {String(timeLeft % 60).padStart(2, "0")}s
          </p>
          {/* <a className="text-blue-600 cursor-pointer ">Resend</a> */}
        </div>

        <div className="mt-10 md:mt-6">
          <Button text="Next" onClick={handleSubmit} />
        </div>
        <p className="text-[10px] md:text-xs text-black text-center mt-4 w-full max-w-[270px] md:max-w-[368px] min-h-[26px] md:min-h-[38px] leading-relaxed mx-auto">
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
    </div>
  );
};

export default Page;
