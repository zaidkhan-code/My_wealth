import React from "react";
const Button = ({
  text = "default",
  type = "button",
  Theme = "dark",
  className,
  ...props
}) => {
  const Classname =
    Theme == "dark"
      ? `bg-[#0E1732] text-gray-200 px-6 py-3 rounded-md w-full text-center font-medium ${className} 
hover:bg-white border-[1px] border-[#0E1732] hover:text-[#0E1732] transition-colors duration-300 ease-in-out`
      : `bg-white border-[#0E1732] border-[1px] text-[#0E1732] px-6 py-3 rounded-md w-full text-center font-medium hover:text-white hover:bg-[#0E1732] transition-colors duration-300 ease-in-out ${className}`;
  return (
    <button {...props} type={type} className={`${Classname}`}>
      {text}
    </button>
  );
};

export default Button;
