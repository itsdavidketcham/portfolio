import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "../data/content";
import ImageFrame from "./ImageFrame";
import ProjectModal from "./ProjectModal";
import Reveal from "./Reveal";

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section id="projects" className="py-24 sm:py-32 px-6 sm:px-8 lg:px-10">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <h2 className="heading-lg">Projects</h2>
          <p className="text-secondary mt-4 max-w-lg leading-relaxed">
            A few of the things I've built to make coursework concepts concrete. Click any of them for the full story.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {PROJECTS.map((project) => (
            <button
              key={project.slug}
              onClick={() => setActiveProject(project)}
              className="card card-hover text-left flex flex-col overflow-hidden group"
            >
              <ImageFrame src={project.image} alt={project.title} ratio="16 / 10" frameClassName="!rounded-b-none" />
              <div className="p-6 sm:p-7 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold text-primary">{project.title}</h3>
                  <ArrowUpRight
                    size={16}
                    className="text-faint shrink-0 mt-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </div>
                <p className="text-secondary leading-relaxed mt-2 flex-1">{project.tagline}</p>
                <div className="flex flex-wrap gap-2 mt-5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {activeProject && <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />}
    </section>
  );
}
