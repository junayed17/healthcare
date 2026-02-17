"use client";
import React, { useState } from "react";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";

const Password = () => {
  const [visibility, setVisibility] = useState(false);
  function Visibility() {
    setVisibility(!visibility);
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between items-center px-1">
        <label className="text-[#111518] dark:text-gray-200 text-sm font-semibold">
          Password
        </label>
        <a
          className="text-primary text-sm font-semibold hover:underline"
          href="#"
        >
          Forgot Password?
        </a>
      </div>
      <div className="relative flex items-center">
        <input
          className="w-full h-14 rounded-lg border border-[#dbe1e6] dark:border-gray-700 bg-white dark:bg-gray-800 text-[#111518] dark:text-white pl-4 pr-12 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all placeholder:text-[#617989]"
          placeholder="••••••••"
          type={`${visibility ? "text" : "password"}`}
        />
        <button
          className="absolute right-4 text-[#617989] hover:text-primary transition-colors"
          type="button"
          onClick={Visibility}
        >
          <span className="material-symbols-outlined text-[24px]">
            {visibility ? <FaRegEye /> : <FaEyeSlash />}
          </span>
        </button>
      </div>
    </div>
  );
};

export default Password;
