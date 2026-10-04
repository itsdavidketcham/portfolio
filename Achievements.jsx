import React from "react";
import { Trophy, Users, Medal, Puzzle, Briefcase } from "lucide-react";
import { ACHIEVEMENTS } from "../data/content";
import Reveal from "./Reveal";

const CATEGORY_ICON = {
  Academic: Trophy,
  Leadership: Users,
  Sport: Medal,
  Competitions: Puzzle,
  Professional: Briefcase,
};

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 sm:py-32 px-6 sm:px-8 lg:px-10">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <h2 className="heading-lg">A few milestones</h2>
          <p className="text-secondary mt-4 max-w-lg leading-relaxed">Not everything — just the pieces that stuck.</p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {Object.entries(ACHIEVEMENTS).map(([category, items]) => {
            const Icon = CATEGORY_ICON[category] || Trophy;
            return (
              <div key={category} className="card p-6 sm:p-7">
                <div className="icon-tile">
                  <Icon size={18} />
                </div>
                <h3 className="text-primary font-semibold mt-5">{category}</h3>
                <ul className="mt-4 divide-y divide-hair">
                  {items.map((item) => (
                    <li key={item.title} className="py-3 first:pt-0 last:pb-0">
                      <p className="text-primary text-sm font-medium">{item.title}</p>
                      <p className="text-muted text-sm mt-0.5 leading-relaxed">{item.detail}</p>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
