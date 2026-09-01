import { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { getProject, projects } from "../data/projects";
import { projectDetail as copy } from "../data/copy";
import { Reveal } from "../components/Reveal";
import { Contact } from "../sections/Contact";
import { useLanguage } from "../lib/LanguageContext";

export function ProjectDetail() {
  const { slug } = useParams();
  const project = getProject(slug ?? "");
  const { pick } = useLanguage();

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
            {pick(copy.back)}
          </Link>

          <span className="project-hero-meta">
            {project.year} · {pick(project.role)}
          </span>

          <h1 className="project-hero-title">{pick(project.name)}</h1>
          <p className="project-hero-tagline">{pick(project.tagline)}</p>

          <ul className="project-hero-stack">
            {project.stack.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>

          {project.confidential ? (
            <p className="project-notice">{pick(copy.confidentialNotice)}</p>
          ) : (
            project.repo && (
              <a
                className="btn btn-primary project-hero-cta"
                href={project.repo}
                target="_blank"
                rel="noreferrer"
              >
                {pick(copy.viewSource)}
              </a>
            )
          )}
        </div>
      </header>

      <section className="section">
        <div className="container">
          <Reveal>
            <p className="project-summary">{pick(project.summary)}</p>
          </Reveal>

          <div className="project-overview">
            {pick(project.overview).map((paragraph, i) => (
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
              <Reveal key={pick(h.title)} delay={i * 0.04} className="project-highlight">
                {/* h2 (not h3) so the page keeps a valid heading order without a section label */}
                <h2>{pick(h.title)}</h2>
                <p>{pick(h.body)}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="project-next">
            <Link to={`/projects/${next.slug}`} className="project-next-link">
              {pick(next.name)}
            </Link>
          </Reveal>
        </div>
      </section>

      <Contact />
    </article>
  );
}
