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
              <li key={item.path} className="flex items-center py-1 pl-2">
                <Image
                  src={item.icon}
                  alt={`${item.label} icon`}
                  width={20}
                  height={20}
                />
                <Link
                  href={item.path}
                  className="block font-bold text-gray-600 px-3 py-1 rounded hover:bg-gray-100 transition-colors"
                >
                  {item.label}
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
