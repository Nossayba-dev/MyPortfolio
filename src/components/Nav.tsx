import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useLenis } from "../lib/SmoothScroll";
import { useTheme } from "../lib/ThemeContext";
import { useLanguage } from "../lib/LanguageContext";
import { nav as navCopy, theme as themeCopy } from "../data/copy";

const LINKS = [
  { id: "services", label: navCopy.services },
  { id: "about", label: navCopy.about },
  { id: "resume", label: navCopy.resume },
  { id: "projects", label: navCopy.portfolio },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const lenis = useLenis();
  const location = useLocation();
  const navigate = useNavigate();
  const { theme: mode, toggleTheme } = useTheme();
  const { lang, setLang, pick } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function goTo(id: string) {
    setOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) lenis?.scrollTo(el, { offset: -80 });
      }, 80);
      return;
    }
    const el = document.getElementById(id);
    if (el) lenis?.scrollTo(el, { offset: -80 });
  }

  const otherLang = lang === "en" ? "fr" : "en";
  // The label is the language you'll switch TO, and the announcement is in the
  // CURRENT language — both come straight from `lang`, not from a lookup table.
  const langToggleLabel = otherLang.toUpperCase();
  const langToggleAria =
    lang === "en" ? "Switch to French" : "Basculer en anglais";

  return (
    <header className={`nav ${scrolled ? "is-scrolled" : ""}`}>
      <div className="nav-inner container">
        <Link to="/" className="nav-brand">
          <span className="nav-brand-mark" aria-hidden="true" />
          Nossayba
        </Link>

        <nav className="nav-links">
          {LINKS.map((link) => (
            <button key={link.id} onClick={() => goTo(link.id)}>
              {pick(link.label)}
            </button>
          ))}
        </nav>

        <div className="nav-end">
          <button
            className="icon-btn"
            onClick={() => setLang(otherLang)}
            aria-label={langToggleAria}
          >
            {langToggleLabel}
          </button>

          <button
            className="icon-btn"
            onClick={toggleTheme}
            aria-label={pick(mode === "dark" ? themeCopy.toLight : themeCopy.toDark)}
          >
            <ThemeIcon mode={mode} />
          </button>

          <Link className="btn btn-primary btn-sm nav-cta" to="/contact">
            {pick(navCopy.talk)}
          </Link>

          <button
            className={`nav-burger ${open ? "is-open" : ""}`}
            aria-label={pick(navCopy.toggleMenu)}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      {open && (
        <div className="nav-mobile">
          {LINKS.map((link) => (
            <button key={link.id} onClick={() => goTo(link.id)}>
              {pick(link.label)}
            </button>
          ))}
          <Link to="/contact" onClick={() => setOpen(false)}>
            {pick(navCopy.talk)}
          </Link>
        </div>
      )}
    </header>
  );
}

function ThemeIcon({ mode }: { mode: "light" | "dark" }) {
  if (mode === "dark") {
    return (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.8" />
        <path
          d="M12 2.5v2M12 19.5v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M2.5 12h2M19.5 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M20 14.5A8.5 8.5 0 019.5 4a8.5 8.5 0 1010.5 10.5z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}
