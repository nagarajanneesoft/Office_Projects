import { ArrowUpRight, Check, Eye, Phone, Target } from "lucide-react";
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
          <div className="direction-heading">
            <div>
              <p className="section-kicker">Our direction</p>
              <h2>
                Purposeful technology.
                <br />A future built together.
              </h2>
            </div>
            <p className="direction-summary">
              The principles behind how we solve today&apos;s challenges and
              build for what comes next.
            </p>
          </div>
          <div className="purpose-grid">
            <article className="purpose-card purpose-card-mission">
              <div className="purpose-card-topline">
                <span className="purpose-card-number">01</span>
                <span className="purpose-card-icon">
                  <Target size={23} strokeWidth={1.8} aria-hidden="true" />
                </span>
              </div>
              <div className="purpose-card-content">
                <p className="section-kicker">Our mission</p>
                <h3>Make technology work better for business.</h3>
                <p>
                  We deliver dependable technology that solves complex
                  challenges, improves day-to-day operations, and helps
                  organizations reach their goals with confidence.
                </p>
              </div>
              <div className="purpose-card-values" aria-label="Mission focus">
                <span>Dependability</span>
                <span>Efficiency</span>
                <span>Meaningful impact</span>
              </div>
            </article>
            <article className="purpose-card purpose-card-vision">
              <div className="purpose-card-topline">
                <span className="purpose-card-number">02</span>
                <span className="purpose-card-icon">
                  <Eye size={23} strokeWidth={1.8} aria-hidden="true" />
                </span>
              </div>
              <div className="purpose-card-content">
                <p className="section-kicker">Our vision</p>
                <h3>Be the partner behind lasting progress.</h3>
                <p>
                  We aspire to be a trusted technology partner, creating
                  scalable and sustainable digital solutions that strengthen
                  organizations and support long-term growth.
                </p>
              </div>
              <div className="purpose-card-values" aria-label="Vision focus">
                <span>Trust</span>
                <span>Innovation</span>
                <span>Sustainable growth</span>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
