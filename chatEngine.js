/**
 * CHAT ENGINE
 * -----------------------------------------------------------
 * Turns a visitor's question into an answer, using ONLY
 * DAVID_KNOWLEDGE_BASE. This is intentionally simple — no
 * external calls, no model, nothing that can hallucinate.
 *
 * ---- Upgrading to a real AI API later ----
 * When you're ready to make David AI smarter:
 *
 * 1. Never call an AI provider directly from this frontend code
 *    — that would expose your API key to anyone who opens dev
 *    tools. Instead, deploy a small serverless function (e.g. a
 *    Vercel/Netlify function or a Cloudflare Worker) that holds
 *    the API key as a server-side environment variable.
 *
 * 2. That function should accept { question } and internally
 *    call your AI provider with DAVID_KNOWLEDGE_BASE (or the
 *    fuller content.js) as context, so it still can't invent
 *    facts about David that aren't in your data.
 *
 * 3. Replace the body of `getLocalAnswer` below with a fetch to
 *    that function's URL (e.g. import.meta.env.VITE_CHAT_API_URL),
 *    and keep `getLocalAnswer` around as an offline fallback if
 *    the request fails.
 *
 * Everything above `getLocalAnswer` — the UI, the knowledge base
 * shape, the suggested questions — stays exactly the same either
 * way, which is why the split exists.
 * -----------------------------------------------------------
 */

import { DAVID_KNOWLEDGE_BASE, FALLBACK_ANSWER } from "../data/knowledgeBase";

function normalise(text) {
  return text.toLowerCase().trim();
}

/**
 * Scores every knowledge-base entry against the question by
 * counting keyword matches, and returns the best match's answer
 * (or the fallback if nothing scores above zero).
 */
export function getLocalAnswer(question) {
  const q = normalise(question);
  if (!q) return FALLBACK_ANSWER;

  let bestEntry = null;
  let bestScore = 0;

  Object.values(DAVID_KNOWLEDGE_BASE).forEach((entry) => {
    const score = entry.keywords.reduce((count, keyword) => (q.includes(keyword) ? count + 1 : count), 0);
    if (score > bestScore) {
      bestScore = score;
      bestEntry = entry;
    }
  });

  return bestEntry ? bestEntry.answer : FALLBACK_ANSWER;
}

/**
 * Public entry point the UI calls. Currently just wraps the
 * local matcher in a short artificial delay so the typing
 * indicator has something to show — swap the body for a fetch()
 * to your serverless function when you're ready (see notes
 * above), and this signature won't need to change.
 */
export async function getAnswer(question) {
  await new Promise((resolve) => setTimeout(resolve, 450));
  return getLocalAnswer(question);
}
