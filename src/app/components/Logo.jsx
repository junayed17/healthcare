import Link from "next/link";
import React from "react";
import { FaShieldHeart } from "react-icons/fa6";

const Logo = () => {
  return (
    <Link
      href="/"
      className="flex items-center text-xl font-bold text-primary hover:text-primary/80 transition-all"
    >
        <div className="text-primary flex size-10 items-center justify-center rounded-lg bg-primary/10">
          <span className="material-symbols-outlined text-2xl">
            <svg
              fill="currentColor"
              height="1.5em"
              stroke="currentColor"
              strokeWidth={0}
              viewBox="0 0 512 512"
              width="1.5em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M256 0c4.6 0 9.2 1 13.4 2.9L452.8 80.1c15.5 6.7 25.2 22.1 25.2 39V288c0 128-156.2 210.1-211.3 222c-7.1 1.5-14.4 1.5-21.4 0C189.9 498.1 34 416 34 288V119.1c0-16.9 9.7-32.3 25.2-39L242.6 2.9C246.8 1 251.4 0 256 0zm0 128c-35.3 0-64 28.7-64 64 0 23.6 12.8 44.1 32 55.1V288c0 17.7 14.3 32 32 32s32-14.3 32-32v-40.9c19.2-11 32-31.5 32-55.1 0-35.3-28.7-64-64-64z" />
            </svg>
          </span>
        </div>
        <h2 className="text-[#111518] dark:text-white text-xl font-bold leading-tight tracking-tight">
          Care.IO
        </h2>
    </Link>
  );
};



export default Logo;
