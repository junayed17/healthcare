import Password from '@/app/components/Password';
import React from 'react';
import { IoBagAddSharp } from "react-icons/io5";

const login = () => {
  return (
      <div className="relative flex h-screen w-full flex-col bg-background-light dark:bg-background-dark overflow-x-hidden mt-5">
        {/* Welcome Message */}
        <div className="px-6 text-center mb-8">
          <h1 className="text-[#111518] dark:text-white text-3xl font-bold leading-tight">
            Welcome Back
          </h1>
          <p className="text-[#617989] dark:text-gray-400 text-base mt-2">
            Please enter your details to sign in to your account.
          </p>
        </div>
        {/* Login Form */}
        <main className="flex-1 px-6 max-w-md mx-auto w-full">
          <form action="#" className="space-y-5" method="POST">
            {/* Email Field */}
            <div className="flex flex-col gap-2">
              <label className="text-[#111518] dark:text-gray-200 text-sm font-semibold ml-1">
                Email
              </label>
              <div className="relative">
                <input
                  className="w-full h-14 rounded-lg border border-[#dbe1e6] dark:border-gray-700 bg-white dark:bg-gray-800 text-[#111518] dark:text-white px-4 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all placeholder:text-[#617989]"
                  placeholder="email@example.com"
                  type="email"
                />
              </div>
            </div>
            {/* Password Field */}
            <div className="flex flex-col gap-2">
             <Password/>
            </div>
            {/* Action Buttons */}
            <div className="pt-4 space-y-4">
              <button
                className="w-full h-14 bg-primary hover:bg-primary/90 text-white font-bold rounded-lg shadow-lg shadow-primary/20 transition-all flex items-center justify-center"
                type="submit"
              >
                Log In
              </button>
              <div className="relative flex items-center py-2">
                <div className="flex-grow border-t border-[#dbe1e6] dark:border-gray-700" />
                <span className="flex-shrink mx-4 text-[#617989] text-sm uppercase tracking-wider">
                  or
                </span>
                <div className="flex-grow border-t border-[#dbe1e6] dark:border-gray-700" />
              </div>
              <button
                className="w-full h-14 bg-white dark:bg-gray-800 border border-[#dbe1e6] dark:border-gray-700 text-[#111518] dark:text-white font-semibold rounded-lg flex items-center justify-center gap-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all"
                type="button"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                Sign in with Google
              </button>
            </div>
          </form>
        </main>
        {/* Footer */}
        <footer className="mt-auto py-8 text-center px-4">
          <p className="text-[#617989] dark:text-gray-400">
            Don't have an account?
            <a className="text-primary font-bold hover:underline ml-1" href="#">
              Register
            </a>
          </p>
        </footer>
      </div>
  );
};

export default login;