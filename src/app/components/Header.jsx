import Link from "next/link";
import React from "react";
import {
  FaClipboardList,
  FaHeartbeat,
  FaHome,
  FaProcedures,
} from "react-icons/fa";
import LoginBtn from "./buttons/LoginBtn";
import Navigationbtns from "./buttons/Navigationbtns";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 flex items-center bg-white/90 dark:bg-background-dark/90 backdrop-blur-md px-4 py-3 justify-between border-b border-primary/10">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <Logo/>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-x-2">
            <li className="text-xl font-bold">
              <Navigationbtns href="/" text="Home" />
            </li>
            <li className="text-xl font-bold">
              <Navigationbtns href="/services" text="Services" />
            </li>
            <li className="text-xl font-bold">
              <Navigationbtns href="/bookedServices" text="Booked" />
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <LoginBtn />
        </div>
      </div>
    </header>
  );
};

export default Header;
