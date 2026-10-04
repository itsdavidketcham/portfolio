/**
 * SITE CONTENT
 * -----------------------------------------------------------
 * Every real fact on the site lives here. To update your bio,
 * experience, projects, skills or links, edit this file only —
 * no component code needs to change.
 *
 * Nothing in here is invented. Anything you haven't told
 * Claude about yet is left out rather than guessed at — add it
 * here when you have it.
 * -----------------------------------------------------------
 */

export const SEO = {
  title: "David Okai Sarpong — Mathematics, Statistics & Technology",
  description:
    "Personal portfolio of David Okai Sarpong, a Rhodes University undergraduate studying Mathematical Statistics, Mathematics and Information Systems.",
  ogImage: "/images/og-image.jpg", // 1200x630 recommended
  canonicalUrl: "https://www.davidsarpong.com", // TODO: replace with your real domain
};

export const PROFILE = {
  fullName: "David Okai Sarpong",
  shortName: "David",
  badge: "Rhodes University · BSc Undergraduate",
  position: "Mathematics, statistics, and the technology built on top of both.",
  intro:
    "I'm an undergraduate at Rhodes University working toward a BSc in Mathematical Statistics, Mathematics and Information Systems. Most of what I build outside lectures is an extension of that — turning a proof or a dataset into something that actually runs.",
  location: "Makhanda, Eastern Cape, South Africa",
  portraitSrc: "/images/david-portrait.jpg",
};

export const PERSONAL_INTRO = {
  heading: "More than the résumé",
  paragraphs: [
    "I was born in Ghana and moved to South Africa as a child. School, a gap year and then Rhodes followed — none of it background trivia to me, it's the start of the actual story.",
    "Outside of coursework I play midfielder for the Rhodes University Hockey First Team, serve as the Internationalization Representative for Founders Hall (Botha House), and work as an academic peer mentor. Some weeks hockey is the release from problem sets; other weeks it's the thing I have to protect time for around them.",
    "I'm curious about the same handful of things from a few different angles: mathematics, statistics, data, and the software built on top of all three.",
  ],
  images: [
    { src: "/images/david-rhodes.jpg", alt: "David at Rhodes University", caption: "Rhodes University, Makhanda" },
    { src: "/images/david-hockey.jpg", alt: "David playing hockey", caption: "First Team hockey, midfielder" },
    { src: "/images/david-coding.jpg", alt: "David working on a laptop", caption: "Turning coursework into code" },
  ],
};

// Ordered milestones for the journey timeline. `open: true` marks
// the one milestone still in progress (rendered with a dashed marker).
export const JOURNEY = [
  {
    title: "Matric",
    detail: "Finished school and matriculated, after primary schooling at Queen's College Boys Primary School.",
  },
  { title: "Gap year", detail: "Took a year out before starting university." },
  {
    title: "Rhodes University",
    detail: "Enrolled in a BSc — Mathematical Statistics, Mathematics and Information Systems.",
    meta: "Second year · Makhanda, Eastern Cape",
  },
  {
    title: "Internships",
    detail: "Future Interns, Codveda Technologies and the FNB App Academy — turning coursework into applied experience.",
  },
  {
    title: "Projects",
    detail: "A small but growing set of projects: simulations, a relational database engine, and interactive web tools.",
  },
  { title: "Future", detail: "Still being written.", open: true },
];

export const EDUCATION = {
  institution: "Rhodes University",
  degree: "BSc",
  majors: ["Mathematical Statistics", "Mathematics", "Information Systems"],
  year: "Second year",
  location: "Makhanda, Eastern Cape",
  imageSrc: "/images/david-rhodes.jpg",
};

// Add future roles to the top of this array — the layout scales
// automatically.
export const EXPERIENCE = [
  {
    org: "FNB App Academy",
    role: "Programme Participant",
    period: "Jul – Sep 2026",
    body: "Selected for the FNB App Academy, a hands-on programme built around practical, industry-relevant technology and problem-solving skills.",
  },
  {
    org: "Codveda Technologies",
    role: "Data Analysis Intern",
    period: "Jul – Aug 2026",
    body: "Spent the winter break as a Data Analysis Intern at Codveda Technologies, applying statistical methods and analytical tooling to real datasets outside of a classroom setting.",
  },
  {
    org: "JSE Investment Challenge",
    role: "2026 Cohort",
    period: "May 2026 – Present",
    body: "Running a simulated portfolio — applying statistics and quantitative thinking to real market conditions, without the real financial risk.",
  },
  {
    org: "Future Interns",
    role: "Data Analytics Internship (Remote)",
    period: "May 2026",
    body: "A first dive into data work outside a classroom — cleaning and joining relational datasets in Python and Pandas to trace a baseline customer churn rate of about 22%.",
  },
];

