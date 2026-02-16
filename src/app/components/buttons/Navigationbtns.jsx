"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';

const Navigationbtns = ({ href, text, Icon }) => {
  const [path,setPath]=useState("");
  const pathName=usePathname();

  
  return (
    <Link href={href} className={`${pathName === href ? "bg-gray-300" : ""}`}>
      {text}
    </Link>
  );
};

export default Navigationbtns;