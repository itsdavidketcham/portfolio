import React from "react";
import { PERSONAL_INTRO } from "../data/content";
import ImageFrame from "./ImageFrame";
import Reveal from "./Reveal";

export default function PersonalIntro() {
  const [first, second, third] = PERSONAL_INTRO.images;

  return (
    <section id="about" className="py-24 sm:py-32 px-6 sm:px-8 lg:px-10">
      <Reveal className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <h2 className="heading-lg">{PERSONAL_INTRO.heading}</h2>
            <div className="mt-6 space-y-5 text-secondary text-lg leading-relaxed max-w-xl">
              {PERSONAL_INTRO.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>

          {/* Editorial image arrangement: one tall lead image, two
              smaller supporting images beneath — not an even grid. */}
          <div className="grid grid-cols-2 gap-4 sm:gap-5">
            <ImageFrame src={first.src} alt={first.alt} caption={first.caption} ratio="3 / 4" className="col-span-2" />
            <ImageFrame src={second.src} alt={second.alt} caption={second.caption} ratio="1 / 1" />
            <ImageFrame src={third.src} alt={third.alt} caption={third.caption} ratio="1 / 1" />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
