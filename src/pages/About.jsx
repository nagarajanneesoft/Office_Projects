import { ArrowUpRight, Check, Phone } from "lucide-react";
import aboutImage from "../assets/about-main.webp";
import aboutInsetImage from "../assets/about-inset.webp";
import PageHero from "../components/PageHero.jsx";

export default function About() {
  return (
    <main className="about-page">
      <PageHero
        eyebrow="Our story"
        title="About Us"
        text="Driving innovation through technology and delivering reliable solutions that create lasting business value."
      />
      <section className="section-pad about-intro">
        <div className="container-xl about-feature">
          <div className="about-feature-visual">
            <img src={aboutImage} alt="NeeSoft business consultant" />
            <img
              className="about-feature-inset"
              src={aboutInsetImage}
              alt="NeeSoft consultants working together"
            />
            <div className="about-feature-badge">
              <strong>
                15<span>+</span>
              </strong>
              <small>Years of experience</small>
            </div>
          </div>
          <div className="about-feature-copy">
            <p className="section-kicker">More about us</p>
            <h2>Technology that moves your business forward.</h2>
            <p className="about-feature-lead">
              We turn complex business challenges into dependable digital
              solutions, shaped around the people and processes that use them.
            </p>
            <ul className="about-feature-list">
              <li>
                <Check size={17} strokeWidth={3} /> Solutions tailored to your
                needs
              </li>
              <li>
                <Check size={17} strokeWidth={3} /> Clear, collaborative
                delivery
              </li>
              <li>
                <Check size={17} strokeWidth={3} /> Scalable foundations for
                growth
              </li>
            </ul>
            <a className="about-feature-contact" href="tel:+919840173006">
              <span className="about-feature-phone">
                <Phone size={19} />
              </span>
              <span>
                <small>Call us anytime</small>
                <strong>+91 98401 73006</strong>
              </span>
              <ArrowUpRight className="about-feature-arrow" size={20} />
            </a>
          </div>
        </div>
      </section>
      <section className="direction-section section-pad">
        <div className="container-xl">
          <p className="section-kicker">Our direction</p>
          <h2>
            Technology with purpose.
            <br />
            Built for lasting business value.
          </h2>
          <div className="purpose-grid">
            <article>
              <p className="section-kicker">Mission</p>
              <h3>Our purpose</h3>
              <p>
                To deliver dependable technology solutions that address complex
                business requirements, improve operational efficiency, and
                enable organizations to achieve their strategic objectives with
                confidence.
              </p>
            </article>
            <article>
              <p className="section-kicker">Vision</p>
              <h3>Our aspiration</h3>
              <p>
                To be a trusted technology partner for organizations seeking
                scalable, innovative, and sustainable digital solutions that
                strengthen their operations and support long-term growth.
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
