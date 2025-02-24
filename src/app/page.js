

import Image from "next/image";
import LoginLogo from "../../public/Assets/user/darklogowithtext@2x.png";
import Button from "../components/element/Button";
import Input from "../components/element/Input";
import LikeImg from "../../public/Assets/user/thumb-up-icn(1).svg";
import Logo from "../../public/Assets/user/Logo.png";

export default function Home() {
  return (
    <div className="md:bg-[#F6F5F7] bg-white pt-3 pb-6 md:pb-14 md:pt-14  h-screen md:h-auto gap-5 flex-col justify-between  md:justify-center flex md:items-center overflow-hidden ">
      <div className="md:w-[520px] w-full text-center  md:h-auto px-4 py-8  md:px-10 md:py-10 gap-8 flex flex-col items-center  md:rounded-[18px] bg-white md:border-[0.5px] md:border-gray-300">
        <div className="hidden md:flex  flex-row gap-5">
          <h5 className="text-[28px] font-bold leading-[30px] text-black">
            Register in{" "}
          </h5>
          <Image
            width={150}
            className=" object-cover "
            src={LoginLogo}
            height={150}
            alt=""
          />
        </div>
        <div className="flex  flex-col gap-10 items-center justify-center md:hidden pt-16">
          <Image
            src={Logo}
            width={44}
            height={44}
            className="block md:hidden"
            alt="MyWealth Logo"
          />
          <h5 className="text-[20px] md:text-[28px] font-bold leading-[30px] text-black">
            Register in MyWealth
          </h5>
        </div>
        <div className="flex flex-col justify-center items-center gap-4">
        <p className="text-[13px] md:text-[15px]  text-gray-700 leading-[20px] font-medium ">
          The fastest-growing Investment and wealth managment company
        </p>
        <div className="flex gap-2">
          <Image width={25} height={25} alt="likeimg" src={LikeImg} />
          <p className="text-[12px] md:text-[14px] font-medium text-gray-500">
            +10,000 user trust us
          </p>
        </div>
        </div>
        <Input label="Referral Code*" placeholder="REFFERAL01MCO" />
        <Button text="Skip" Theme="light" />
        <Button text="Next" />
      </div>
      <p className=" text-[11px] md:text-[15px] font-medium max-w-[350px] mx-auto md:max-w-[380px] text-center  ">
        This site is protected by Google&apos;s{" "}
        <span className="text-blue-500">Privacy Policy</span> and{" "}
        <span className="text-blue-500">Term of service</span> Apply
      </p>
    </div>
  );
}

