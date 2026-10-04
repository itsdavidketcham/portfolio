import React from "react";
import { JOURNEY } from "../data/content";
import Reveal from "./Reveal";

export default function Journey() {
  return (
    <section id="journey" className="py-24 sm:py-32 px-6 sm:px-8 lg:px-10 section-tint">
      <div className="max-w-3xl mx-auto">
        <Reveal>
          <h2 className="heading-lg">My journey, so far</h2>
        </Reveal>

        <ol className="relative mt-12 pl-8 space-y-10">
          <div className="timeline-line" aria-hidden="true" />
          {JOURNEY.map((step) => (
            <li key={step.title} className="relative">
              <span className={step.open ? "timeline-dot-open" : "timeline-dot"} aria-hidden="true" />
              <h3 className="text-primary font-semibold text-lg">{step.title}</h3>
              {step.meta && <p className="text-faint text-xs mt-0.5">{step.meta}</p>}
              <p className="text-secondary leading-relaxed mt-1.5">{step.detail}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
