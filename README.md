# Image checklist

Drop files with these exact names into this folder (`public/images/`) and
the site will pick them up automatically — nothing else needs to change.
Until a file exists at a given path, that spot on the site shows a
labelled placeholder instead of a broken image.

| File | Used in | Suggested shape |
|---|---|---|
| `david-portrait.jpg` | Hero | Portrait, 4:5 |
| `david-rhodes.jpg` | Personal intro + Education | Landscape or square |
| `david-hockey.jpg` | Personal intro | Square |
| `david-coding.jpg` | Personal intro | Square |
| `og-image.jpg` | Social share previews (link unfurling) | 1200×630 exactly |
| `projects/simulated-probability-models.jpg` | Projects — Simulated Probability Models | 16:10 |
| `projects/interactive-dom-utility.jpg` | Projects — Interactive DOM Web Utility | 16:10 |
| `projects/relational-db-uml-engine.jpg` | Projects — Relational DB & UML Engine | 16:10 |

If you want to change a caption, alt text, or which image goes where,
edit `src/data/content.js` — the file paths there are the only thing
tying an image to a spot on the page.
