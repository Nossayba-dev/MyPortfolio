import { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { getProject, projects } from "../data/projects";
import { projectDetail as copy } from "../data/copy";
import { Reveal } from "../components/Reveal";
import { Contact } from "../sections/Contact";
import { ProjectImage } from "../components/ProjectImage";
import { Lightbox } from "../components/Lightbox";
import { useLanguage } from "../lib/LanguageContext";

export function ProjectDetail() {
  const { slug } = useParams();
  const project = getProject(slug ?? "");
  const { pick } = useLanguage();
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    setLightboxSrc(null);
  }, [slug]);

  if (!project) return <Navigate to="/" replace />;

  const index = projects.findIndex((p) => p.slug === project.slug);
  // null, not a self-link, when this is the only project
  const next = projects.length > 1 ? projects[(index + 1) % projects.length] : null;
  const accentClass = project.accent ? `accent-${project.accent}` : "";

  return (
    <article className={accentClass}>
      <header className="project-hero">
        <div className="container">
          <Link to="/" className="project-back">
            {pick(copy.back)}
          </Link>

          {project.logo && (
            <ProjectImage
              className="project-hero-logo"
              src={project.logo}
              alt={pick(project.name)}
            />
          )}

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

      {project.screenshots && project.screenshots.length > 0 && (
        <div className="container">
          <Reveal className="project-screenshot-wrap">
            {project.screenshots.map((src, i) => (
              <button
                key={src}
                type="button"
                className="project-screenshot-btn"
                aria-label={`${pick(copy.viewLarger)} — ${pick(project.name)} ${i + 1}`}
                onClick={() => setLightboxSrc(src)}
              >
                <ProjectImage
                  className="project-screenshot"
                  src={src}
                  alt={`${pick(project.name)} — ${i + 1}`}
                />
              </button>
            ))}
          </Reveal>
        </div>
      )}

      <Lightbox src={lightboxSrc} alt={pick(project.name)} onClose={() => setLightboxSrc(null)} />

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

      {next && (
        <section className="section">
          <div className="container">
            <Reveal className="project-next">
              <Link to={`/projects/${next.slug}`} className="project-next-link">
                {pick(next.name)}
              </Link>
            </Reveal>
          </div>
        </section>
      )}

      <Contact />
    </article>
  );
}
