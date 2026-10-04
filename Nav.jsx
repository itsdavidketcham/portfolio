import React, { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { NAV_LINKS, PROFILE } from "../data/content";
import ThemeToggle from "./ThemeToggle";

export default function Nav({ activeId, scrolled, scrollTo, onOpenChat }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "nav-glass" : ""}`}>
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 h-16 flex items-center justify-between gap-4">
        <button onClick={() => scrollTo("home")} className="flex items-center gap-2.5 shrink-0" aria-label="Back to top">
          <span className="logo-mark">DS</span>
          <span className="hidden sm:inline text-sm font-medium text-primary tracking-tight">{PROFILE.fullName}</span>
        </button>

        <nav className="hidden lg:flex items-center gap-0.5" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`nav-link ${activeId === link.id ? "nav-link-active" : ""}`}
              aria-current={activeId === link.id ? "true" : undefined}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-2 shrink-0">
          <ThemeToggle />
          <button onClick={onOpenChat} className="btn-primary">
            <MessageCircle size={15} /> Ask David AI
          </button>
        </div>

        <div className="flex lg:hidden items-center gap-1">
          <ThemeToggle />
          <button
            className="icon-btn"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="lg:hidden nav-glass border-t border-hair px-6 py-4 flex flex-col gap-1" aria-label="Mobile">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                setMenuOpen(false);
                scrollTo(link.id);
              }}
              className={`text-left px-3 py-3 rounded-lg text-sm font-medium transition-colors ${
                activeId === link.id ? "text-primary bg-white/5" : "text-muted"
              }`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => {
              setMenuOpen(false);
              onOpenChat();
            }}
            className="btn-primary justify-center mt-2"
          >
            <MessageCircle size={15} /> Ask David AI
          </button>
        </nav>
      )}
    </header>
  );
}
