import React from "react";
import { Code2, Globe, LineChart, Sigma, Database, Wrench } from "lucide-react";
import { SKILLS } from "../data/content";
import Reveal from "./Reveal";

const CATEGORY_ICON = {
  Programming: Code2,
  "Web Development": Globe,
  "Data & Statistics": LineChart,
  Mathematics: Sigma,
  Databases: Database,
  Tools: Wrench,
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32 px-6 sm:px-8 lg:px-10 section-tint">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <h2 className="heading-lg">Skills</h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {Object.entries(SKILLS).map(([category, items]) => {
            const Icon = CATEGORY_ICON[category] || Code2;
            return (
              <div key={category} className="card p-6 sm:p-7">
                <div className="icon-tile">
                  <Icon size={18} />
                </div>
                <h3 className="text-primary font-semibold mt-5">{category}</h3>
                <ul className="mt-4 divide-y divide-hair">
                  {items.map((item) => (
                    <li key={item} className="py-3 first:pt-0 last:pb-0 text-secondary flex items-center gap-2.5">
                      <span className="dot" />
                      {item}
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
