import React from "react";
import { Award } from "lucide-react";
import { EXPERIENCE, CERTIFICATIONS } from "../data/content";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32 px-6 sm:px-8 lg:px-10 section-tint">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <h2 className="heading-lg">Experience &amp; programmes</h2>
        </Reveal>

        <div className="relative mt-12 pl-8 space-y-6">
          <div className="timeline-line" aria-hidden="true" />
          {EXPERIENCE.map((role) => (
            <div key={role.org} className="relative">
              <span className="timeline-dot" aria-hidden="true" />
              <div className="card card-hover p-6 sm:p-7">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold text-primary">{role.org}</h3>
                    <p className="text-sm text-muted mt-0.5">{role.role}</p>
                  </div>
                  <span className="text-xs text-faint whitespace-nowrap pt-1">{role.period}</span>
                </div>
                <p className="text-secondary leading-relaxed mt-4">{role.body}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <p className="text-xs text-faint mb-4">Certifications</p>
          <div className="flex flex-wrap gap-4">
            {CERTIFICATIONS.map((cert) => (
              <div key={cert.title} className="card inline-flex items-center gap-2.5 px-4 py-3">
                <Award size={16} className="text-accent" />
                <span className="text-primary text-sm font-medium">{cert.title}</span>
                <span className="text-faint text-sm">— {cert.issuer}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
