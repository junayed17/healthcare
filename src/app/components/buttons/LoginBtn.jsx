import Link from 'next/link';
import React from 'react';

const LoginBtn = () => {
  return (
    <Link href="/login" className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-lg h-14 px-8 bg-primary text-white text-lg font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
      LogIn
    </Link>
  );
};

export default LoginBtn;