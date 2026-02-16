import Link from "next/link";
import React from "react";
import { FaHeartbeat } from "react-icons/fa";

const Logo = () => {
  return (
    <Link
      href="/"
      className="flex items-center text-xl font-bold text-primary hover:text-primary/80 transition-all"
    >
      <FaHeartbeat className="text-red-500" /> Care.
      <span className="text-[#111518] dark:text-white">IO</span>
    </Link>
  );
};

export default Logo;
