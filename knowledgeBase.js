/**
 * DAVID_KNOWLEDGE_BASE
 * -----------------------------------------------------------
 * The ONLY facts the David AI chatbot is allowed to draw on.
 * It is built from the same data in `content.js`, reshaped into
 * short, chat-friendly answers.
 *
 * If you want the chatbot to be able to answer a new question,
 * add the fact here (or to content.js and reference it here) —
 * do not let the chat engine guess or fill gaps on its own.
 * See src/lib/chatEngine.js for how this object is matched
 * against a visitor's question.
 * -----------------------------------------------------------
 */

import { PROFILE, EDUCATION, EXPERIENCE, PROJECTS, SKILLS, ACHIEVEMENTS, SOCIALS } from "./content";

export const DAVID_KNOWLEDGE_BASE = {
  identity: {
    keywords: ["who", "about david", "introduce", "yourself"],
    answer:
      "David Okai Sarpong is an undergraduate at Rhodes University studying Mathematical Statistics, Mathematics and Information Systems. He's interested in the overlap between mathematics, statistics and software.",
  },

  education: {
    keywords: ["study", "studying", "university", "degree", "school", "major", "rhodes"],
    answer: `David studies a BSc in ${EDUCATION.majors.join(", ")} at ${EDUCATION.institution} (${EDUCATION.year}), in ${EDUCATION.location}.`,
  },

  experience: {
    keywords: ["experience", "internship", "intern", "work", "job", "codveda", "fnb", "programme", "program"],
    answer:
      "David's experience includes: " +
      EXPERIENCE.map((e) => `${e.role} at ${e.org} (${e.period})`).join("; ") +
      ".",
  },

  projects: {
    keywords: ["project", "projects", "build", "built", "github", "code"],
    answer:
      "David's projects include: " +
      PROJECTS.map((p) => `${p.title} (${p.tags.join(", ")})`).join("; ") +
      ". You can see all of them in the Projects section above.",
  },

  skills: {
    keywords: ["skill", "skills", "language", "languages", "tech stack", "tools", "python", "r ", "matlab", "sql"],
    answer:
      "David's skills, by category: " +
      Object.entries(SKILLS)
        .map(([category, items]) => `${category} — ${items.join(", ")}`)
        .join("; ") +
      ".",
  },

  achievements: {
    keywords: ["achievement", "achievements", "award", "awards", "world scholar", "colours"],
    answer:
      "A few of David's achievements: " +
      Object.values(ACHIEVEMENTS)
        .flat()
        .map((a) => a.title)
        .join("; ") +
      ".",
  },

  leadership: {
    keywords: ["leadership", "lead", "botha", "founders hall", "mentor", "representative"],
    answer:
      "David is the Internationalization Representative for Founders Hall (Botha House) at Rhodes University, and works as an academic peer mentor.",
  },

  sport: {
    keywords: ["hockey", "sport", "sports", "team", "ussa"],
    answer:
      "David plays midfielder for the Rhodes University Hockey First Team, which placed 3rd at USSA. He was also awarded Half Colours for hockey at provincial Under-13 level.",
  },

  interests: {
    keywords: ["interest", "interests", "hobby", "hobbies", "passion", "care about"],
    answer:
      "David is interested in mathematics, statistics, data, technology and hockey — usually thinking about more than one of them at the same time.",
  },

  contact: {
    keywords: ["contact", "reach", "email", "get in touch", "hire", "opportunity"],
    answer: `The best way to reach David is by email at ${SOCIALS.email}, or via LinkedIn.`,
  },

  social: {
    keywords: ["linkedin", "github", "social", "profile", "links"],
    answer: `David's LinkedIn: ${SOCIALS.linkedin} — GitHub: ${SOCIALS.github}.`,
  },

  location: {
    keywords: ["where", "located", "based", "live", "from"],
    answer: `David is originally from Ghana and is currently based in ${PROFILE.location}.`,
  },

  future: {
    keywords: ["future", "career", "goal", "goals", "plan", "plans", "next"],
    answer:
      "David wants to work somewhere mathematics and technology genuinely overlap — he's still figuring out exactly what that looks like, one internship and one project at a time.",
  },
};

// Shown as tappable suggestions when the chat first opens.
export const SUGGESTED_QUESTIONS = [
  "What does David study?",
  "Tell me about David's projects.",
  "What programming languages does he use?",
  "How can I contact David?",
];

export const FALLBACK_ANSWER = "I don't have that information about David yet — try asking about his studies, experience, projects, skills or how to get in touch.";
