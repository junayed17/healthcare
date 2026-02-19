"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaCheckCircle, FaSearch } from "react-icons/fa";


const page = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/api/services")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setServices(data);
      });
  }, []);
  return (
    <section className="min-h-[100vh]">
      <div className="px-4 pt-6 pb-2">
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="material-symbols-outlined text-slate-400 group-focus-within:text-primary transition-colors">
              <FaSearch />
            </span>
          </div>
          <input
            className="block w-full pl-10 pr-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all shadow-sm"
            placeholder="Search for care services..."
            type="text"
          />
        </div>
      </div>
      {/* Filter Section */}
      <section className="py-4">
        <h2 className="px-4 text-sm font-semibold uppercase  text-slate-500 mb-3">
          Filter by Category
        </h2>
        <div className="flex gap-3 px-4 overflow-x-auto hide-scrollbar">
          <button className="whitespace-nowrap px-5 py-2 rounded-full bg-primary text-white font-medium shadow-md shadow-primary/20 transition-all">
            Baby Care
          </button>
          <button className="whitespace-nowrap px-5 py-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 font-medium hover:border-primary transition-all">
            Elderly Service
          </button>
          <button className="whitespace-nowrap px-5 py-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 font-medium hover:border-primary transition-all">
            Sick People Service
          </button>
        </div>
      </section>
      {/* Service Cards Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-4 px-4 py-4 space-y-4">
        {/* Card 1 */}
        {services.map((ele) => (
          <div className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-800">
            <div className="flex p-4 gap-4">
              <div className="relative w-24 h-24 flex-shrink-0">
                <img
                  className="w-full h-full object-cover rounded-lg"
                  data-alt="Professional male caregiver in a blue uniform"
                  src={ele.serviceImg}
                />
                <div className="absolute -bottom-1 -right-1 bg-green-500 border-2 border-white dark:border-slate-900 w-4 h-4 rounded-full" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start mb-1">
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-primary/10 text-primary">
                    {ele.category}
                  </span>
                  <div className="flex items-center gap-1 text-green-600 dark:text-green-400">
                    <span className="material-symbols-outlined text-[14px]">
                      <FaCheckCircle />
                    </span>
                    <span className="text-[11px] font-bold uppercase">
                      {ele.availability}
                    </span>
                  </div>
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white truncate">
                  {ele.name}
                </h3>
                <div className="flex items-center gap-1 text-slate-500 dark:text-slate-400 mt-0.5 text-xs">
                  <span className="material-symbols-outlined text-[16px]">
                    history
                  </span>
                  <span>{ele.experience} years experience</span>
                </div>
                <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                  {ele.description}
                </p>
              </div>
            </div>
            {/* Skills/Tags */}
            <div className="px-4 flex flex-wrap gap-2 mb-4">
              <span className="text-[10px] px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded font-medium text-slate-600 dark:text-slate-400">
                {ele.skills}
              </span>
              {/* <span className="text-[10px] px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded font-medium text-slate-600 dark:text-slate-400">
                Patient Care
              </span> */}
            </div>
            {/* Pricing Section */}
            <div className="mx-4 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg flex items-center justify-between mb-4 border border-slate-100 dark:border-slate-800">
              <div className="text-center flex-1 border-r border-slate-200 dark:border-slate-700">
                <p className="text-[10px] uppercase tracking-tighter text-slate-400 dark:text-slate-500 font-bold">
                  Per Hour
                </p>
                <p className="text-lg font-800 text-primary">
                  ${Math.floor(ele.perhour)}
                  <span className="text-xs font-normal">
                    .{(ele.perhour % 1) / 100}
                  </span>
                </p>
              </div>
              <div className="text-center flex-1">
                <p className="text-[10px] uppercase tracking-tighter text-slate-400 dark:text-slate-500 font-bold">
                  Per Day
                </p>
                <p className="text-lg font-800 text-slate-900 dark:text-white">
                  ${Math.floor(ele.perday)}
                  <span className="text-xs font-normal">
                    .{Math.round(ele.perday % 1)}
                  </span>
                </p>
              </div>
            </div>
            {/* Action Buttons */}
            <div className="px-4 pb-4 flex gap-3">
              <Link
                href={`http://localhost:3000/services/${ele._id}`}
                className="flex-1 py-2.5 text-xs font-bold text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
              >
                View Details
              </Link>
              <button className="flex-[1.5] py-2.5 text-xs font-bold text-white bg-primary rounded-lg shadow-lg shadow-primary/25 active:scale-95 transition-transform">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </section>
    </section>
  );
};

export default page;
