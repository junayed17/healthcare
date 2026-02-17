"use client"; // <--- MUST be the first line

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export function EmblaCarousel() {
  // We initialize the plugin inside the hook
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3000 }),
  ]);

  return (
    <div className="embla overflow-hidden" ref={emblaRef}>
      <div className="embla__container flex">
        <div className="embla__slide flex-[0_0_100%] min-w-0 bg-blue-50 p-10 text-center">
          <h2 className="text-2xl font-bold">
            Reliable Care for Your Loved Ones
          </h2>
          <p>Trusted caregiving for children and elderly.</p>
        </div>
        <div className="embla__slide flex-[0_0_100%] min-w-0 bg-green-50 p-10 text-center">
          <h2 className="text-2xl font-bold">Professional Support</h2>
          <p>Bringing expert help to your doorstep.</p>
        </div>
      </div>
    </div>
  );
}
