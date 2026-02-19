"use client"
import { useEffect, useState } from "react";
const page =  ({ params }) => {
  const { id } =  params;
  const [data,setData]=useState({})
useEffect(()=>{
fetch("http://localhost:3000/api/services/69974a76649baa8b7ed26533")
  .then((res) => res.json())
  .then((result) => setData(result));
},[])
  
  return (
    <section className="max-w-2xl mx-auto min-h-screen bg-white shadow-sm md:my-8 md:rounded-custom overflow-hidden relative pb-24">
      {/* BEGIN: NavigationHeader */}
      <header className="flex items-center justify-between p-4 sticky top-0 bg-white/80 backdrop-blur-md z-10 border-b border-gray-100">
        <button
          aria-label="Go back"
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <svg
            className="lucide lucide-chevron-left"
            fill="none"
            height={24}
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            viewBox="0 0 24 24"
            width={24}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>
        <h1 className="text-lg font-bold">Service Details</h1>
        <button
          aria-label="Add to favorites"
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <svg
            className="lucide lucide-heart text-gray-400 hover:text-red-500 transition-colors"
            fill="none"
            height={24}
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            viewBox="0 0 24 24"
            width={24}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          </svg>
        </button>
      </header>
      {/* END: NavigationHeader */}
      {/* BEGIN: ImageSection */}
      <section className="w-full aspect-video overflow-hidden">
        <img
          alt="Junayed Ahmed nipun service display"
          className="w-full h-full object-cover"
          src={data.serviceImg}
        />
      </section>
      {/* END: ImageSection */}
      <div className="p-5 space-y-6">
        {/* BEGIN: TitleSection */}
        <section data-purpose="provider-identity">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="px-3 py-1 bg-blue-50 text-primary text-xs font-bold uppercase tracking-wider rounded-full">
              {data.category}
            </span>
            {/* Availability Badge */}
            <div className="flex items-center gap-1.5 px-3 py-1 bg-green-50 text-green-700 text-xs font-bold rounded-full">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              {data.availability}
            </div>
          </div>
          <h2 className="text-2xl font-extrabold text-gray-900">{data.name}</h2>
        </section>
        {/* END: TitleSection */}
        {/* BEGIN: StatsGrid */}
        <section
          className="grid grid-cols-2 gap-4"
          data-purpose="professional-stats"
        >
          <div className="p-4 bg-gray-50 rounded-custom flex items-center gap-4">
            <div className="p-2 bg-white rounded-md text-primary shadow-sm">
              <svg
                className="lucide lucide-briefcase"
                fill="none"
                height={20}
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                viewBox="0 0 24 24"
                width={20}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                <rect height={14} rx={2} width={20} x={2} y={6} />
              </svg>
            </div>
            <div>
              <p className="text-xs text-gray-500 font-medium">Experience</p>
              <p className="font-bold text-gray-900">{data.experience} Years</p>
            </div>
          </div>
          <div className="p-4 bg-gray-50 rounded-custom flex items-center gap-4">
            <div className="p-2 bg-white rounded-md text-primary shadow-sm">
              <svg
                className="lucide lucide-award"
                fill="none"
                height={20}
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                viewBox="0 0 24 24"
                width={20}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
                <circle cx={12} cy={8} r={6} />
              </svg>
            </div>
            <div>
              <p className="text-xs text-gray-500 font-medium">Status</p>
              <p className="font-bold text-gray-900">Verified</p>
            </div>
          </div>
        </section>
        {/* END: StatsGrid */}
        {/* BEGIN: DescriptionSection */}
        <section data-purpose="service-description">
          <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
            About this Service
          </h3>
          <p className="text-gray-600 leading-relaxed text-sm md:text-base">
            {data.description}
          </p>
        </section>
        {/* END: DescriptionSection */}
        {/* BEGIN: SkillsSection */}
        <section data-purpose="skills-list">
          <h3 className="text-lg font-bold mb-3">
            Skills &amp; Certifications
          </h3>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1.5 badge-outline text-gray-700 text-sm font-medium rounded-full">
              Medication Mgmt
            </span>
            <span className="px-3 py-1.5 badge-outline text-gray-700 text-sm font-medium rounded-full">
              Patient Care
            </span>
            <span className="px-3 py-1.5 badge-outline text-gray-700 text-sm font-medium rounded-full">
              CPR Certified
            </span>
            <span className="px-3 py-1.5 badge-outline text-gray-700 text-sm font-medium rounded-full">
              Mobility Support
            </span>
          </div>
        </section>
        {/* END: SkillsSection */}
        {/* BEGIN: PricingSection */}
        <section
          className="border-t border-gray-100 pt-6"
          data-purpose="pricing-info"
        >
          <h3 className="text-lg font-bold mb-4">Pricing Plans</h3>
          <div className="space-y-3">
            {/* Hourly Rate */}
            <div className="flex items-center justify-between p-4 bg-white border border-gray-100 rounded-custom">
              <div className="flex items-center gap-3">
                <svg
                  className="lucide lucide-clock text-primary"
                  fill="none"
                  height={20}
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  width={20}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx={12} cy={12} r={10} />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <span className="font-semibold">Hourly Rate</span>
              </div>
              <span className="text-xl font-extrabold text-primary">
                ${data.perhour}
                <span className="text-xs text-gray-400 font-normal">/hr</span>
              </span>
            </div>
            {/* Daily Rate */}
            <div className="flex items-center justify-between p-4 bg-white border border-gray-100 rounded-custom">
              <div className="flex items-center gap-3">
                <svg
                  className="lucide lucide-calendar-days text-primary"
                  fill="none"
                  height={20}
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  width={20}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 2v4" />
                  <path d="M16 2v4" />
                  <rect height={18} rx={2} width={18} x={3} y={4} />
                  <path d="M3 10h18" />
                  <path d="M8 14h.01" />
                  <path d="M12 14h.01" />
                  <path d="M16 14h.01" />
                  <path d="M8 18h.01" />
                  <path d="M12 18h.01" />
                  <path d="M16 18h.01" />
                </svg>
                <span className="font-semibold">Daily Rate</span>
              </div>
              <span className="text-xl font-extrabold text-primary">
                ${data.perday}
                <span className="text-xs text-gray-400 font-normal">/day</span>
              </span>
            </div>
          </div>
        </section>
        {/* END: PricingSection */}
      </div>
      {/* BEGIN: BookingAction */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-100 md:absolute md:rounded-b-custom">
        <div className="max-w-2xl mx-auto flex gap-4">
          <button className="flex-1 bg-primary hover:bg-blue-600 text-white font-bold py-4 rounded-custom transition-all shadow-lg shadow-blue-200 active:scale-[0.98]">
            Book Now
          </button>
        </div>
      </div>
      {/* END: BookingAction */}
    </section>
  );
};

export default page;