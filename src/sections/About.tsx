import { profile } from "../data/profile";
import { Reveal } from "../components/Reveal";

export function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <Reveal>
          <h2 className="about-headline">
            {profile.name}, <span className="gradient-text">{profile.role}</span>, based in{" "}
            {profile.location}.
          </h2>
        </Reveal>

        <div className="about-copy">
          {profile.bio.map((paragraph, i) => (
            <Reveal key={i} delay={0.08 + i * 0.05}>
              <p>{paragraph}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
