import React from "react";
import { GraduationCap, MapPin } from "lucide-react";
import { EDUCATION } from "../data/content";
import ImageFrame from "./ImageFrame";
import Reveal from "./Reveal";

export default function Education() {
  return (
    <section className="py-24 sm:py-32 px-6 sm:px-8 lg:px-10">
      <Reveal className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-10 lg:gap-16 items-center">
        <div className="lg:col-span-2 order-2 lg:order-1">
          <ImageFrame src={EDUCATION.imageSrc} alt={EDUCATION.institution} ratio="4 / 3" />
        </div>

        <div className="lg:col-span-3 order-1 lg:order-2">
          <div className="icon-tile">
            <GraduationCap size={18} />
          </div>
          <h2 className="heading-lg mt-5">{EDUCATION.institution}</h2>
          <p className="text-secondary text-lg mt-2 flex items-center gap-1.5">
            <MapPin size={14} className="text-faint" /> {EDUCATION.location}
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {EDUCATION.majors.map((major) => (
              <span key={major} className="tag">
                {major}
              </span>
            ))}
          </div>

          <p className="text-primary text-xl font-semibold mt-6">
            {EDUCATION.degree} <span className="text-faint font-normal text-base">— {EDUCATION.year}</span>
          </p>
        </div>
      </Reveal>
    </section>
  );
}
