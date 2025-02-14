"use client"
import React from "react";
const Input = ({ label, placeholder, type = "text", ...props }) => {
  console.log(type, "check type please");
  return (
    <div className="flex w-full flex-col items-start gap-1">
      <label className=" text-[14px] font-bold text-gray-700">{label}</label>
      <input
        {...props}
        type={type}
        placeholder={placeholder}
        className="border w-full placeholder:text-gray-500 placeholder:font-medium placeholder:text-[15px] border-gray-300 rounded-md p-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400"
      />
    </div>
  );
};

export default Input;