export const CERTIFICATIONS = [
  { title: "MATLAB Onramp", issuer: "MathWorks" },
  { title: "Statistics Onramp", issuer: "MathWorks" },
];

// Categorised so the Achievements section can group by type.
export const ACHIEVEMENTS = {
  Academic: [{ title: "Primary school", detail: "Graduated Cum Laude from Queen's College Boys Primary School." }],
  Leadership: [
    { title: "Internationalization Representative", detail: "Founders Hall (Botha House), Rhodes University." },
    { title: "Academic Peer Mentor", detail: "Mentoring peers and tutoring Grade 11 students." },
  ],
  Sport: [
    { title: "Hockey — First Team", detail: "Midfielder for the Rhodes University Hockey First Team; 3rd place at USSA." },
    { title: "Hockey — Half Colours", detail: "Awarded at provincial Under-13 level." },
  ],
  Competitions: [{ title: "World Scholar's Cup", detail: "Qualified for the Global Round; placed Top 50." }],
  Professional: [
    { title: "MATLAB & Statistics Onramp", detail: "MathWorks certifications." },
    { title: "Codveda Technologies", detail: "Completed a Data Analysis internship." },
    { title: "FNB App Academy", detail: "Selected as a programme participant." },
  ],
};

// Case-study style project data. `github`/`demo` default to null —
// fill them in once a project has a real link; the UI hides
// whichever button has no URL.
export const PROJECTS = [
  {
    slug: "simulated-probability-models",
    title: "Simulated Probability Models",
    tagline: "Making probability theory something you can watch play out.",
    image: "/images/projects/simulated-probability-models.jpg",
    tags: ["R", "Python", "Statistics"],
    problem: "Probability theory can feel abstract until you can actually watch it play out over many trials.",
    approach:
      "Built a set of simulations in R and Python modelling different probability distributions and stochastic processes, running them at scale to see theoretical results converge in practice.",
    result: "A working set of simulations that turn coursework concepts into something concrete and repeatable.",
    learned: "How much intuition simulation adds on top of the maths — seeing a distribution converge is different from proving it will.",
    github: "https://github.com/itsdavidketcham",
    demo: null,
  },
  {
    slug: "interactive-dom-web-utility",
    title: "Interactive DOM Web Utility",
    tagline: "DOM manipulation without a framework to lean on.",
    image: "/images/projects/interactive-dom-utility.jpg",
    tags: ["JavaScript", "HTML", "CSS"],
    problem: "Frameworks hide a lot of what's actually happening in the browser.",
    approach: "Built a small interactive utility with vanilla JavaScript, HTML and CSS, handling state and events directly against the DOM.",
    result: "A working utility, and a much clearer picture of what a framework is actually doing for you underneath.",
    learned: "Where the DOM's own APIs are enough, and where a framework starts to earn its keep.",
    github: "https://github.com/itsdavidketcham",
    demo: null,
  },
  {
    slug: "relational-db-uml-engine",
    title: "Relational DB & UML Engine",
    tagline: "Structure modelled before a single table existed.",
    image: "/images/projects/relational-db-uml-engine.jpg",
    tags: ["SQL", "UML"],
    problem: "Bad structure upstream in a database causes pain downstream in every query built on top of it.",
    approach: "Modelled the schema in UML first, then implemented it as a relational database in SQL.",
    result: "A relational database with a clear, documented structure that's easy to extend without breaking existing queries.",
    learned: "How much easier the SQL is to write once the relationships are actually settled on paper first.",
    github: "https://github.com/itsdavidketcham",
    demo: null,
  },
];

// Six categories, matching how David actually thinks about his
// toolkit — not a percentage bar in sight.
export const SKILLS = {
  Programming: ["Python", "R", "MATLAB"],
  "Web Development": ["JavaScript (ES6+)", "HTML", "CSS"],
  "Data & Statistics": ["Statistical Modelling", "Data Visualisation"],
  Mathematics: ["Multivariable Calculus", "Differential Equations"],
  Databases: ["SQL"],
  Tools: ["Git", "UML"],
};

export const SOCIALS = {
  email: "davidsarpong405@gmail.com",
  linkedin: "https://www.linkedin.com/in/david-sarpong-690a002a4",
  github: "https://github.com/itsdavidketcham",
  // TODO: add a real CV file to /public and update this path once it exists.
  cvUrl: null,
};

export const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "journey", label: "Journey" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "achievements", label: "Achievements" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];
