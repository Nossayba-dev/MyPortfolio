import { Link } from "react-router-dom";
import { profile, role, location } from "../data/profile";
import { hero as copy } from "../data/copy";
import { useLenis } from "../lib/SmoothScroll";
import { useLanguage } from "../lib/LanguageContext";
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
  const { pick } = useLanguage();

  function scrollTo(id: string) {
    const el = document.getElementById(id);
    if (el) lenis?.scrollTo(el, { offset: -80 });
  }

  return (
    <section id="top" className="hero">
      <div className="container">
        <div className="hero-panel">
          <div className="hero-content">
            <span className="hero-hello">{pick(copy.hello)}</span>

            <h1 className="hero-name">
              <span>Nossayba</span>
              <span className="hero-name-alt">Abbara</span>
            </h1>

            <div className="hero-meta">
              <p>
                {pick(role)} <span className="hero-sep">|</span> {pick(copy.basedIn)} {pick(location)}
              </p>
            </div>

            <div className="hero-actions">
              <Link className="btn btn-primary" to="/contact">
                {pick(copy.talk)}
              </Link>
              <button className="btn btn-outline" onClick={() => scrollTo("projects")}>
                {pick(copy.myWork)}
              </button>
            </div>
          </div>

          <div className="hero-figure">
            {/* on phone widths this ring becomes the circular framed avatar;
                on desktop it's a transparent passthrough around the rectangular photo */}
            <div className="hero-avatar-ring">
              <Portrait src="/nossayba.jpeg" alt={`${profile.name}, ${pick(role)}`} />
            </div>

            <Link className="hero-badge" to="/contact" aria-label={pick(copy.badgeAriaLabel)}>
              <svg viewBox="0 0 100 100" className="hero-badge-ring" aria-hidden="true">
                <defs>
                  <path id="badge-circle" d="M50,50 m-36,0 a36,36 0 1,1 72,0 a36,36 0 1,1 -72,0" />
                </defs>
                <text>
                  <textPath href="#badge-circle" startOffset="0">
                    {pick(copy.badgeText)}
                  </textPath>
                </text>
              </svg>
              <span className="hero-badge-core">
                <ArrowIcon />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
