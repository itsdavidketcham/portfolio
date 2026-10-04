# David Okai Sarpong — Portfolio (v3)

A from-scratch rebuild of the portfolio: multi-file, componentised, with
a real (if simple) "David AI" chatbot, dark/light mode, and a case-study
project system — built on the same React + Vite + Tailwind + Lucide
stack already in use.

---

## 1. Architecture, in short

```
src/
  data/
    content.js        ← every real fact on the site lives here
    knowledgeBase.js   ← the ONLY facts David AI is allowed to use
  lib/
    chatEngine.js       ← keyword-matches a question against knowledgeBase
    useInView.js         ← intersection-observer hook (section reveal)
    ThemeContext.jsx     ← dark/light state + localStorage persistence
  components/            ← one file per UI piece, all read from data/
  pages/
    Portfolio.jsx         ← assembles every section for "/"
    NotFound.jsx           ← the 404 page, for any other route
  App.jsx                  ← router + theme provider + global stylesheet
  main.jsx                 ← Vite entry point
  styles/theme.css          ← design tokens (dark + light) + shared classes
index.html                    ← SEO/OG/Twitter meta tags, favicon slot
public/images/                 ← where real photos go (see checklist below)
```

**Content vs. UI is fully separated.** Every component imports what it
needs from `content.js` — none of them hardcode a fact about David.
Update your bio, an internship, a project, or a link in that one file
and every section that shows it updates automatically.

**David AI is three layers, on purpose:**
1. `knowledgeBase.js` — the approved facts, as short keyword → answer
   entries.
2. `chatEngine.js` — matches a question's words against those keywords
   and returns the best match, or an honest "I don't have that
   information about David yet" if nothing matches. No model, no
   external call, nothing that can invent an answer.
3. `DavidAI.jsx` — pure UI: the floating button, the panel, the message
   list, the input. It only ever calls `getAnswer()` and renders
   whatever comes back.

That split is what makes it safe to upgrade later (see §6) without
touching the UI at all.

---

## 2. Every file this rebuild adds

| File | Purpose |
|---|---|
| `src/data/content.js` | All real content: profile, journey, education, experience, achievements, projects, skills, socials |
| `src/data/knowledgeBase.js` | David AI's approved knowledge base |
| `src/lib/chatEngine.js` | Chat response logic (local keyword matching) |
| `src/lib/useInView.js` | Reusable "has this scrolled into view" hook |
| `src/lib/ThemeContext.jsx` | Dark/light theme state + persistence |
| `src/components/Nav.jsx` | Sticky nav, scroll-spy, mobile menu, Ask David AI button |
| `src/components/ThemeToggle.jsx` | Dark/light toggle button |
| `src/components/Hero.jsx` | Hero section |
| `src/components/ImageFrame.jsx` | Reusable editorial image + placeholder fallback |
| `src/components/Reveal.jsx` | Section entrance-on-scroll wrapper |
| `src/components/PersonalIntro.jsx` | "More than the résumé" section |
| `src/components/Journey.jsx` | Matric → Rhodes → Internships timeline |
| `src/components/Education.jsx` | Education section |
| `src/components/Experience.jsx` | Experience & programmes timeline |
| `src/components/Achievements.jsx` | Achievements grouped by category |
| `src/components/Projects.jsx` | Project grid |
| `src/components/ProjectModal.jsx` | Case-study detail modal |
| `src/components/Skills.jsx` | Skills grouped by category |
| `src/components/Contact.jsx` | Contact CTA |
| `src/components/Footer.jsx` | Footer |
| `src/components/DavidAI.jsx` | The floating chatbot widget |
| `src/pages/Portfolio.jsx` | Assembles all sections into the main page |
| `src/pages/NotFound.jsx` | Custom 404 page |
| `src/App.jsx` | Router + theme provider + stylesheet import |
| `src/main.jsx` | Vite entry point |
| `src/styles/theme.css` | Design tokens (dark + light) and shared classes |
| `index.html` | SEO, Open Graph, Twitter card meta tags |
| `public/images/README.md` | Where to drop real photos |

---

## 3. Images you need to provide

See `public/images/README.md` for the full table — in short:

- `david-portrait.jpg`, `david-rhodes.jpg`, `david-hockey.jpg`,
  `david-coding.jpg` — personal photos
- `og-image.jpg` — 1200×630, used for link-preview cards on social/chat apps
- `projects/simulated-probability-models.jpg`,
  `projects/interactive-dom-utility.jpg`,
  `projects/relational-db-uml-engine.jpg` — one thumbnail per project

Until each file exists, that spot on the site shows a small labelled
placeholder rather than a broken image, so nothing looks unfinished —
you can drop in real photos whenever you have them, with no code changes.

---

## 4. Setup

This is a complete, ready-to-run project — `package.json`,
`vite.config.js`, `tailwind.config.js` and `postcss.config.js` are all
included, and this exact setup has been installed and built successfully
before being handed to you.

```bash
npm install
npm run dev        # local dev server, with hot reload
npm run build      # production build, output in dist/
npm run preview    # serve that production build locally to sanity-check it
```

**No environment variables are required right now** — David AI runs
entirely client-side against the local knowledge base.

If you're merging this into an *existing* project rather than using it
standalone, the only genuinely new dependency versus your last build is
`react-router-dom`; everything else was already there.

---

## 5. Instructions: what you still need to personalise

- [ ] Add the images listed above to `public/images/`
- [ ] Replace `SOCIALS.cvUrl: null` in `content.js` with a real path once
      you have a CV PDF in `public/` — the Contact button appears
      automatically once it's set
- [ ] Replace the placeholder domain in `index.html` and `SEO.canonicalUrl`
      (`content.js`) with your real domain once you have one
- [ ] Add a real favicon file at `public/favicon.ico`
- [ ] Fill in real GitHub repo links for each project in `PROJECTS` (they
      currently point at your GitHub profile as a placeholder) and a
      `demo` URL for any project with a live version
- [ ] Double-check every date, title and description in `content.js`
      still matches reality by the time you publish

---

## 6. Upgrading David AI to a real AI API later

Do **not** call an AI provider directly from this frontend — that would
put your API key in every visitor's browser dev tools.

1. Deploy a small serverless function (Vercel/Netlify function, or a
   Cloudflare Worker) that accepts `{ question }` and holds your AI
   provider's API key as a **server-side** environment variable.
2. Have that function pass `DAVID_KNOWLEDGE_BASE` (or the fuller
   `content.js`) to the model as context, so it's still constrained to
   real facts about David rather than free to invent anything.
3. In `src/lib/chatEngine.js`, replace the body of `getAnswer()` with a
   `fetch()` to that function's URL — e.g. reading the URL from
   `import.meta.env.VITE_CHAT_API_URL` — and fall back to
   `getLocalAnswer()` if the request fails. Nothing in `DavidAI.jsx` or
   any other component needs to change.

---

## 7. Notes on what wasn't fully built out

Being upfront about scope: SEO/accessibility/performance follow good
practice throughout (semantic sections and headings, `alt` text,
`aria-label`s, focus states, `prefers-reduced-motion` support, lazy-loaded
images, responsive layouts from ~360px up), but a genuine cross-browser
QA pass, Lighthouse audit, and testing on real devices at every listed
breakpoint is still worth doing yourself before publishing — that kind
of check depends on actually seeing it rendered, which isn't possible
from here.
