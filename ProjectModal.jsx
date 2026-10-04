import React, { useEffect, useRef } from "react";
import { X, Github, ExternalLink } from "lucide-react";
import ImageFrame from "./ImageFrame";

export default function ProjectModal({ project, onClose }) {
  const closeButtonRef = useRef(null);

  // Focus the close button on open, and let Escape dismiss —
  // basic modal accessibility without adding a dialog library.
  useEffect(() => {
    closeButtonRef.current?.focus();
    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[70] flex items-start sm:items-center justify-center p-4 sm:p-8 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} aria-hidden="true" />

      <div className="chat-panel relative w-full max-w-2xl p-6 sm:p-9 my-8">
        <button ref={closeButtonRef} onClick={onClose} className="icon-btn absolute top-5 right-5" aria-label="Close">
          <X size={18} />
        </button>

        <ImageFrame src={project.image} alt={project.title} ratio="16 / 9" />

        <h2 id="project-modal-title" className="text-2xl font-semibold text-primary mt-6">
          {project.title}
        </h2>
        <p className="text-secondary mt-2">{project.tagline}</p>

        <div className="flex flex-wrap gap-2 mt-4">
          {project.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>

        <dl className="mt-7 space-y-5">
          {[
            ["Problem", project.problem],
            ["Approach", project.approach],
            ["Result", project.result],
            ["What I learned", project.learned],
          ].map(([label, value]) => (
            <div key={label}>
              <dt className="text-xs uppercase tracking-wide text-faint">{label}</dt>
              <dd className="text-secondary leading-relaxed mt-1.5">{value}</dd>
            </div>
          ))}
        </dl>

        <div className="flex flex-wrap gap-3 mt-8">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-ghost">
              <Github size={16} /> View code
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <ExternalLink size={16} /> Live demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
