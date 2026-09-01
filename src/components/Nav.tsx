import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useLenis } from "../lib/SmoothScroll";

const LINKS = [
  { id: "services", label: "Services" },
  { id: "about", label: "About" },
  { id: "resume", label: "Resume" },
  { id: "projects", label: "Portfolio" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const lenis = useLenis();
  const location = useLocation();
  const navigate = useNavigate();

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
              {link.label}
            </button>
          ))}
        </nav>

        <div className="nav-end">
          <Link className="btn btn-primary btn-sm nav-cta" to="/contact">
            Let’s talk
          </Link>
          <button
            className={`nav-burger ${open ? "is-open" : ""}`}
            aria-label="Toggle menu"
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
              {link.label}
            </button>
          ))}
          <Link to="/contact" onClick={() => setOpen(false)}>
            Let’s talk
          </Link>
        </div>
      )}
    </header>
  );
}
