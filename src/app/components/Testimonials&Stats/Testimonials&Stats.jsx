import React from 'react';

const Testimonials = () => {
  return (
<section className="py-16 px-4 bg-primary/5 overflow-hidden">
  <div className="max-w-6xl mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight">
          What Families Say About<br/> Care.IO
        </h2>
        <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg relative">
          <svg
            fill="currentColor"
            height="1em"
            stroke="currentColor"
            strokeWidth={0}
            viewBox="0 0 512 512"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M464 256h-80v-48c0-26.51 21.49-48 48-48h32V80h-32c-70.69 0-128 57.31-128 128v192c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V288c0-17.67-14.33-32-32-32zm-256 0h-80v-48c0-26.51 21.49-48 48-48h32V80h-32C105.31 80 48 137.31 48 208v192c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V288c0-17.67-14.33-32-32-32z"></path>
          </svg>
          <div className="flex gap-1 text-orange-400 mb-4">
            <svg
              fill="currentColor"
              height="1em"
              stroke="currentColor"
              strokeWidth={0}
              viewBox="0 0 576 512"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
            </svg>
            <svg
              fill="currentColor"
              height="1em"
              stroke="currentColor"
              strokeWidth={0}
              viewBox="0 0 576 512"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
            </svg>
            <svg
              fill="currentColor"
              height="1em"
              stroke="currentColor"
              strokeWidth={0}
              viewBox="0 0 576 512"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
            </svg>
            <svg
              fill="currentColor"
              height="1em"
              stroke="currentColor"
              strokeWidth={0}
              viewBox="0 0 576 512"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
            </svg>
            <svg
              fill="currentColor"
              height="1em"
              stroke="currentColor"
              strokeWidth={0}
              viewBox="0 0 576 512"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
            </svg>
          </div>
          <p className="text-lg italic text-[#111518] dark:text-white leading-relaxed mb-6">
            "The caregiver we found for my mother was exceptional. She wasn't
            just a helper; she became part of our family. CareConnect made the
            whole process seamless."
          </p>
          <div className="flex items-center gap-4">
            <div className="size-12 rounded-full overflow-hidden bg-slate-200">
              <img
                alt="Profile of Sarah Jenkins"
                data-alt="Close up portrait of a happy female customer"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgIswV-FPh7yudEvK2eikaF_beAQn30KGnjTsKoZJMwyGm8pBkWWW85yeZTiIfl9qxc9bMuIfcJ4y6NobcLprR9PGgVksl8Z9wPLTIAD4hv1oOCDeH7VBRoWUrkDyRdIAUFYiumJM1XtzlIEQW4F5GCWBB5iRv2qcNvIAOvHfNGy0UVEoJAc84fEkZld7u5mDOKF3WCc1gkr_-_1WH4av0r1zXDdcBPzfpk5oh2K2RQGRaFcN-KN8is1QEG0k9k6s1R475NaK9Lg"
              />
            </div>
            <div>
              <h5 className="font-bold text-[#111518] dark:text-white">
                Sarah Jenkins
              </h5>
              <p className="text-sm text-[#617989] dark:text-slate-400">
                Daughter of client
              </p>
            </div>
          </div>
        </div>
        <div className="flex gap-4">
          <button className="size-10 rounded-full border border-primary/20 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
            <svg
              fill="currentColor"
              height="1em"
              stroke="currentColor"
              strokeWidth={0}
              viewBox="0 0 320 512"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path>
            </svg>
          </button>
          <button className="size-10 rounded-full border border-primary/20 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
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
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-primary p-8 rounded-xl text-white flex flex-col justify-center items-center text-center space-y-2">
          <span className="text-4xl font-extrabold tracking-tighter">
            5000+
          </span>
          <p className="font-bold text-primary/20 uppercase text-xs tracking-widest">
            Families Served
          </p>
        </div>
        <div className="bg-white dark:bg-slate-800 p-8 rounded-xl border border-primary/10 flex flex-col justify-center items-center text-center space-y-2">
          <span className="text-4xl font-extrabold tracking-tighter text-primary">
            4.9/5
          </span>
          <p className="font-bold text-[#617989] dark:text-slate-400 uppercase text-xs tracking-widest">
            Average Rating
          </p>
        </div>
        <div className="bg-white dark:bg-slate-800 p-8 rounded-xl border border-primary/10 flex flex-col justify-center items-center text-center space-y-2">
          <span className="text-4xl font-extrabold tracking-tighter text-primary">
            1200+
          </span>
          <p className="font-bold text-[#617989] dark:text-slate-400 uppercase text-xs tracking-widest">
            Vetted Carers
          </p>
        </div>
        <div className="bg-slate-900 p-8 rounded-xl text-white flex flex-col justify-center items-center text-center space-y-2">
          <span className="text-4xl font-extrabold tracking-tighter">24/7</span>
          <p className="font-bold text-white/40 uppercase text-xs tracking-widest">
            Care Support
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

  );
};

export default Testimonials;