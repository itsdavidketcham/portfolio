import React, { useCallback, useEffect, useState } from "react";
import { NAV_LINKS } from "../data/content";
import { useTheme } from "../lib/ThemeContext";

import Nav from "../components/Nav";
import Hero from "../components/Hero";
import PersonalIntro from "../components/PersonalIntro";
import Journey from "../components/Journey";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Achievements from "../components/Achievements";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import DavidAI from "../components/DavidAI";

const SECTION_IDS = NAV_LINKS.map((l) => l.id);

function useScrollState(ids) {
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState(ids[0]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { scrolled, activeId };
}

export default function Portfolio() {
  const { theme } = useTheme();
  const { scrolled, activeId } = useScrollState(SECTION_IDS);
  const [chatOpen, setChatOpen] = useState(false);

  const scrollTo = useCallback((id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const openChat = useCallback(() => setChatOpen(true), []);

  return (
    <div className="portfolio-root" data-theme={theme}>
      <Nav activeId={activeId} scrolled={scrolled} scrollTo={scrollTo} onOpenChat={openChat} />

      <main>
        <Hero scrollTo={scrollTo} onOpenChat={openChat} />
        <PersonalIntro />
        <Journey />
        <Education />
        <Experience />
        <Projects />
        <Achievements />
        <Skills />
        <Contact />
      </main>

      <Footer />

      <DavidAI isOpen={chatOpen} onOpenChange={setChatOpen} />
    </div>
  );
}
