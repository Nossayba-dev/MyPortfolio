import { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { getProject, projects } from "../data/projects";
import { Reveal } from "../components/Reveal";
import { Contact } from "../sections/Contact";

export function ProjectDetail() {
  const { slug } = useParams();
  const project = getProject(slug ?? "");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) return <Navigate to="/" replace />;

  const index = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <article>
      <header className="project-hero">
        <div className="container">
          <Link to="/" className="project-back">
            ← Back to portfolio
          </Link>

          <span className="project-hero-meta">
            {project.year} · {project.role}
          </span>

          <h1 className="project-hero-title">{project.name}</h1>
          <p className="project-hero-tagline">{project.tagline}</p>

          <ul className="project-hero-stack">
            {project.stack.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>

          {project.confidential ? (
            <p className="project-notice">
              This was client work. The application and its source stay private — the write-up below covers
              the engineering, not the product.
            </p>
          ) : (
            project.repo && (
              <a className="btn btn-primary project-hero-cta" href={project.repo} target="_blank" rel="noreferrer">
                View source
              </a>
            )
          )}
        </div>
      </header>

      <section className="section">
        <div className="container">
          <Reveal>
            <p className="project-summary">{project.summary}</p>
          </Reveal>

          <div className="project-overview">
            {project.overview.map((paragraph, i) => (
              <Reveal key={i} delay={i * 0.04}>
                <p>{paragraph}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="project-highlights">
            {project.highlights.map((h, i) => (
              <Reveal key={h.title} delay={i * 0.04} className="project-highlight">
                {/* h2 (not h3) so the page keeps a valid heading order without a section label */}
                <h2>{h.title}</h2>
                <p>{h.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="project-next">
            <Link to={`/projects/${next.slug}`} className="project-next-link">
              {next.name}
            </Link>
          </Reveal>
        </div>
      </section>

      <Contact />
    </article>
  );
}
