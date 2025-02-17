"use client";
import Image from "next/image";
import LoginLogo from "../../../../public/Assets/user/darklogowithtext.svg";
import Logo from "../../../../public/Assets/user/Logo.png";
import Button from "../../../components/element/Button";
import Input from "../../../components/element/Input";

const LegalAddressPage = () => {
  return (
    <div className="bg-white md:bg-[#F6F5F7] min-h-screen flex flex-col items-center justify-center p-4">
      <div className="md:max-w-[450px] height=[852px] w-full md:bg-white p-2 md:p-8 md:rounded-[18px] md:shadow-md md:border md:border-gray-200 text-center">
        {/* Logo */}
        <div className="flex justify-center mb-4">
          {/* Mobile Image */}
          <Image
            src={Logo}
            width={44}
            height={44}
            className="block md:hidden"
            alt="MyWealth Logo"
          />
          {/* Desktop Image */}
          <Image
            src={LoginLogo}
            width={120}
            height={40}
            className="hidden md:block"
            alt="MyWealth Logo"
          />
        </div>

        {/* Title */}
        <h2 className="text-[15px] md:text-[22px] font-bold text-gray-900 w-full max-w-[262px] md:max-w-[418px] min-h-[25px] md:min-h-[40px] leading-snug text-center">
          What’s your legal address?
        </h2>

        {/* Description */}
        <p className="text-[7px] md:text-[14px] text-black mt-2 w-full max-w-[348px] md:max-w-[402px] min-h-[32px] md:min-h-[38px] leading-relaxed">
          Enter the address in your National ID or residence permit.
          <br />
          You’ll need to verify it later.
        </p>

        {/* Form Inputs */}
        <div className="width-[358px] height-[49px] mt-5 space-y-3">
          <Input label="" placeholder="Address" />
          <Input label="" placeholder="City" />
          <div className="space-y-3 md:space-y-0 md:flex gap-3">
            <Input label="" placeholder="Country" />
            <Input label="" placeholder="ZIP / Postal Code" />
          </div>
        </div>

        {/* Continue Button */}
        <div className="width-[358px] height-[50px] mt-6">
          <Button text="Continue" />
        </div>
      </div>

      {/* Privacy Policy */}
      <p className="text-[10px] md:text-xs text-black text-center mt-4 w-full max-w-[270px] md:max-w-[368px] min-h-[26px] md:min-h-[38px] leading-relaxed">
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

export default LegalAddressPage;
