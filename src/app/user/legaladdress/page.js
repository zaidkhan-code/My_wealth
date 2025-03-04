"use client";
import Image from "next/image";
import LoginLogo from "../../../../public/Assets/user/darklogowithtext.svg";
import Logo from "../../../../public/Assets/user/Logo.png";
import Button from "../../../components/element/Button";
import Input from "../../../components/element/Input";
import { useMainContext } from "@/components/Context_Api/MainContext";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";

const validationSchema = Yup.object({
  address: Yup.string().required("address name is required"),
  city: Yup.string().required("city name is required"),
  zip_postal_code: Yup.string().required("ZIP / Postal Code is required"),
  country: Yup.string().required("country is required"),
});
const LegalAddressPage = () => {
  const { setUserDetail } = useMainContext();
  const router = useRouter();
  const { values, errors, touched, handleBlur, handleSubmit, setFieldValue } =
    useFormik({
      initialValues: {
        address: "",
        city: "",
        zip_postal_code: "",
        country: "",
      },
      validationSchema,
      onSubmit: (values) => {
        setUserDetail((prev) => {
          return {
            ...prev,
            ...values,
          };
        });
        router.push("/user/password");
      },
    });
  return (
    <div className="md:bg-[#F6F5F7] bg-white pt-3 pb-6 md:pb-14 md:pt-140 h-screen md:h-auto gap-5 flex-col justify-between  md:justify-center flex md:items-center overflow-hidden">
      <div className="md:w-[520px] w-full text-center  md:h-auto px-4 py-8  md:px-10 md:py-10 gap-8 flex flex-col items-center  md:rounded-[18px] bg-white md:border-[0.5px] md:border-gray-300">
        {/* Logo */}
        <div className="flex  flex-row gap-5">
          <Image
            width={150}
            className=" object-cover hidden md:block"
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
          What’s your legal address?
        </h5>
        <p className="text-[13px] md:text-[15px]  text-gray-500 leading-[20px] font-medium text-center ">
          Enter the address in your National ID or residence permit. You’ll need
          to verify it later.
        </p>
        <Input
          label=""
          placeholder="Address"
          value={values.address}
          onChange={(e) => setFieldValue("address", e.target.value)}
          onBlur={handleBlur}
          error={touched.address ? errors.address : ""}
        />
        <Input
          label=""
          placeholder="City"
          value={values.city}
          onChange={(e) => setFieldValue("city", e.target.value)}
          onBlur={handleBlur}
          error={touched.city ? errors.city : ""}
        />
        <div className="w-[100%] justify-between gap-8 flex flex-col md:flex-row">
          <Input
            label=""
            placeholder="Country"
            value={values.country}
            onChange={(e) => setFieldValue("country", e.target.value)}
            onBlur={handleBlur}
            error={touched.country ? errors.country : ""}
          />
          <Input
            value={values.zip_postal_code}
            onChange={(e) => setFieldValue("zip_postal_code", e.target.value)}
            onBlur={handleBlur}
            error={touched.zip_postal_code ? errors.zip_postal_code : ""}
            label=""
            placeholder="ZIP / Postal Code"
          />
        </div>
        <Button text="Continue" onClick={handleSubmit} />
      </div>
      <p className=" text-[11px] md:text-[15px] font-medium max-w-[350px] mx-auto md:max-w-[380px] text-center text-black">
        This site is protected by Google&apos;s{" "}
        <span className="text-blue-500">Privacy Policy</span> and{" "}
        <span className="text-blue-500">Term of service</span> Apply
      </p>
    </div>
  );
};

export default LegalAddressPage;
