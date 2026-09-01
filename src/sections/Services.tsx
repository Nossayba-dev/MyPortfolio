import { services } from "../data/profile";
import { Reveal } from "../components/Reveal";

export function Services() {
  return (
    <section id="services" className="section section-pink">
      <div className="container">
        <Reveal>
          <h2 className="section-title">My specialties</h2>
        </Reveal>

        <div className="services-grid">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.05} className="service-card">
              <span className="service-kind">{service.kind}</span>
              <h3>{service.title}</h3>
              <p>{service.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
