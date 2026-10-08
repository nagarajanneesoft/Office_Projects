import { Link } from "react-router-dom";
import { ArrowUpRight, Check, ChevronRight, MoveUpRight } from "lucide-react";
import ClientCarousel from "../components/ClientCarousel.jsx";
import ServiceCards from "../components/ServiceCards.jsx";
import bannerImage from "../assets/invena-banner.webp";
import AnimatedCounter from "../components/AnimatedCounter.jsx";
import aboutImage from "../assets/aboutImage.jpg";
import workImg from "../assets/workImg.jpg";

export default function Home() {
  const trustSteps = [
    [
      "Senior thinking",
      "Experienced people stay hands-on from the first conversation through delivery.",
    ],
    [
      "Clear communication",
      "You know where things stand and what is coming next at every milestone.",
    ],
    [
      "Built to scale",
      "Practical foundations support your product as your business grows.",
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
              <strong>WELCOME!</strong> START GROWING YOUR BUSINESS TODAY
            </div>
            <h1>
              <span className="hero-title-line">Innovative Solutions,</span>
              <span className="hero-title-line">Tailored for Your Success</span>
            </h1>
            <p className="hero-lead">
              Porttitor ornare fermentum aliquam pharetra facilisis gravida
              risus suscipit. Dui feugiat fusce conubia ridiculus tristique
              parturient.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" to="/contact">
                Let&apos;s talk about your project <ArrowUpRight size={18} />
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
                <span><Check size={15} strokeWidth={2.5} /> Shaped around your team</span>
                <span><Check size={15} strokeWidth={2.5} /> Ready to grow with you</span>
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
              <p className="section-kicker">What we do</p>
              <h2>
                From first idea to
                <br className="desktop-only" /> lasting advantage.
              </h2>
            </div>
            <div className="home-services-aside">
              <p>
                Focused expertise for the moments that matter most in your
                digital journey.
              </p>
              <Link className="text-link dark-link" to="/services">
                Explore all capabilities <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>
          <ServiceCards home />
        </div>
      </section>

      <section className="trust-section section-pad">
        <div className="container-xl trust-grid">
          <div>
            <p className="section-kicker">Why teams choose us</p>
            <h2>Good work is built on good relationships.</h2>
            <p className="trust-lead">
              You get a partner who listens closely, thinks commercially, and
              stays invested long after launch.
            </p>
            <Link className="button button-light" to="/contact">
              Start a conversation <ArrowUpRight size={18} />
            </Link>
          </div>
          <div className="value-list">
            {trustSteps.map(([title, text], index) => (
              <article className="value-item" key={title}>
                <span>0{index + 1}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
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
            <p className="section-kicker">A track record that speaks</p>
            <h2>Built for the long run.</h2>
          </div>
          <div className="metric-list">
            <AnimatedCounter
              value={100}
              suffix="+"
              label="Projects delivered"
            />
            <AnimatedCounter value={50} suffix="+" label="Business clients" />
            <AnimatedCounter
              value={98}
              suffix="%"
              label="Client satisfaction"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
