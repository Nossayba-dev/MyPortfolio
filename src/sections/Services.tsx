import { services } from "../data/profile";
import { services as copy } from "../data/copy";
import { Reveal } from "../components/Reveal";
import { useLanguage } from "../lib/LanguageContext";

export function Services() {
  const { pick } = useLanguage();

  return (
    <section id="services" className="section section-pink">
      <div className="container">
        <Reveal>
          <h2 className="section-title">{pick(copy.title)}</h2>
        </Reveal>

        <div className="services-grid">
          {services.map((service, i) => (
            <Reveal key={pick(service.title)} delay={i * 0.05} className="service-card">
              <span className="service-kind">{pick(service.kind)}</span>
              <h3>{pick(service.title)}</h3>
              <p>{pick(service.body)}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
