import { Link } from "react-router-dom";
import { profile } from "../data/profile";
import { useLenis } from "../lib/SmoothScroll";
import { useMediaQuery } from "../lib/useMediaQuery";
import { ArrowIcon } from "../components/ArrowIcon";
import { Portrait } from "../components/Portrait";

/**
 * The hero deliberately uses a CSS entrance animation rather than Framer Motion.
 * A CSS animation with `backwards` fill leaves the element's resting state
 * visible, so if the animation never runs — throttled rAF, a backgrounded tab on
 * load, reduced motion — the hero still reads. A JS animation starting from
 * opacity 0 can leave it blank.
 */
export function Hero() {
  const lenis = useLenis();
  // The portrait is dropped entirely when there isn't room beside the text —
  // narrow screens, and short ones like a phone in landscape. Skipping the render
  // (rather than hiding with CSS) also skips the download. Must stay in sync with
  // the matching media query in site.css.
  const stacked = useMediaQuery("(max-width: 799px), (max-height: 520px)");

  function scrollTo(id: string) {
    const el = document.getElementById(id);
    if (el) lenis?.scrollTo(el, { offset: -80 });
  }

  return (
    <section id="top" className="hero">
      <div className="container">
        <div className="hero-panel">
          <div className="hero-content">
            <span className="hero-hello">Hello, I’m</span>

            <h1 className="hero-name">
              <span>Nossayba</span>
              <span className="hero-name-alt">Abbara</span>
            </h1>

            <div className="hero-meta">
              <p>
                {profile.role} <span className="hero-sep">|</span> Based in {profile.location}
              </p>
            </div>

            <div className="hero-actions">
              <Link className="btn btn-primary" to="/contact">
                Let’s talk
              </Link>
              <button className="btn btn-outline" onClick={() => scrollTo("projects")}>
                My work
              </button>
            </div>
          </div>

          {!stacked && (
            <div className="hero-figure">
              <Portrait src="/nossayba.jpeg" alt={`${profile.name}, ${profile.role}`} />

              <Link className="hero-badge" to="/contact" aria-label="Go to the contact form">
                <svg viewBox="0 0 100 100" className="hero-badge-ring" aria-hidden="true">
                  <defs>
                    <path id="badge-circle" d="M50,50 m-36,0 a36,36 0 1,1 72,0 a36,36 0 1,1 -72,0" />
                  </defs>
                  <text>
                    <textPath href="#badge-circle" startOffset="0">
                      CONTACT ME · CONTACT ME ·
                    </textPath>
                  </text>
                </svg>
                <span className="hero-badge-core">
                  <ArrowIcon />
                </span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
