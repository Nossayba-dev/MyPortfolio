import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import { portfolio as copy } from "../data/copy";
import { Reveal } from "../components/Reveal";
import { useLanguage } from "../lib/LanguageContext";

export function Projects() {
  const { pick } = useLanguage();

  return (
    <section id="projects" className="section section-blue">
      <div className="container">
        <Reveal>
          <h2 className="section-title">{pick(copy.title)}</h2>
        </Reveal>

        <ul className="work-grid">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.05} as="li">
              <Link to={`/projects/${project.slug}`} className="work-card">
                <div className="work-card-visual" aria-hidden="true">
                  <span className="work-card-initial">{pick(project.name).charAt(0)}</span>
                  {project.confidential && <span className="chip-private">{pick(copy.private)}</span>}
                </div>
                <div className="work-card-body">
                  <span className="work-card-kind">{project.stack.slice(0, 2).join(" · ")}</span>
                  <h3>{pick(project.name)}</h3>
                  <p>{pick(project.tagline)}</p>
                  <span className="work-card-link">{pick(copy.viewProject)}</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
