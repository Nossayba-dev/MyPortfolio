import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import { portfolio as copy } from "../data/copy";
import { Reveal } from "../components/Reveal";
import { ProjectImage } from "../components/ProjectImage";
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
              <Link
                to={`/projects/${project.slug}`}
                className={`work-card ${project.accent ? `accent-${project.accent}` : ""}`}
              >
                <div className="work-card-visual" aria-hidden="true">
                  {project.screenshots?.[0] ? (
                    <ProjectImage
                      src={project.screenshots[0]}
                      alt=""
                      className="work-card-screenshot"
                      fallback={<Initial name={pick(project.name)} />}
                    />
                  ) : project.logo ? (
                    <ProjectImage
                      src={project.logo}
                      alt=""
                      className="work-card-logo"
                      fallback={<Initial name={pick(project.name)} />}
                    />
                  ) : (
                    <Initial name={pick(project.name)} />
                  )}
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

function Initial({ name }: { name: string }) {
  return <span className="work-card-initial">{name.charAt(0)}</span>;
}
