import { profile, role, location, bio } from "../data/profile";
import { about as copy } from "../data/copy";
import { Reveal } from "../components/Reveal";
import { useLanguage } from "../lib/LanguageContext";

export function About() {
  const { pick } = useLanguage();

  return (
    <section id="about" className="section">
      <div className="container">
        <Reveal>
          <h2 className="about-headline">
            {profile.name}, <span className="gradient-text">{pick(role)}</span>, {pick(copy.basedIn)}{" "}
            {pick(location)}.
          </h2>
        </Reveal>

        <div className="about-copy">
          {pick(bio).map((paragraph, i) => (
            <Reveal key={i} delay={0.08 + i * 0.05}>
              <p>{paragraph}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
