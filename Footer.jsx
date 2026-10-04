import React from "react";
import { Mail, Linkedin, Github } from "lucide-react";
import { SOCIALS, PROFILE } from "../data/content";

export default function Footer() {
  return (
    <footer className="border-t border-hair py-8 px-6 sm:px-8 lg:px-10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left">
          <p className="text-faint text-sm">© {new Date().getFullYear()} {PROFILE.fullName}</p>
          <p className="text-faint text-xs mt-0.5">Built with React · Designed &amp; built by David Sarpong</p>
        </div>
        <div className="flex items-center gap-5">
          <a href={`mailto:${SOCIALS.email}`} aria-label="Email" className="text-faint hover:text-accent transition-colors">
            <Mail size={17} />
          </a>
          <a
            href={SOCIALS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-faint hover:text-accent transition-colors"
          >
            <Linkedin size={17} />
          </a>
          <a
            href={SOCIALS.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-faint hover:text-accent transition-colors"
          >
            <Github size={17} />
          </a>
        </div>
      </div>
    </footer>
  );
}
