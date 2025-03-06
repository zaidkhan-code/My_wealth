"use client";
import React from "react";
import Image from "next/image";

import LoginLogo from "../../../public/Assets/user/darklogowithtext.svg"; 
import menuIcon from "../../../public/Assets/user/menu.png"; 

export default function Header() {
  return (
    <header className="flex items-center justify-between bg-white shadow px-6 py-4 fixed top-0 left-0 w-full z-50">
      
   
      <div className="block md:hidden">
        <Image
          src={menuIcon} 
          alt="Menu Icon"
          width={24}
          height={24}
          className="object-contain"
        />
      </div>

   
      <div className="absolute left-1/2 transform -translate-x-1/2 block md:hidden">
        <Image
          src={LoginLogo}
          alt="Login Logo"
          width={44}
          height={44}
          className="object-contain"
        />
      </div>

      
      <div className="hidden md:block">
        <Image
          src={LoginLogo}
          alt="Login Logo"
          width={150}
          height={150}
          className="object-contain"
        />
      </div>

    
      <div className="flex items-center">
  <div className="flex items-center justify-center w-4 h-4 md:w-8 md:h-8 rounded-full bg-[#70A5CE] text-white font-bold text-[8px] md:text-sm">
    MF
  </div>
</div>

    </header>
  );
}
