import { useState } from "react";
import { motion } from "framer-motion";
import { timeline, skillGroups, languages } from "../data/profile";
import { Reveal } from "../components/Reveal";

const TABS = ["Experience", "Education", "Skills"] as const;
type Tab = (typeof TABS)[number];

export function Resume() {
  const [tab, setTab] = useState<Tab>("Experience");

  const work = timeline.filter((t) => t.kind === "work");
  const education = timeline.filter((t) => t.kind === "education");

  return (
    <section id="resume" className="section section-violet">
      <div className="container">
        <Reveal>
          <h2 className="section-title">All my details, here</h2>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="tabs" role="tablist" aria-label="Resume sections">
            {TABS.map((name, i) => (
              <button
                key={name}
                role="tab"
                id={`tab-${name}`}
                aria-selected={tab === name}
                aria-controls={`panel-${name}`}
                /* roving tabindex: only the active tab is in the tab order */
                tabIndex={tab === name ? 0 : -1}
                className={`tab ${tab === name ? "is-active" : ""}`}
                onClick={() => setTab(name)}
                onKeyDown={(e) => {
                  if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
                  e.preventDefault();
                  const next =
                    e.key === "ArrowRight"
                      ? TABS[(i + 1) % TABS.length]
                      : TABS[(i - 1 + TABS.length) % TABS.length];
                  setTab(next);
                  document.getElementById(`tab-${next}`)?.focus();
                }}
              >
                {name}
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
            {tab === "Experience" && <EntryList entries={work} />}
            {tab === "Education" && <EntryList entries={education} />}
            {tab === "Skills" && <SkillsPanel />}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function EntryList({ entries }: { entries: typeof timeline }) {
  return (
    <ul className="entry-list">
      {entries.map((entry, i) => (
        <li key={i} className="entry">
          <span className="entry-period">{entry.period}</span>
          <div className="entry-body">
            <h3>{entry.title}</h3>
            <p className="entry-org">
              {entry.org} · {entry.place}
            </p>
            {entry.description && <p className="entry-desc">{entry.description}</p>}
          </div>
        </li>
      ))}
    </ul>
  );
}

function SkillsPanel() {
  return (
    <div className="skills-panel">
      {skillGroups.map((group) => (
        <div key={group.label} className="skills-row">
          <h3>{group.label}</h3>
          <ul>
            {group.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
      <div className="skills-row">
        <h3>Languages</h3>
        <ul>
          {languages.map((l) => (
            <li key={l.name}>
              {l.name} — {l.level}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
