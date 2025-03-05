// "use client";
// import React from "react";
// const Button = ({
//   text = "default",
//   type = "button",
//   Theme = "dark",
//   className,
//   ...props
// }) => {
//   const Classname =
//     Theme == "dark"
//       ? `bg-[#0E1732] text-gray-200 px-6 py-3 rounded-md w-full text-center font-medium ${className}
// hover:bg-white border-[1px] border-[#0E1732] hover:text-[#0E1732] transition-colors duration-300 ease-in-out`
//       : `bg-white border-[#0E1732] border-[1px] text-[#0E1732] px-6 py-3 rounded-md w-full text-center font-medium hover:text-white hover:bg-[#0E1732] transition-colors duration-300 ease-in-out ${className}`;
//   return (
//     <button {...props} type={type} className={`${Classname}`}>
//       {text}
//     </button>
//   );
// };

// export default Button;
"use client";
import React from "react";

const Button = ({
  text = "default",
  type = "button",
  Theme = "dark",
  className = "",
  loading = false,
  ...props
}) => {
  const Classname =
    Theme === "dark"
      ? `bg-[#0E1732] text-gray-200 px-6 py-3 rounded-md w-full text-center font-medium ${className} 
hover:bg-white border-[1px] border-[#0E1732] hover:text-[#0E1732] transition-colors duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed`
      : `bg-white border-[#0E1732] border-[1px] text-[#0E1732] px-6 py-3 rounded-md w-full text-center font-medium hover:text-white hover:bg-[#0E1732] transition-colors duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed ${className}`;

  return (
    <button {...props} type={type} className={Classname} disabled={loading}>
      {loading ? (
        <span className="flex items-center justify-center">
          <svg
            className="animate-spin h-5 w-5  text-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v8H4z"
            />
          </svg>
        </span>
      ) : (
        text
      )}
    </button>
  );
};

export default Button;
