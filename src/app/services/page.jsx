import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { PiBabyBold } from 'react-icons/pi';

const page = () => {
  return (
    <section className="min-h-[100vh]">
      <div className="px-4 pt-6 pb-2">
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="material-symbols-outlined text-slate-400 group-focus-within:text-primary transition-colors">
              <FaSearch/>
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
        <div className="bg-white dark:bg-slate-900 rounded-xl p-4 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex gap-4 mb-4">
            <div className="w-16 h-16 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-primary text-3xl">
                <PiBabyBold />
              </span>
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <h3 className="font-bold text-lg text-slate-800 dark:text-slate-100">
                  Infant Night Care
                </h3>
                <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
                  Available
                </span>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2 mt-1">
                Professional overnight support for your newborn and peace of
                mind for parents.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 mb-4 px-2 py-1.5 bg-background-light dark:bg-slate-800/50 rounded-lg w-fit">
            <span className="material-symbols-outlined text-primary text-sm">
              payments
            </span>
            <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
              Starting from $35/hr
            </span>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <button className="py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
              View Details
            </button>
            <button className="py-2.5 rounded-lg bg-primary text-white font-semibold hover:bg-primary/90 transition-colors shadow-sm">
              Book Now
            </button>
          </div>
        </div>
        {/* Card 2 */}
        <div className="bg-white dark:bg-slate-900 rounded-xl p-4 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex gap-4 mb-4">
            <div className="w-16 h-16 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-primary text-3xl">
                <PiBabyBold />
              </span>
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <h3 className="font-bold text-lg text-slate-800 dark:text-slate-100">
                  Senior Companionship
                </h3>
                <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
                  Available
                </span>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2 mt-1">
                Friendly visits, social engagement, and daily activity
                assistance for seniors.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 mb-4 px-2 py-1.5 bg-background-light dark:bg-slate-800/50 rounded-lg w-fit">
            <span className="material-symbols-outlined text-primary text-sm">
              payments
            </span>
            <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
              Starting from $28/hr
            </span>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <button className="py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
              View Details
            </button>
            <button className="py-2.5 rounded-lg bg-primary text-white font-semibold hover:bg-primary/90 transition-colors shadow-sm">
              Book Now
            </button>
          </div>
        </div>
        {/* Card 3 */}
        <div className="bg-white dark:bg-slate-900 rounded-xl p-4 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex gap-4 mb-4">
            <div className="w-16 h-16 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-primary text-3xl">
                <PiBabyBold />
              </span>
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <h3 className="font-bold text-lg text-slate-800 dark:text-slate-100">
                  Post-Op Recovery
                </h3>
                <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
                  Highly Rated
                </span>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2 mt-1">
                Specialized medical monitoring and personal care during the
                critical recovery phase.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 mb-4 px-2 py-1.5 bg-background-light dark:bg-slate-800/50 rounded-lg w-fit">
            <span className="material-symbols-outlined text-primary text-sm">
              payments
            </span>
            <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
              Starting from $45/hr
            </span>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <button className="py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
              View Details
            </button>
            <button className="py-2.5 rounded-lg bg-primary text-white font-semibold hover:bg-primary/90 transition-colors shadow-sm">
              Book Now
            </button>
          </div>
        </div>
        {/* Card 4 */}
        <div className="bg-white dark:bg-slate-900 rounded-xl p-4 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex gap-4 mb-4">
            <div className="w-16 h-16 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-primary text-3xl">
                <PiBabyBold />
              </span>
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <h3 className="font-bold text-lg text-slate-800 dark:text-slate-100">
                  Mobility Assistance
                </h3>
                <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
                  Available
                </span>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2 mt-1">
                Dedicated support for safe movement, exercise, and physical
                therapy routines.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 mb-4 px-2 py-1.5 bg-background-light dark:bg-slate-800/50 rounded-lg w-fit">
            <span className="material-symbols-outlined text-primary text-sm">
              payments
            </span>
            <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
              Starting from $30/hr
            </span>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <button className="py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
              View Details
            </button>
            <button className="py-2.5 rounded-lg bg-primary text-white font-semibold hover:bg-primary/90 transition-colors shadow-sm">
              Book Now
            </button>
          </div>
        </div>
      </section>
    </section>
  );
};

export default page;