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
        <FaShieldHeart/>
      </div>
      Care.
      <span className="text-[#111518] dark:text-white">IO</span>
    </Link>
  );
};

export default Logo;
