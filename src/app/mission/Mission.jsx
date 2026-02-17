import React from 'react';

const Mission = () => {
  return (
    <section className="py-16 px-4 bg-white dark:bg-background-dark/50">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold uppercase tracking-wider">
          Our Mission
        </span>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#111518] dark:text-white">
          Empowering Families Through Quality Care
        </h2>
        <p className="text-lg text-[#617989] dark:text-slate-400 leading-relaxed">
          At CareConnect, we believe everyone deserves dignity and dedicated
          support. Our mission is to make professional caregiving easy, secure,
          and accessible for everyone, ensuring your family members are in safe,
          compassionate hands.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
          <div className="flex flex-col items-center gap-2">
            <svg
              fill="currentColor"
              height="1em"
              stroke="currentColor"
              strokeWidth={0}
              viewBox="0 0 512 512"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C381.5 463.7 496 326.5 496 128c0-19.4-11.7-36.9-30-44.3zM256 464c-89.8-38.3-186-154-186-336L256 52.8 442 128c0 182-96.2 297.7-186 336z"></path>
            </svg>
            <h4 className="font-bold text-[#111518] dark:text-white">Secure</h4>
          </div>
          <div className="flex flex-col items-center gap-2">
            <svg
              fill="currentColor"
              height="1em"
              stroke="currentColor"
              strokeWidth={0}
              viewBox="0 0 512 512"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M256 48c114.953 0 208 93.047 208 208S370.953 464 256 464 48 370.953 48 256 141.047 48 256 48zm0 40c-92.781 0-168 75.219-168 168s75.219 168 168 168 168-75.219 168-168-75.219-168-168-168zm0 56c19.882 0 36 16.118 36 36s-16.118 36-36 36-36-16.118-36-36 16.118-36 36-36zm106.332 79.434c11.046 0 20 8.954 20 20 0 11.046-8.954 20-20 20h-50.457l12.422 66.863c1.789 9.635-4.508 18.914-14.055 20.727-9.547 1.812-18.73-4.566-20.519-14.201L274.672 320h-37.344l-15.051 76.823c-1.875 9.57-11.121 15.821-20.648 13.945-9.528-1.876-15.742-11.196-13.868-20.767l13.153-67.078h-44.582c-11.046 0-20-8.954-20-20s8.954-20 20-20h60.312l9.043-46.121c-29.289-5.18-51.312-30.738-51.312-61.41 0-34.516 27.984-62.5 62.5-62.5s62.5 27.984 62.5 62.5c0 30.672-22.023 56.23-51.312 61.41l9.043 46.121h69.41z"></path>
            </svg>
            <h4 className="font-bold text-[#111518] dark:text-white">
              Accessible
            </h4>
          </div>
          <div className="flex flex-col items-center gap-2">
            <svg
              fill="currentColor"
              height="1em"
              stroke="currentColor"
              strokeWidth={0}
              viewBox="0 0 512 512"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path>
            </svg>
            <h4 className="font-bold text-[#111518] dark:text-white">
              Compassionate
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;