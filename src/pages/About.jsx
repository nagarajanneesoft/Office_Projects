import { ArrowUpRight, BadgeCheck, Check, Eye, HeartHandshake, Lightbulb, Phone, ShieldCheck, Target, TrendingUp } from "lucide-react";
import aboutImage from "../assets/about-main.webp";
import aboutInsetImage from "../assets/about-inset.webp";
import PageHero from "../components/PageHero.jsx";

const coreValues = [
  { title: "Integrity", text: "We operate with honesty, transparency, and accountability in every decision and engagement.", icon: ShieldCheck, tone: "blue" },
  { title: "Innovation", text: "We continuously explore better approaches to solve complex problems and create meaningful value.", icon: Lightbulb, tone: "amber" },
  { title: "Customer Commitment", text: "We put our clients' objectives at the center of every solution, decision, and delivery.", icon: HeartHandshake, tone: "mint" },
  { title: "Quality Delivery", text: "We maintain high standards across engineering, execution, and every solution we deliver.", icon: BadgeCheck, tone: "violet" },
  { title: "Continuous Improvement", text: "We keep learning, refining our practices, and improving how we deliver technology.", icon: TrendingUp, tone: "coral" },
];

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
            <p className="section-kicker">WHO WE ARE</p>
            <h2>Technology Built Around Real Business Needs.</h2>
            <p className="about-feature-lead">
              NeeSoft is a technology solutions and IT services company
              committed to delivering software that solves real business
              challenges. We work closely with organizations to understand their
              objectives, transform complex requirements into practical
              solutions, and build technology that supports long-term growth.
            </p>
            <p className="about-feature-lead">
              From custom software and enterprise applications to modern web
              solutions and technology consulting, our approach combines
              engineering expertise, business insight, and a commitment to
              quality. We focus on delivering scalable and dependable solutions
              that improve efficiency, enable innovation, and create measurable
              business value.
            </p>
            <ul className="about-feature-list d-none">
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
            {/* <a className="about-feature-contact" href="tel:+919840173006">
              <span className="about-feature-phone">
                <Phone size={19} />
              </span>
              <span>
                <small>Call us anytime</small>
                <strong>+91 98401 73006</strong>
              </span>
              <ArrowUpRight className="about-feature-arrow" size={20} />
            </a> */}
          </div>
        </div>
      </section>
      <section className="direction-section section-pad">
        <div className="container-xl">
          <div className="direction-heading">
            <div>
              <p className="section-kicker">Our direction</p>
              <h2>
                Technology with purpose.
                <br />
                Built for lasting business value.
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
                <h3>Our Purpose</h3>
                <p>
                  To deliver dependable technology solutions that address
                  complex business requirements, improve operational efficiency,
                  and enable organizations to achieve their strategic objectives
                  with confidence.
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
                <h3>Our Aspiration</h3>
                <p>
                  To be a trusted technology partner for organizations seeking
                  scalable, innovative, and sustainable digital solutions that
                  strengthen their operations and support long-term growth.
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
      <section className="core-values-section section-pad" aria-labelledby="core-values-title">
        <div className="container-xl">
          <div className="core-values-heading">
            <p className="section-kicker">What we stand for</p>
            <h2 id="core-values-title">Core Values</h2>
            <p>The principles that guide how we work, build, and grow with our clients.</p>
          </div>
          <div className="core-values-grid">
            {coreValues.map(({ title, text, icon: Icon, tone }) => (
              <article className={`core-value-card core-value-${tone}`} key={title}>
                <span className="core-value-icon"><Icon size={24} strokeWidth={1.8} aria-hidden="true" /></span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
