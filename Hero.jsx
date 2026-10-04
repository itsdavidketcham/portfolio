import React from "react";
import { ArrowRight, MessageCircle } from "lucide-react";
import { PROFILE } from "../data/content";
import ImageFrame from "./ImageFrame";

export default function Hero({ scrollTo, onOpenChat }) {
  return (
    <section id="home" className="hero relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28 px-6 sm:px-8 lg:px-10">
      <div className="glow" aria-hidden="true" />

      <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-3 text-center lg:text-left">
          <span className="hero-in badge" style={{ animationDelay: "0.05s" }}>
            {PROFILE.badge}
          </span>

          <h1 className="hero-in heading-xl mt-6" style={{ animationDelay: "0.15s" }}>
            {PROFILE.fullName}
          </h1>

          <p
            className="hero-in text-lg sm:text-xl text-secondary mt-6 max-w-lg mx-auto lg:mx-0 leading-relaxed"
            style={{ animationDelay: "0.25s" }}
          >
            {PROFILE.position}
          </p>

          <p
            className="hero-in text-base text-muted mt-4 max-w-lg mx-auto lg:mx-0 leading-relaxed"
            style={{ animationDelay: "0.32s" }}
          >
            {PROFILE.intro}
          </p>

          <div
            className="hero-in flex flex-wrap items-center justify-center lg:justify-start gap-3 mt-9"
            style={{ animationDelay: "0.42s" }}
          >
            <button onClick={() => scrollTo("projects")} className="btn-primary">
              View my work <ArrowRight size={16} />
            </button>
            <button onClick={() => scrollTo("contact")} className="btn-ghost">
              Get in touch
            </button>
            <button onClick={onOpenChat} className="btn-ghost">
              <MessageCircle size={16} /> Ask David AI
            </button>
          </div>
        </div>

        <div className="hero-in lg:col-span-2" style={{ animationDelay: "0.2s" }}>
          <ImageFrame src={PROFILE.portraitSrc} alt={PROFILE.fullName} ratio="4 / 5" className="max-w-xs mx-auto lg:max-w-none" />
        </div>
      </div>
    </section>
  );
}
