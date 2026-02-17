import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-background-dark border-t border-primary/10 py-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <div className="text-primary flex size-8 items-center justify-center rounded-lg bg-primary/10">
              <svg
                fill="currentColor"
                height="1.2em"
                stroke="currentColor"
                strokeWidth={0}
                viewBox="0 0 512 512"
                width="1.2em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M256 0c4.6 0 9.2 1 13.4 2.9L452.8 80.1c15.5 6.7 25.2 22.1 25.2 39V288c0 128-156.2 210.1-211.3 222c-7.1 1.5-14.4 1.5-21.4 0C189.9 498.1 34 416 34 288V119.1c0-16.9 9.7-32.3 25.2-39L242.6 2.9C246.8 1 251.4 0 256 0zm0 128c-35.3 0-64 28.7-64 64 0 23.6 12.8 44.1 32 55.1V288c0 17.7 14.3 32 32 32s32-14.3 32-32v-40.9c19.2-11 32-31.5 32-55.1 0-35.3-28.7-64-64-64z"></path>
              </svg>
            </div>
            <h2 className="text-[#111518] dark:text-white text-lg font-bold">
              CareConnect
            </h2>
          </div>
          <p className="text-sm text-[#617989] dark:text-slate-400 leading-relaxed">
            Reliable, compassionate, and professional caregiving services for
            your loved ones at home.
          </p>
          <div className="flex gap-4">
            <a
              className="size-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-all"
              href="#"
            >
              <svg
                fill="currentColor"
                height="1em"
                stroke="currentColor"
                strokeWidth={0}
                viewBox="0 0 496 512"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm31.7 192c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zM0 256c0 121.3 90.5 221.4 208 238.2V352h-71.1c-10.7 0-19.4-8.7-19.4-19.4v-4.5c0-10.7 8.7-19.4 19.4-19.4H208v-105.3h-71.1c-10.7 0-19.4-8.7-19.4-19.4v-4.5c0-10.7 8.7-19.4 19.4-19.4H208V23.8C90.5 40.6 0 140.7 0 256zm496 0c0-115.3-90.5-215.4-208-232.2V128h71.1c10.7 0 19.4 8.7 19.4 19.4v4.5c0 10.7-8.7 19.4-19.4 19.4H288v105.3h71.1c10.7 0 19.4 8.7 19.4 19.4v4.5c0 10.7-8.7 19.4-19.4 19.4H288v131.8c117.5-16.8 208-116.9 208-238.2z"></path>
              </svg>
            </a>
            <a
              className="size-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-all"
              href="#"
            >
              <svg
                fill="currentColor"
                height="1em"
                stroke="currentColor"
                strokeWidth={0}
                viewBox="0 0 512 512"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M256 32C132.3 32 32 132.3 32 256s100.3 224 224 224 224-100.3 224-224c0-56.1-20.2-106.4-54-145.3-5.5-6.3-15.1-7-21.4-1.5s-7 15.1-1.5 21.4C403.2 165.1 416 209 416 256c0 88.4-71.6 160-160 160s-160-71.6-160-160 71.6-160 160-160c44.1 0 84.1 17.9 113.1 46.9 4.2 4.2 11 4.2 15.2 0 4.2-4.2 4.2-11 0-15.2-33-33-78.6-53.7-128.3-53.7z"></path>
              </svg>
            </a>
            <a
              className="size-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-all"
              href="#"
            >
              <svg
                fill="none"
                height="1em"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                viewBox="0 0 24 24"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                <polyline points="16 6 12 2 8 6" />
                <line x1={12} x2={12} y1={2} y2={15} />
              </svg>
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-bold mb-6">Quick Links</h4>
          <ul className="space-y-4 text-sm text-[#617989] dark:text-slate-400">
            <li>
              <a className="hover:text-primary transition-colors" href="#">
                Find a Caregiver
              </a>
            </li>
            <li>
              <a className="hover:text-primary transition-colors" href="#">
                How it Works
              </a>
            </li>
            <li>
              <a className="hover:text-primary transition-colors" href="#">
                Pricing Plans
              </a>
            </li>
            <li>
              <a className="hover:text-primary transition-colors" href="#">
                Safety Protocols
              </a>
            </li>
            <li>
              <a className="hover:text-primary transition-colors" href="#">
                Become a Caregiver
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6">Services</h4>
          <ul className="space-y-4 text-sm text-[#617989] dark:text-slate-400">
            <li>
              <a className="hover:text-primary transition-colors" href="#">
                Newborn Care
              </a>
            </li>
            <li>
              <a className="hover:text-primary transition-colors" href="#">
                Senior Companionship
              </a>
            </li>
            <li>
              <a className="hover:text-primary transition-colors" href="#">
                Post-Op Recovery
              </a>
            </li>
            <li>
              <a className="hover:text-primary transition-colors" href="#">
                Dementia Support
              </a>
            </li>
            <li>
              <a className="hover:text-primary transition-colors" href="#">
                Special Needs Care
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6">Contact Us</h4>
          <ul className="space-y-4 text-sm text-[#617989] dark:text-slate-400">
            <li className="flex items-start gap-3">
              <svg
                fill="none"
                height="1em"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                viewBox="0 0 24 24"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx={12} cy={10} r={3} />
              </svg>
              <span>
                123 Care Street, Medical District,
                <br />
                Health City, HC 54321
              </span>
            </li>
            <li className="flex items-center gap-3">
              <svg
                fill="none"
                height="1em"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                viewBox="0 0 24 24"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <span>+1 (800) CARE-NOW</span>
            </li>
            <li className="flex items-center gap-3">
              <svg
                fill="none"
                height="1em"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                viewBox="0 0 24 24"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <span>hello@careconnect.com</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-6xl mx-auto border-t border-primary/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#617989] dark:text-slate-500">
        <p>© 2024 CareConnect. All rights reserved.</p>
        <div className="flex gap-6">
          <a className="hover:text-primary transition-colors" href="#">
            Privacy Policy
          </a>
          <a className="hover:text-primary transition-colors" href="#">
            Terms of Service
          </a>
          <a className="hover:text-primary transition-colors" href="#">
            Cookie Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;