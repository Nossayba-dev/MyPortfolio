import { profile, location } from "../data/profile";
import { contact as copy } from "../data/copy";
import { Reveal } from "../components/Reveal";
import { useLanguage } from "../lib/LanguageContext";

export function Contact() {
  const { pick } = useLanguage();

  return (
    <section id="contact" className="contact">
      <div className="container">
        <Reveal>
          <h2 className="contact-title">
            {pick(copy.titleBefore)} <span className="gradient-text">{pick(copy.titleWord)}</span>
          </h2>
        </Reveal>

        <Reveal delay={0.05}>
          <p className="contact-sub">
            {pick(location)} — {pick(copy.subtitleSuffix)}
          </p>
        </Reveal>

        <div className="contact-grid">
          <Reveal delay={0.1} className="contact-block">
            <span className="contact-label">{pick(copy.emailLabel)}</span>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </Reveal>

          <Reveal delay={0.15} className="contact-block">
            <span className="contact-label">{pick(copy.phoneLabel)}</span>
            <a href={`tel:${profile.phone.replace(/\s/g, "")}`}>{profile.phone}</a>
          </Reveal>

          <Reveal delay={0.2} className="contact-block">
            <span className="contact-label">{pick(copy.findLabel)}</span>
            <div className="contact-socials">
              <a href={profile.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>
          </Reveal>
        </div>

        <div className="footer-inner">
          <span>
            © {new Date().getFullYear()} {profile.name}. {pick(copy.rights)}
          </span>
          <a href="#top" className="back-to-top">
            {pick(copy.backToTop)}
          </a>
        </div>
      </div>
    </section>
  );
}
