"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import Image from "next/image";
import LoginLogo from "../../../../public/Assets/user/darklogowithtext.svg";
import Logo from "../../../../public/Assets/user/Logo.png";
import Button from "../../../components/element/Button";
import Input from "../../../components/element/Input";
import { useMainContext } from "@/components/Context_Api/MainContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import useApi from "@/util/useApi";

const validationSchema = Yup.object({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  dob: Yup.string().required("Date of birth is required"),
  mobileNumber: Yup.string().required("Mobile Number is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});
const Page = () => {
  const { fetchData } = useApi();
  const router = useRouter();
  const { userDetail, setUserDetail } = useMainContext();
  const {
    values,
    errors,
    touched,
    handleBlur,
    setTouched,
    handleSubmit,
    setFieldTouched,
    isSubmitting,
    setFieldError,
    setFieldValue,
  } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      dob: "",
      mobileNumber: "",
      email: "",
    },
    validationSchema,
    onSubmit: (values) => {
      setUserDetail((prev) => {
        return {
          ...prev,
          ...values,
        };
      });
      router.push("/user/legaladdress");
    },
  });
  function checkemailvaidation(email) {
    let data = {
      email: email,
    };
    fetchData(
      "api/v1/users/checkUserAlreadyExist",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      },
      (res, status) => {
        if (!status) {
          setFieldError("email", "Email already exists. Enter a unique email.");
        }
      }
    );
  }
  return (
    <div className="md:bg-[#F6F5F7] bg-white pt-3 pb-6 md:pb-14 md:pt-14 h-screen md:h-auto flex flex-col items-center justify-center">
      <div className="md:w-[520px] w-full text-center px-4 py-8 md:px-10 md:py-10 gap-8 flex flex-col items-center md:rounded-[18px] bg-white md:border-[0.5px] md:border-gray-300">
        <div className="flex flex-row gap-5">
          <Image
            width={150}
            className="hidden md:block"
            src={LoginLogo}
            height={150}
            alt="Login Logo"
          />
          <Image
            src={Logo}
            width={44}
            height={44}
            className="block md:hidden"
            alt="MyWealth Logo"
          />
        </div>
        <h5 className="text-[20px] md:text-[28px] font-bold text-black">
          Personal Information
        </h5>
        <p className="text-[13px] md:text-[15px] text-gray-500 leading-[20px] font-medium max-w-[350px]">
          Make sure this is the same information as on your passport or ID, so
          we can verify it later.
        </p>

        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col gap-6 md:gap-8"
        >
          <div className="w-full flex flex-col md:flex-row gap-6 md:gap-8">
            <Input
              label="First Name"
              name="firstName"
              placeholder="Enter your first name"
              value={values.firstName}
              onChange={(e) => setFieldValue("firstName", e.target.value)}
              onBlur={handleBlur}
              error={touched.firstName ? errors.firstName : ""}
            />
            <Input
              label="Last Name"
              name="lastName"
              placeholder="Enter your last name"
              value={values.lastName}
              onChange={(e) => setFieldValue("lastName", e.target.value)}
              onBlur={handleBlur}
              error={touched.lastName ? errors.lastName : ""}
            />
          </div>
          <Input
            label="DOB"
            name="dob"
            placeholder="YYYY/MM/DD"
            value={values.dob}
            onChange={(e) => setFieldValue("dob", e.target.value)}
            onBlur={handleBlur}
            error={touched.dob ? errors.dob : ""}
          />
          <Input
            label="Mobile Number"
            name="mobileNumber"
            placeholder="+917 566 4567"
            type="number"
            value={values.mobileNumber}
            onChange={(e) => setFieldValue("mobileNumber", e.target.value)}
            onBlur={handleBlur}
            error={touched.mobileNumber ? errors.mobileNumber : ""}
          />
          <Input
            label="Email Address"
            name="email"
            placeholder="john@gmail.com"
            type="email"
            value={values.email}
            onChange={(e) => {
              setFieldValue("email", e.target.value);
              checkemailvaidation(e.target.value);
              if (!touched.email) {
                setTouched({ ...touched, email: true });
              }
            }}
            error={errors.email && touched.email ? errors.email : ""}
          />
          <Button text="Continue" type="submit" loading={isSubmitting} />
        </form>
      </div>

      <p className="text-[11px] md:text-[15px] font-medium max-w-[350px] text-center text-black mt-4">
        This site is protected by Google&apos;s{" "}
        <span className="text-blue-500">Privacy Policy</span> and{" "}
        <span className="text-blue-500">Terms of Service</span> apply.
      </p>
    </div>
  );
};

export default Page;
