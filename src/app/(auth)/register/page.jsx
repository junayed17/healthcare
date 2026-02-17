"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaEyeSlash, FaLock, FaRegEye } from "react-icons/fa";
import { IoIosPerson, IoMdArrowRoundBack } from "react-icons/io";
import { IoArrowBack } from "react-icons/io5";
import { MdEmail, MdLockReset } from "react-icons/md";
import { RiShieldCrossFill } from "react-icons/ri";

const Register = () => {
  const [visibilityP, setVisibilityP] = useState(false);
  const [visibilityC, setVisibilityC] = useState(false);
  function VisibilityP() {
    setVisibilityP(!visibilityP);
  }
  function VisibilityC() {
    setVisibilityC(!visibilityC);
  }
  return (
    <section className="w-full max-w-[480px] my-4 mx-auto bg-white dark:bg-slate-900 rounded-xl shadow-sm overflow-hidden flex flex-col ">
      {/* Top App Bar */}
      <div className="flex items-center justify-center bg-white dark:bg-slate-900 p-4 border-b border-slate-100 dark:border-slate-800">
        <button className="text-slate-800 dark:text-slate-200 flex size-10 items-center justify-center hover:bg-slate-50 dark:hover:bg-slate-800 rounded-full transition-colors text-2xl">
          <IoMdArrowRoundBack />
        </button>
        <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-tight flex-1 text-center pr-10">
          Create Account
        </h2>
      </div>
      <div className="p-6 md:p-8 flex flex-col gap-6">
        {/* Header Section */}
        <div className="text-center">
          <div className="inline-flex items-center justify-center size-16 bg-primary/10 rounded-2xl mb-4">
            <RiShieldCrossFill className="text-primary text-4xl" />
          </div>
          <h1 className="text-slate-900 dark:text-white text-3xl font-extrabold mb-2">
            Join Care.IO
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-base">
            Start your healthcare journey today.
          </p>
        </div>
        {/* Registration Form */}
        <form className="flex flex-col gap-4">
          {/* Full Name */}
          <div className="flex flex-col gap-1.5">
            <label className="text-slate-700 dark:text-slate-300 text-sm font-semibold ml-1">
              Full Name
            </label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-primary transition-colors">
                <span className="material-symbols-outlined text-xl">
                  <IoIosPerson />
                </span>
              </div>
              <input
                className="w-full pl-11 pr-4 py-3.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-slate-900 dark:text-white placeholder:text-slate-400"
                placeholder="John Doe"
                type="text"
              />
            </div>
          </div>
          {/* Email Address */}
          <div className="flex flex-col gap-1.5">
            <label className="text-slate-700 dark:text-slate-300 text-sm font-semibold ml-1">
              Email Address
            </label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-primary transition-colors">
                <span className="material-symbols-outlined text-xl">
                  <MdEmail />
                </span>
              </div>
              <input
                className="w-full pl-11 pr-4 py-3.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-slate-900 dark:text-white placeholder:text-slate-400"
                placeholder="name@example.com"
                type="email"
              />
            </div>
          </div>
          {/* Password */}
          <div className="flex flex-col gap-1.5">
            <label className="text-slate-700 dark:text-slate-300 text-sm font-semibold ml-1">
              Password
            </label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-primary transition-colors">
                <span className="material-symbols-outlined text-xl">
                  <FaLock />
                </span>
              </div>
              <input
                className="w-full pl-11 pr-12 py-3.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-slate-900 dark:text-white placeholder:text-slate-400"
                placeholder="••••••••"
                type={`${visibilityP ? "text" : "password"}`}
              />
              <button
                className="absolute right-4 top-4 text-[#617989] hover:text-primary transition-colors"
                type="button"
                onClick={VisibilityP}
              >
                <span className="material-symbols-outlined text-[24px]">
                  {visibilityP ? <FaRegEye /> : <FaEyeSlash />}
                </span>
              </button>
            </div>
          </div>
          {/* Confirm Password */}
          <div className="flex flex-col gap-1.5">
            <label className="text-slate-700 dark:text-slate-300 text-sm font-semibold ml-1">
              Confirm Password
            </label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-primary transition-colors">
                <span className="material-symbols-outlined text-xl">
                  <MdLockReset />
                </span>
              </div>
              <input
                className="w-full pl-11 pr-12 py-3.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-slate-900 dark:text-white placeholder:text-slate-400"
                placeholder="••••••••"
                type={`${visibilityC ? "text" : "password"}`}
              />
              <button
                className="absolute right-4 top-4 text-[#617989] hover:text-primary transition-colors"
                type="button"
                onClick={VisibilityC}
              >
                <span className="material-symbols-outlined text-[24px]">
                  {visibilityC ? <FaRegEye /> : <FaEyeSlash />}
                </span>
              </button>
            </div>
          </div>
          {/* Sign Up Button */}
          <button
            className="w-full mt-2 bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 transition-all active:scale-[0.98]"
            type="submit"
          >
            Register
          </button>
        </form>
        {/* Divider */}
        <div className="relative flex items-center py-2">
          <div className="flex-grow border-t border-slate-200 dark:border-slate-700" />
          <span className="flex-shrink mx-4 text-slate-400 text-xs font-bold uppercase tracking-wider">
            Or continue with
          </span>
          <div className="flex-grow border-t border-slate-200 dark:border-slate-700" />
        </div>
        {/* Social Login */}
        <button className="w-full flex items-center justify-center gap-3 px-4 py-3.5 border border-slate-200 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors text-slate-700 dark:text-slate-200 font-semibold">
          <img
            alt=""
            className="w-5 h-5"
            data-alt="Google colorful letter G logo"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZzU0cSg50M-g9Jg9DcFG8g7yrfD3-jddYEiPlhW4eWEQB9DaqmZS14C_I97gHSLR-5pYoAuLxNP_QInbXejMNAEbuCPoLuzsKJJpbSiZTeBOYr400ySRDerDKcBg73x8-yxknPwKP6tyXESAhP9k9vvWtoDSusDE-fy-II18c15AVRWRs61NOY4sb3gaM0XEfsS7ISd1UefKv-Pn0uTIi56XM7hOkeYvAS4IUpEouvtQlINxec8lXxE6-ogvnsHUVzxAPvB1lXw"
          />
          Sign up with Google
        </button>
        {/* Footer Link */}
        <p className="text-center text-slate-500 dark:text-slate-400 text-sm mt-4">
          Already have an account?
          <Link className="text-primary font-bold hover:underline ml-1" href="/login">
            Log In
          </Link>
        </p>
      </div>
      {/* Terms Policy */}
      <div className="mt-auto p-6 bg-slate-50 dark:bg-slate-800/50 text-center">
        <p className="text-[11px] text-slate-400 leading-relaxed">
          By clicking Register, you agree to our
          <a
            className="underline hover:text-slate-600 dark:hover:text-slate-300"
            href="#"
          >
            Terms of Service
          </a>{" "}
          and
          <a
            className="underline hover:text-slate-600 dark:hover:text-slate-300"
            href="#"
          >
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </section>
  );
};

export default Register;
