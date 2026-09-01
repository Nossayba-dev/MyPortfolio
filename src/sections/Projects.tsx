import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import { Reveal } from "../components/Reveal";

export function Projects() {
  return (
    <section id="projects" className="section section-blue">
      <div className="container">
        <Reveal>
          <h2 className="section-title">My recent work</h2>
        </Reveal>

        <ul className="work-grid">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.05} as="li">
              <Link to={`/projects/${project.slug}`} className="work-card">
                <div className="work-card-visual" aria-hidden="true">
                  <span className="work-card-initial">{project.name.charAt(0)}</span>
                  {project.confidential && <span className="chip-private">Private</span>}
                </div>
                <div className="work-card-body">
                  <span className="work-card-kind">{project.stack.slice(0, 2).join(" · ")}</span>
                  <h3>{project.name}</h3>
                  <p>{project.tagline}</p>
                  <span className="work-card-link">View project</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
