import { profile } from "../data/profile";
import { Reveal } from "../components/Reveal";

export function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <Reveal>
          <h2 className="contact-title">
            Let’s work <span className="gradient-text">together</span>
          </h2>
        </Reveal>

        <Reveal delay={0.05}>
          <p className="contact-sub">
            Based in {profile.location} — open to opportunities and freelance work.
          </p>
        </Reveal>

        <div className="contact-grid">
          <Reveal delay={0.1} className="contact-block">
            <span className="contact-label">Email me</span>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </Reveal>

          <Reveal delay={0.15} className="contact-block">
            <span className="contact-label">Call me</span>
            <a href={`tel:${profile.phone.replace(/\s/g, "")}`}>{profile.phone}</a>
          </Reveal>

          <Reveal delay={0.2} className="contact-block">
            <span className="contact-label">Find me</span>
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
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </span>
          <a href="#top" className="back-to-top">
            Back to top
          </a>
        </div>
      </div>
    </section>
  );
}
