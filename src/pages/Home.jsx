import { Link } from "react-router-dom";
import { ArrowUpRight, Check, ChevronRight, MoveUpRight } from "lucide-react";
import ClientCarousel from "../components/ClientCarousel.jsx";
import ServiceCards from "../components/ServiceCards.jsx";
import bannerImage from "../assets/invena-banner.webp";
import AnimatedCounter from "../components/AnimatedCounter.jsx";
import aboutImage from "../assets/aboutImage.jpg";
import workImg from "../assets/workImg.jpg";
import whyTeamsImage from "../assets/about-main.webp";

export default function Home() {
  const trustSteps = [
    [
      "Experienced Team",
      "Seasoned professionals with deep domain expertise across various technology stacks.",
    ],
    [
      "Scalable Solutions",
      "Architectures designed to grow seamlessly alongside your business operations.",
    ],
    [
      "Transparent Communication",
      "Clear, consistent updates and collaborative approaches throughout the project lifecycle.",
    ],
    [
      "On-Time Delivery",
      "Rigorous project management ensuring milestones and deadlines are consistently met.",
    ],
    [
      "Long-Term Support",
      "Dedicated maintenance and reliable support post-deployment for continuous optimization.",
    ],
    [
      "Business-Focused Approach",
      "Aligning every technical decision with your strategic business objectives.",
    ],
  ];

  return (
    <main id="top" className="home-page">
      <section className="hero-section">
        <img
          className="hero-banner-image"
          src={bannerImage}
          alt="Business professional ready to help companies grow"
        />
        <div className="container-xl hero-banner-content">
          <div className="hero-copy">
            <div className="eyebrow">
              <strong>EMPOWERING !</strong> BUSINESSES WITH TECHNOLOGY
            </div>
            <h1>
              <span className="hero-title-line">
                Building Digital Solutions
              </span>
              <span className="hero-title-line">for a Smarter Tomorrow</span>
            </h1>
            <p className="hero-lead">
              NeeSoft delivers reliable, scalable and innovative technology
              solutions that help businesses transform, grow and succeed in a
              digital-first world.
            </p>
            <div className="hero-actions gap-3">
              <Link className="button button-primary" to="/contact">
                Explore Our Services <ArrowUpRight size={18} />
              </Link>
              <Link className="button button-primary" to="/contact">
                Contact Us Today <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>
        </div>
        <span className="hero-banner-orb" aria-hidden="true" />
        <span className="hero-banner-ring" aria-hidden="true" />
      </section>

      <section className="intro-section section-pad">
        <div className="container-xl intro-grid">
          <div className="home-about-visual">
            <img
              src={aboutImage}
              alt="People collaborating on a project in a modern office"
            />
            <span>
              <strong>15+</strong>
              <small>years of thoughtful engineering</small>
            </span>
          </div>
          <div className="home-about-copy">
            <p className="section-kicker">The NeeSoft approach</p>
            <h2>
              Technology that earns its place <em>in your business.</em>
            </h2>
            <div className="intro-body">
              <p>
                We combine sharp engineering with a close understanding of the
                people and processes behind your business. The result is
                technology that feels natural to use and meaningful to grow
                with.
              </p>
              <div className="home-approach-signals">
                <span>
                  <Check size={15} strokeWidth={2.5} /> Shaped around your team
                </span>
                <span>
                  <Check size={15} strokeWidth={2.5} /> Ready to grow with you
                </span>
              </div>
              <Link className="text-link dark-link" to="/about">
                Meet the people behind the work <MoveUpRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ClientCarousel />

      <section className="services-section section-pad">
        <div className="container-xl">
          <div className="section-heading">
            <div>
              <p className="section-kicker">OUR SERVICES</p>
              <h2>
                Comprehensive Technology
                <br className="desktop-only" /> Solutions
              </h2>
            </div>
            <div className="home-services-aside">
              <p>
                We provide software, consulting, and long-term support that help
                businesses operate with more clarity and confidence.
              </p>
              <Link className="text-link dark-link" to="/services">
                Explore all capabilities <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>
          <ServiceCards home />
        </div>
      </section>

      <section
        className="home-why-teams section-pad"
        aria-labelledby="home-why-title"
      >
        <div className="container-xl">
          <div className="home-why-heading">
            <p className="section-kicker">Why teams choose us</p>
            <h2 id="home-why-title">Built on Trust. Driven by Results.</h2>
            <p>
              We combine technical excellence with business acumen to deliver
              measurable results.
            </p>
          </div>
          <div className="home-why-layout">
            <div className="home-why-list">
              {trustSteps.slice(0, 3).map(([title, text], index) => (
                <article className="home-why-card" key={title}>
                  <span className="home-why-number">0{index + 1}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                  <ArrowUpRight
                    className="home-why-arrow"
                    size={19}
                    aria-hidden="true"
                  />
                </article>
              ))}
            </div>
            <div className="home-why-visual">
              <img
                src={whyTeamsImage}
                alt="NeeSoft team collaborating on a business solution"
              />
              <div>
                <span>People first</span>
                <strong>Technology that moves business forward.</strong>
              </div>
            </div>
            <div className="home-why-list home-why-list-right">
              {trustSteps.slice(3).map(([title, text], index) => (
                <article className="home-why-card" key={title}>
                  <span className="home-why-number">0{index + 4}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                  <ArrowUpRight
                    className="home-why-arrow"
                    size={19}
                    aria-hidden="true"
                  />
                </article>
              ))}
            </div>
          </div>
          <div className="home-why-action">
            <Link className="text-link dark-link" to="/contact">
              Start a conversation <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      <section className="home-process-section section-pad">
        <div className="container-xl">
          <div className="home-process-heading">
            <p className="section-kicker">A clear path forward</p>
            <h2>A thoughtful process, built around your goals.</h2>
            <p>
              From the first conversation to launch, we keep every step
              collaborative and focused on your goals.
            </p>
            <Link className="home-process-link" to="/services">
              Explore our services <ArrowUpRight size={17} />
            </Link>
          </div>
          <div className="home-process-content">
            <div className="home-process-steps">
              {[
                [
                  "01",
                  "Discover",
                  "We learn how your business works and what success needs to look like.",
                ],
                [
                  "02",
                  "Design & build",
                  "We shape the right solution, then build it with your team in the loop.",
                ],
                [
                  "03",
                  "Launch & grow",
                  "We help you launch confidently and keep improving as needs evolve.",
                ],
              ].map(([number, title, text]) => (
                <article className="home-process-step" key={number}>
                  <span>{number}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                  <ChevronRight size={19} />
                </article>
              ))}
            </div>
            <div className="home-process-image">
              <img src={workImg} alt="A bright, collaborative workspace" />
              <span>Built together. Ready for what&apos;s next.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="metrics-section section-pad">
        <div className="container-xl metrics-grid">
          <div>
            <p className="section-kicker">OUR TRACK RECORD</p>
            <h2>Technology Expertise. Business Focus.</h2>
          </div>
          <div className="metric-list">
            <AnimatedCounter value={80} suffix="+" label="Projects delivered" />
            <AnimatedCounter value={50} suffix="+" label="Business clients" />
            <AnimatedCounter
              value={100}
              suffix="%"
              label="Client satisfaction"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
