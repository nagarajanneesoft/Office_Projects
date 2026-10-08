import PageHero from '../components/PageHero.jsx';
import { clients } from '../data/siteData.js';

export default function Clients() {
  return (
    <>
      <PageHero
        eyebrow="Partnerships"
        title="Clients We Serve"
        text="Building trusted partnerships through reliable technology and solutions that create meaningful business value."
      />
      <section className="section-pad clients-page">
        <div className="container-xl clients-intro">
          <div>
            <p className="section-kicker">Our partnerships</p>
            <h2>Trusted relationships. Meaningful progress.</h2>
          </div>
          <p>
            We work alongside teams across industries to solve real challenges,
            improve operations, and build technology that supports lasting
            growth.
          </p>
        </div>
        <div className="container-xl client-grid">
          {clients.slice(0, 6).map((client, index) => (
            <article key={`${client}-${index}`}>
              <div className={`client-logo client-logo-${index + 1}`}>
                {client
                  .split(" ")
                  .map((word) => word[0])
                  .join("")}
              </div>
              <h3>{client}</h3>
              <span>
                {
                  [
                    "Automotive",
                    "Media & Entertainment",
                    "Financial Services",
                    "Customer Services",
                    "Automotive",
                    "IT & Software Services",
                  ][index]
                }
              </span>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
