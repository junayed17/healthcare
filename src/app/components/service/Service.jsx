import React from 'react';

const Service = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-end mb-10">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Our Services</h2>
            <p className="text-[#617989] dark:text-slate-400">
              Specialized care for every stage of life.
            </p>
          </div>
          <a
            className="text-primary font-bold hover:underline flex items-center gap-1"
            href="#"
          >
            View All{" "}
            <svg
              fill="currentColor"
              height="1em"
              stroke="currentColor"
              strokeWidth={0}
              viewBox="0 0 320 512"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
            </svg>
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Baby Care */}
          <div className="group p-8 rounded-xl bg-white dark:bg-slate-800 border border-primary/5 hover:border-primary/30 transition-all shadow-sm hover:shadow-xl">
            <div className="size-14 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
              <svg
                fill="currentColor"
                height="1em"
                stroke="currentColor"
                strokeWidth={0}
                viewBox="0 0 512 512"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M256 16C123.45 16 16 123.45 16 256s107.45 240 240 240 240-107.45 240-240S388.55 16 256 16zm0 432c-105.87 0-192-86.13-192-192s86.13-192 192-192 192 86.13 192 192-86.13 192-192 192zm-80-240c-17.67 0-32 14.33-32 32s14.33 32 32 32 32-14.33 32-32-14.33-32-32-32zm160 0c-17.67 0-32 14.33-32 32s14.33 32 32 32 32-14.33 32-32-14.33-32-32-32zm-128 96c0 26.51 21.49 48 48 48s48-21.49 48-48"
                  fillRule="evenodd"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#111518] dark:text-white">
              Baby Care
            </h3>
            <p className="text-[#617989] dark:text-slate-400 leading-relaxed mb-6">
              Expert care for your little ones, from newborns to toddlers.
              Professional nannies you can trust.
            </p>
            <button className="text-primary font-bold flex items-center gap-2 group/btn">
              Learn More{" "}
              <svg
                fill="currentColor"
                height="1em"
                stroke="currentColor"
                strokeWidth={0}
                viewBox="0 0 320 512"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
              </svg>
            </button>
          </div>
          {/* Elderly Service */}
          <div className="group p-8 rounded-xl bg-white dark:bg-slate-800 border border-primary/5 hover:border-primary/30 transition-all shadow-sm hover:shadow-xl">
            <div className="size-14 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
              <svg
                fill="currentColor"
                height="1em"
                stroke="currentColor"
                strokeWidth={0}
                viewBox="0 0 512 512"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M256 288c79.5 0 144-64.5 144-144S335.5 0 256 0 112 64.5 112 144s64.5 144 144 144zm128 32h-3.9c-37.6 21.3-80 32-124.1 32s-86.5-10.7-124.1-32H128c-70.7 0-128 57.3-128 128v48c0 17.7 14.3 32 32 32h448c17.7 0 32-14.3 32-32v-48c0-70.7-57.3-128-128-128z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#111518] dark:text-white">
              Elderly Service
            </h3>
            <p className="text-[#617989] dark:text-slate-400 leading-relaxed mb-6">
              Compassionate support for seniors including companionship,
              mobility assistance, and medication tracking.
            </p>
            <button className="text-primary font-bold flex items-center gap-2 group/btn">
              Learn More{" "}
              <svg
                fill="currentColor"
                height="1em"
                stroke="currentColor"
                strokeWidth={0}
                viewBox="0 0 320 512"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
              </svg>
            </button>
          </div>
          {/* Sick People Service */}
          <div className="group p-8 rounded-xl bg-white dark:bg-slate-800 border border-primary/5 hover:border-primary/30 transition-all shadow-sm hover:shadow-xl">
            <div className="size-14 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
              <svg
                fill="currentColor"
                height="1em"
                stroke="currentColor"
                strokeWidth={0}
                viewBox="0 0 512 512"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M464 128h-80V80c0-26.51-21.49-48-48-48H176c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v256c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V176c0-26.51-21.49-48-48-48zM176 80h160v48H176V80zM328 328h-48v48c0 4.418-3.582 8-8 8h-32c-4.418 0-8-3.582-8-8v-48h-48c-4.418 0-8-3.582-8-8v-32c0-4.418 3.582-8 8-8h48v-48c0-4.418 3.582-8 8-8h32c4.418 0 8 3.582 8 8v48h48c4.418 0 8 3.582 8 8v32c0 4.418-3.582 8-8 8z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#111518] dark:text-white">
              Sick Care
            </h3>
            <p className="text-[#617989] dark:text-slate-400 leading-relaxed mb-6">
              Professional home-based medical assistance and recovery support
              for patients post-surgery or during illness.
            </p>
            <button className="text-primary font-bold flex items-center gap-2 group/btn">
              Learn More{" "}
              <svg
                fill="currentColor"
                height="1em"
                stroke="currentColor"
                strokeWidth={0}
                viewBox="0 0 320 512"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;