import { useState } from "react";
import { motion } from "framer-motion";
import { timeline, skillGroups, languages } from "../data/profile";
import { resume as copy } from "../data/copy";
import { Reveal } from "../components/Reveal";
import { useLanguage, type Bi } from "../lib/LanguageContext";

const TAB_IDS = ["experience", "education", "skills"] as const;
type TabId = (typeof TAB_IDS)[number];

export function Resume() {
  const [tab, setTab] = useState<TabId>("experience");
  const { pick } = useLanguage();

  const work = timeline.filter((t) => t.kind === "work");
  const education = timeline.filter((t) => t.kind === "education");

  const tabLabels: Record<TabId, Bi<string>> = {
    experience: copy.tabExperience,
    education: copy.tabEducation,
    skills: copy.tabSkills,
  };

  return (
    <section id="resume" className="section section-violet">
      <div className="container">
        <Reveal>
          <h2 className="section-title">{pick(copy.title)}</h2>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="tabs" role="tablist" aria-label={pick(copy.tablistAriaLabel)}>
            {TAB_IDS.map((id, i) => (
              <button
                key={id}
                role="tab"
                id={`tab-${id}`}
                aria-selected={tab === id}
                aria-controls={`panel-${id}`}
                /* roving tabindex: only the active tab is in the tab order */
                tabIndex={tab === id ? 0 : -1}
                className={`tab ${tab === id ? "is-active" : ""}`}
                onClick={() => setTab(id)}
                onKeyDown={(e) => {
                  if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
                  e.preventDefault();
                  const next =
                    e.key === "ArrowRight"
                      ? TAB_IDS[(i + 1) % TAB_IDS.length]
                      : TAB_IDS[(i - 1 + TAB_IDS.length) % TAB_IDS.length];
                  setTab(next);
                  document.getElementById(`tab-${next}`)?.focus();
                }}
              >
                {pick(tabLabels[id])}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="tab-panels">
          {/* No AnimatePresence/exit here on purpose: with mode="wait" the incoming
              panel only mounts once the outgoing one finishes animating, so a stalled
              animation leaves the panel empty. The new panel just fades in instead. */}
          <motion.div
            key={tab}
            id={`panel-${tab}`}
            role="tabpanel"
            aria-labelledby={`tab-${tab}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 0.61, 0.36, 1] }}
          >
            {tab === "experience" && <EntryList entries={work} />}
            {tab === "education" && <EntryList entries={education} />}
            {tab === "skills" && <SkillsPanel />}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function EntryList({ entries }: { entries: typeof timeline }) {
  const { pick } = useLanguage();
  return (
    <ul className="entry-list">
      {entries.map((entry, i) => (
        <li key={i} className="entry">
          <span className="entry-period">{entry.period}</span>
          <div className="entry-body">
            <h3>{pick(entry.title)}</h3>
            <p className="entry-org">
              {entry.org} · {pick(entry.place)}
            </p>
            {entry.description && <p className="entry-desc">{pick(entry.description)}</p>}
          </div>
        </li>
      ))}
    </ul>
  );
}

function SkillsPanel() {
  const { pick } = useLanguage();
  return (
    <div className="skills-panel">
      {skillGroups.map((group) => (
        <div key={pick(group.label)} className="skills-row">
          <h3>{pick(group.label)}</h3>
          <ul>
            {group.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
      <div className="skills-row">
        <h3>{pick(copy.languagesHeading)}</h3>
        <ul>
          {languages.map((l) => (
            <li key={pick(l.name)}>
              {pick(l.name)} — {pick(l.level)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
