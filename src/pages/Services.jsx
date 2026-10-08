import PageHero from '../components/PageHero.jsx';
import ServiceCards from '../components/ServiceCards.jsx';
import { technologies } from '../data/siteData.js';

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Our capabilities"
        title="Our Services"
        text="Smart technology solutions designed to simplify operations, solve business challenges, and drive sustainable growth."
      />
      <section className="section-pad services-page">
        <div className="container-xl">
          <div className="section-heading">
            <div>
              <p className="section-kicker">Our services</p>
              <h2>Technology solutions that drive business forward.</h2>
            </div>
            <p>
              We combine engineering expertise with business understanding to
              deliver reliable technology solutions.
            </p>
          </div>
          <ServiceCards />
        </div>
      </section>
      <section className="technology-band section-pad">
        <div className="container-xl">
          <p className="section-kicker">Our toolkit</p>
          <h2>Technologies we work with</h2>
          <div className="tech-list">
            {technologies.map(({ name, logo }) => (
              <div className="tech-card" key={name}>
                <span className="tech-icon">
                  <img src={logo} alt={`${name} logo`} />
                </span>
                <strong>{name}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
