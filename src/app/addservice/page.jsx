"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaChevronCircleDown } from "react-icons/fa";

const page = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [img, setImg] = useState(
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBek3Ic9Z6otFNO1FIt5qkMre1tTK2X8AXuCyA2ywTiTtKwink9XTTaJTgzk4Yd4469o3P5d85tUuZrjUhK1MX0oyArSgLeMRhyGqeBPStSKKRWZ1R-klEmc7U1x6CxcRB2Jb7L9S5NYFHNtFN_gDITHzayWbTTRLOiCuXc9wKfQR8aDoqlGKlfiEL0SwkyRiZbhmtfjao2CV-tzUSZ1sNoBprNFiuIYZcY-d1QW_8Q1JmHMsAJqOBjuln-76WazOaYn6Jn5_ER1Q",
  );
  const imageUrl = watch("serviceImg");


 function formData(data) {
   fetch("http://localhost:3000/api", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(data),
   })
     .then((res) => res.json())
     .then((result) => {
       result.final.insertedId?alert("Data Added"):alert("something wrong")
     })
     .catch((error) => {
       alert("Error:", error);
     });
 }


  return (
    <section className="w-full max-w-[480px] mx-auto bg-white dark:bg-slate-900 rounded-xl shadow-sm overflow-hidden flex flex-col my-4">
      <header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 py-4 flex items-center justify-between">
        <h1 className="text-lg font-bold flex-1 text-center pr-10">
          Add New Service
        </h1>
      </header>
      <main className="max-w-md mx-auto p-4 pb-24 ">
        <form className="space-y-6" onSubmit={handleSubmit(formData)}>
          {/* Basic Information Section */}
          <section className="space-y-4">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Basic Information
            </h2>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">Service Name</label>
              <input
                className="w-full h-12 px-4 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                placeholder="e.g. Specialized Elderly Care"
                type="text"
                {...register("name", { required: true })}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">Category</label>
              <div className="relative">
                <select
                  className="w-full h-12 px-4 appearance-none rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                  {...register("category", { required: true })}
                >
                  <option disabled="" selected="" value="">
                    Select Category
                  </option>
                  <option value="baby">Baby Care</option>
                  <option value="elderly">Elderly Care</option>
                  <option value="sick">Sick People Care</option>
                </select>
                <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                  <FaChevronCircleDown />
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">Description</label>
              <textarea
                className="w-full min-h-[120px] p-4 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all resize-none"
                minLength={20}
                placeholder="Provide details about your service (minimum 20 characters)..."
                required=""
                defaultValue={""}
                {...register("description", { required: true })}
              />
              <p className="text-xs text-slate-500 text-right">
                0 / 20 characters min.
              </p>
            </div>
          </section>
          {/* Caregiver Details Section */}
          <section className="space-y-4">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Professional Details
            </h2>
            <div className="grid grid-cols-1 gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">
                  Experience (Years)
                </label>
                <div className="relative">
                  <input
                    className="w-full h-12 pl-4 pr-12 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                    min={0}
                    placeholder={5}
                    type="number"
                    {...register("experience", { required: true })}
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm">
                    Yrs
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">Skills</label>
                <input
                  className="w-full h-12 px-4 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                  placeholder="CPR, First Aid, Cooking, Dementia Care"
                  type="text"
                  {...register("skills", { required: true })}
                />
                <p className="text-xs text-slate-500">
                  Separate skills with commas
                </p>
              </div>
            </div>
          </section>
          {/* Pricing Section */}
          <section className="space-y-4">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Pricing
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">Per Hour ($)</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                    $
                  </span>
                  <input
                    className="w-full h-12 pl-8 pr-4 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                    min={1}
                    placeholder={25.0}
                    step="0.01"
                    type="number"
                    {...register("perhour", { required: true })}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">Per Day ($)</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                    $
                  </span>
                  <input
                    className="w-full h-12 pl-8 pr-4 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                    min={1}
                    placeholder={180.0}
                    step="0.01"
                    type="number"
                    {...register("perday", { required: true })}
                  />
                </div>
              </div>
            </div>
          </section>
          {/* Media Section */}
          <section className="space-y-4">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Media &amp; Visibility
            </h2>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">Service Image URL</label>
              <input
                className="w-full h-12 px-4 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                placeholder="https://images.unsplash.com/..."
                onChange={(e) => setImg(e.target.value)}
                type="url"
                {...register("serviceImg", { required: true })}
              />
            </div>
            <div className="flex items-center justify-between p-4 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <div>
                <p className="font-medium">Active Availability</p>
                <p className="text-xs text-slate-500">
                  Show this service to potential clients now
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  defaultChecked=""
                  className="sr-only peer"
                  type="checkbox"
                  defaultValue=""
                  {...register("availability", { required: true })}
                />
                <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary" />
              </label>
            </div>
          </section>
          {/* Image Preview Placeholder */}
          {/* <div className="w-full aspect-video rounded-xl bg-slate-200 dark:bg-slate-800 flex flex-col items-center justify-center border-2 border-dashed border-slate-300 dark:border-slate-700 overflow-hidden">
            <img
              className="w-full h-full object-cover opacity-60"
              data-alt="Modern healthcare facility interior or professional caregiver workspace"
              src={img || imageUrl}
            />
            <div className="absolute flex flex-col items-center text-slate-600 dark:text-slate-400">
              <span className="material-symbols-outlined text-4xl">image</span>
              <span className="text-sm mt-2">Image Preview</span>
            </div>
          </div> */}
          {/* Submit Button Container */}
          <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 max-w-md mx-auto">
            <button
              className="w-full h-14 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl transition-all shadow-lg shadow-primary/20 active:scale-[0.98]"
              type="submit"
            >
              Create Service
            </button>
          </div>
        </form>
      </main>
    </section>
  );
};

export default page;
