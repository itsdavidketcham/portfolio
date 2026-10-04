import React, { useEffect, useRef, useState } from "react";
import { MessageCircle, X, Send, Trash2, Sparkles } from "lucide-react";
import { SUGGESTED_QUESTIONS } from "../data/knowledgeBase";
import { getAnswer } from "../lib/chatEngine";

const GREETING = {
  role: "bot",
  text: "Hi, I'm David AI — ask me anything about David's studies, experience, projects or skills.",
};

/**
 * Controlled by `isOpen`/`onOpenChange` so the Nav and Hero
 * "Ask David AI" buttons can open the same panel this floating
 * button toggles.
 */
export default function DavidAI({ isOpen, onOpenChange }) {
  const [messages, setMessages] = useState([GREETING]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, isTyping]);

  const ask = async (question) => {
    const trimmed = question.trim();
    if (!trimmed || isTyping) return;
    setMessages((prev) => [...prev, { role: "user", text: trimmed }]);
    setInput("");
    setIsTyping(true);
    const answer = await getAnswer(trimmed);
    setIsTyping(false);
    setMessages((prev) => [...prev, { role: "bot", text: answer }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    ask(input);
  };

  const clearConversation = () => setMessages([GREETING]);

  return (
    <>
      <button
        onClick={() => onOpenChange(!isOpen)}
        className="btn-primary fixed bottom-6 right-6 z-[60] shadow-lg"
        aria-label={isOpen ? "Close David AI chat" : "Open David AI chat"}
        aria-expanded={isOpen}
      >
        {isOpen ? <X size={16} /> : <MessageCircle size={16} />}
        {!isOpen && "Ask David AI"}
      </button>

      {isOpen && (
        <div
          className="chat-panel fixed z-[65] bottom-0 right-0 sm:bottom-24 sm:right-6 w-full sm:w-96 h-[85vh] sm:h-[32rem] flex flex-col"
          role="dialog"
          aria-modal="true"
          aria-label="David AI chat"
        >
          <div className="flex items-center justify-between px-5 py-4 border-b border-hair">
            <div className="flex items-center gap-2">
              <Sparkles size={16} className="text-accent" />
              <span className="font-semibold text-primary text-sm">David AI</span>
            </div>
            <div className="flex items-center gap-1">
              <button onClick={clearConversation} className="icon-btn !w-8 !h-8" aria-label="Clear conversation" title="Clear conversation">
                <Trash2 size={14} />
              </button>
              <button onClick={() => onOpenChange(false)} className="icon-btn !w-8 !h-8" aria-label="Close chat">
                <X size={14} />
              </button>
            </div>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto px-5 py-4 space-y-3">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <p className={`${m.role === "user" ? "chat-bubble-user" : "chat-bubble-bot"} px-3.5 py-2.5 text-sm max-w-[85%] leading-relaxed`}>
                  {m.text}
                </p>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="chat-bubble-bot px-4 py-3 flex items-center gap-1.5">
                  <span className="typing-dot" />
                  <span className="typing-dot" />
                  <span className="typing-dot" />
                </div>
              </div>
            )}

            {messages.length === 1 && !isTyping && (
              <div className="flex flex-wrap gap-2 pt-2">
                {SUGGESTED_QUESTIONS.map((q) => (
                  <button key={q} onClick={() => ask(q)} className="tag hover:border-[var(--border-strong)] transition-colors">
                    {q}
                  </button>
                ))}
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="flex items-center gap-2 p-4 border-t border-hair">
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about David…"
              className="flex-1 bg-transparent border border-hair rounded-full px-4 py-2.5 text-sm text-primary placeholder:text-faint outline-none focus-visible:border-[var(--accent-1)]"
              aria-label="Ask David AI a question"
            />
            <button type="submit" className="btn-primary !px-3.5" disabled={!input.trim() || isTyping} aria-label="Send">
              <Send size={16} />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
