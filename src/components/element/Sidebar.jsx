"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

import thradeIcon from "../../../public/Assets/user/Thrade.png";
import Market from "../../../public/Assets/user/Markets.png";
import Wallet from "../../../public/Assets/user/wallet.png";
import Academy from "../../../public/Assets/user/Academy.png";
import Portfolio from "../../../public/Assets/user/portfolio.png";

function Sidebar() {
  const navItems = [
    { label: "Markets", path: "/Market", icon: Market },
    { label: "Trade", path: "/trade", icon: thradeIcon },
    { label: "Academy", path: "/academy", icon: Academy },
    { label: "Portfolio", path: "/portfolio", icon: Portfolio },
    { label: "Wallet", path: "/wallet", icon: Wallet },
  ];

  return (
    <div className="hidden md:block">
      <aside className="bg-white w-64 h-screen border-r shadow-sm flex flex-col pt-[73px]">
        <nav className="flex-1 px-4">
          <ul>
            {navItems.map((item) => (
              <li key={item.path}>
                <Link href={item.path}>
                  <div className="flex items-center gap-3 p-2 rounded-lg cursor-pointer group transition-all duration-200 hover:bg-gray-200">
                    <Image
                      src={item.icon}
                      alt={`${item.label} icon`}
                      width={20}
                      height={20}
                      className="group-hover:brightness-50 transition-all duration-200"
                    />
                   <span
  className="block font-bold group-hover:text-gray-600 transition-all duration-200"
  style={{ color: "#5F6471" }} // Apply custom color
>
  {item.label}
</span>

                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </div>
  );
}

export default Sidebar;
