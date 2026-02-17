"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/effect-fade";

// Swiper modules
import {
  FreeMode,
  Navigation,
  Thumbs,
  Autoplay,
  EffectFade,
} from "swiper/modules";

// Apnar content gulo ekhane array hishebe rakha hoyeche
const slideData = [
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDITb1BvDeJ6beo7SM7a2usRmuWQLD_SCNdwU1GpsA7fDuVdvzwI3G5ZLwcVg8xi0i53Kvamt-fMhrmU7Lzt5VNDl--ed94Ndlt6j6XSrL3nVFwLeYYQIduhB9OpvRZHzUts_VMaQho1mKoc03nxAcVF96ajhjHfH_pw28F5z6azNKze69RZLeG5N4qRFMPXGJyt3OFSbMQYLoyFuHptjdgQ3J2V3u8VjF-2YeQxzXENPVGCnnUamrsPT3Ax6r44oTmT9cb73fC1g",
    title: "Reliable Care for Your Loved Ones",
    desc: "Trusted caregiving for children, elderly, and special needs. We bring professional support to your doorstep.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=1600",
    title: "Compassionate Support at Home",
    desc: "We provide personalized care plans tailored to the unique needs of your family members.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=1600",
    title: "Expertise You Can Trust",
    desc: "Our caregivers are highly trained professionals dedicated to improving quality of life.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?q=80&w=1600",
    title: "Expert Baby Care & Nurturing",
    desc: "Safe and loving care for your little ones. We ensure your child's growth and safety with professional attention.",
  }
];

export default function Slider() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <section className="@container max-w-[1400px] mx-auto">
      <div className="@[480px]:px-4 @[480px]:py-6">
        {/* Main Swiper Slider */}
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          loop={true}
          effect={"fade"}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          spaceBetween={10}
          navigation={true}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          modules={[FreeMode, Navigation, Thumbs, Autoplay, EffectFade]}
          className="mySwiper2 @[480px]:rounded-xl overflow-hidden shadow-xl"
        >
          {slideData.map((slide, index) => (
            <SwiperSlide key={index}>
              {/* Apnar Hero UI Design ekhane apply kora hoyeche */}
              <div className="relative flex flex-col justify-center items-start min-h-[500px] px-6 py-12">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover brightness-[0.5] dark:brightness-[0.3]"
                  />
                </div>

                {/* Content Overlay */}
                <div className="relative z-10 max-w-2xl space-y-6">
                  <h1 className="text-white text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
                    {slide.title}
                  </h1>
                  <p className="text-white/90 text-lg md:text-xl font-medium leading-relaxed max-w-lg">
                    {slide.desc}
                  </p>
                  <div className="flex flex-wrap gap-4 pt-4">
                    <button className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-lg h-14 px-8 bg-blue-600 text-white text-lg font-bold hover:bg-blue-700 transition-all shadow-lg">
                      Book Now
                    </button>
                    <button className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-lg h-14 px-8 bg-white/10 backdrop-blur-md text-white text-lg font-bold border border-white/20 hover:bg-white/20 transition-all">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Thumbnail Slider Design */}
        <div className="mt-4">
          <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={12}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper"
          >
            {slideData.map((slide, index) => (
              <SwiperSlide key={index} className="cursor-pointer">
                <div className="relative h-20 rounded-lg overflow-hidden border-2 border-transparent transition-all hover:border-blue-500 [.swiper-slide-thumb-active_&]:border-blue-500">
                  <img
                    src={slide.image}
                    className="w-full h-full object-cover"
                    alt="thumbnail"
                  />
                  <div className="absolute inset-0 bg-black/20 hover:bg-transparent transition-colors"></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
