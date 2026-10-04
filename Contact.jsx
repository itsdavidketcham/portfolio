import React from "react";
import { Mail, Linkedin, Github, Download } from "lucide-react";
import { SOCIALS } from "../data/content";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32 px-6 sm:px-8 lg:px-10">
      <Reveal className="max-w-2xl mx-auto text-center">
        <h2 className="heading-lg">Have an idea, opportunity or project?</h2>
        <p className="text-secondary mt-4 leading-relaxed">
          Open to internships, graduate opportunities and interesting conversations about data, statistics or
          software. The fastest way to reach me is email.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 mt-9">
          <a href={`mailto:${SOCIALS.email}`} className="btn-primary">
            <Mail size={16} /> Email me
          </a>
          <a href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer" className="btn-ghost">
            <Linkedin size={16} /> LinkedIn
          </a>
          <a href={SOCIALS.github} target="_blank" rel="noopener noreferrer" className="btn-ghost">
            <Github size={16} /> GitHub
          </a>
          {SOCIALS.cvUrl && (
            <a href={SOCIALS.cvUrl} download className="btn-ghost">
              <Download size={16} /> Download CV
            </a>
          )}
        </div>
      </Reveal>
    </section>
  );
}
