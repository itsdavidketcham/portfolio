import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useTheme } from "../lib/ThemeContext";

export default function NotFound() {
  const { theme } = useTheme();
  return (
    <div className="portfolio-root min-h-screen flex items-center justify-center px-6 text-center" data-theme={theme}>
      <div>
        <span className="badge">404</span>
        <h1 className="heading-lg mt-6">Looks like you've wandered off.</h1>
        <p className="text-secondary mt-4 max-w-sm mx-auto leading-relaxed">
          This page doesn't exist — but the rest of the site does.
        </p>
        <Link to="/" className="btn-primary inline-flex mt-8">
          <ArrowLeft size={16} /> Back to David's portfolio
        </Link>
      </div>
    </div>
  );
}
