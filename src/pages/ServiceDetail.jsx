import { Link, useParams } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  Code2,
  Layers3,
  MonitorSmartphone,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const serviceDetails = {
  "custom-software-development": {
    title: "Custom Software Development",
    eyebrow: "Built around your business",
    intro:
      "Purpose-built software that fits the way your team works today and gives you room to grow tomorrow.",
    description:
      "Off-the-shelf tools can only take you so far. We work with your team to understand the real challenge, then design and build dependable software around your workflows, customers, and goals.",
    icon: Code2,
    color: "blue",
    outcomes: [
      "Purpose-built business platforms",
      "Workflow and process automation",
      "Modernization of legacy applications",
      "API and third-party integrations",
    ],
    steps: [
      ["Discover", "We map your goals, users, and existing processes."],
      ["Design", "We shape a clear solution and plan the right architecture."],
      ["Build", "We deliver in focused increments, with your team involved."],
      ["Evolve", "We support, improve, and scale your product over time."],
    ],
    label: "A solution that fits",
    callout: "Your business is unique. Your software should be, too.",
  },
  "web-application-development": {
    title: "Web Application Development",
    eyebrow: "Digital experiences, made useful",
    intro:
      "Fast, intuitive web applications that help your customers and teams get more done from anywhere.",
    description:
      "From customer portals to internal business tools, we build web experiences that feel effortless to use and are engineered for speed, security, and growth across devices.",
    icon: MonitorSmartphone,
    color: "mint",
    outcomes: [
      "Customer and partner portals",
      "Internal dashboards and workspaces",
      "Responsive product experiences",
      "Secure cloud-ready applications",
    ],
    steps: [
      [
        "Understand",
        "We define the audience, key tasks, and measures of success.",
      ],
      ["Prototype", "We map the experience before committing to a build."],
      ["Develop", "We build accessible, responsive features in clear stages."],
      ["Launch", "We prepare, deploy, and fine-tune with real-world feedback."],
    ],
    label: "Made for real users",
    callout: "Simple to use. Strong under the hood.",
  },
  "enterprise-solutions": {
    title: "Enterprise Solutions",
    eyebrow: "Connected operations at scale",
    intro:
      "Bring your systems, data, and teams together with technology designed for complex operations.",
    description:
      "Enterprise technology should make work flow, not add friction. We help organizations connect platforms, streamline processes, and create a reliable foundation for informed decisions.",
    icon: Layers3,
    color: "violet",
    outcomes: [
      "Enterprise platform implementation",
      "System integration and data flow",
      "Business process digitization",
      "Scalable cloud and architecture planning",
    ],
    steps: [
      ["Assess", "We look at your systems, processes, and priorities."],
      ["Align", "We create a practical roadmap around business outcomes."],
      ["Integrate", "We connect the right platforms and automate handoffs."],
      ["Optimize", "We track performance and improve as needs change."],
    ],
    label: "Designed for complexity",
    callout: "More connected systems. Clearer ways of working.",
  },
  "maintenance-support": {
    title: "Maintenance & Support",
    eyebrow: "Confidence beyond launch",
    intro:
      "Keep your applications secure, healthy, and ready for what comes next with proactive ongoing care.",
    description:
      "Reliable software needs attention after release. Our team helps you resolve issues, keep dependencies current, monitor performance, and plan improvements before small concerns become bigger disruptions.",
    icon: ShieldCheck,
    color: "amber",
    outcomes: [
      "Proactive monitoring and issue response",
      "Security patches and dependency updates",
      "Performance and reliability improvements",
      "Ongoing enhancements and technical guidance",
    ],
    steps: [
      ["Review", "We learn your application, risks, and support priorities."],
      ["Stabilize", "We address urgent issues and strengthen the foundation."],
      ["Maintain", "We monitor, update, and keep your product dependable."],
      ["Improve", "We plan enhancements around changing business needs."],
    ],
    label: "Support that stays close",
    callout: "A steady partner for every stage of your product.",
  },
  "it-consulting": {
    title: "IT Consulting",
    eyebrow: "Clear direction for technology",
    intro:
      "Make confident technology decisions with practical advice grounded in your business priorities.",
    description:
      "Whether you are planning a transformation or weighing your next technical move, we bring an outside perspective, hands-on expertise, and a clear path from ideas to action.",
    icon: Sparkles,
    color: "coral",
    outcomes: [
      "Technology strategy and roadmaps",
      "Architecture and platform assessments",
      "Digital transformation planning",
      "Project discovery and delivery advice",
    ],
    steps: [
      ["Listen", "We understand your context, challenges, and ambitions."],
      ["Evaluate", "We assess your options, systems, and constraints."],
      ["Recommend", "We share clear, prioritized next steps."],
      ["Guide", "We can stay alongside your team as plans take shape."],
    ],
    label: "Advice you can act on",
    callout: "A clearer next step starts with the right conversation.",
  },
};

export default function ServiceDetail() {
  const { serviceSlug } = useParams();
  const service = serviceDetails[serviceSlug];
  if (!service) {
    return (
      <section className="section-pad">
        <div className="container-xl">
          <h1>Service not found</h1>
          <Link to="/services">
            Explore our services <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    );
  }
  const Icon = service.icon;
  return (
    <main className={`service-detail service-detail-${service.color}`}>
      <section className="service-detail-hero">
        <div className="container-xl">
          <div className="service-detail-breadcrumbs">
            <Link to="/">Home</Link>
            <ChevronRight size={15} />
            <Link to="/services">Services</Link>
            <ChevronRight size={15} />
            <span>{service.title}</span>
          </div>
          <div className="service-detail-hero-grid">
            <div className="service-detail-heading">
              <p className="service-detail-eyebrow">
                <span />
                {service.eyebrow}
              </p>
              <h1>{service.title}</h1>
              <p>{service.intro}</p>
              <Link className="button button-primary" to="/contact">
                Discuss your project <ArrowUpRight size={17} />
              </Link>
            </div>
            <div className="service-detail-visual" aria-hidden="true">
              <div className="service-visual-orbit service-visual-orbit-one" />
              <div className="service-visual-orbit service-visual-orbit-two" />
              <div className="service-visual-card">
                <span>
                  <Icon size={30} />
                </span>
                <div>
                  <small>NEESOFT / SERVICES</small>
                  <strong>{service.label}</strong>
                  <i>
                    <b />
                    <b />
                    <b />
                  </i>
                </div>
                <ArrowUpRight size={19} />
              </div>
              <div className="service-visual-note">
                <Check size={16} />
                <span>Thoughtful by design</span>
              </div>
              <span className="service-visual-index">
                0{Object.keys(serviceDetails).indexOf(serviceSlug) + 1}
                <small> / 05</small>
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="section-pad service-detail-intro">
        <div className="container-xl service-detail-intro-grid">
          <p className="section-kicker">{service.label}</p>
          <div>
            <h2>{service.callout}</h2>
            <p>{service.description}</p>
          </div>
        </div>
      </section>
      <section className="section-pad service-detail-outcomes">
        <div className="container-xl">
          <div className="service-detail-section-heading">
            <p className="section-kicker">What we can help with</p>
            <h2>Technology that moves work forward.</h2>
            <p>
              We shape the right combination of capabilities around your
              priorities.
            </p>
          </div>
          <div className="service-outcome-grid">
            {service.outcomes.map((item, index) => (
              <article key={item}>
                <span>0{index + 1}</span>
                <h3>{item}</h3>
                <ArrowUpRight size={18} />
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section-pad service-detail-process">
        <div className="container-xl">
          <div className="service-detail-section-heading">
            <p className="section-kicker">A clear way forward</p>
            <h2>From first conversation to lasting value.</h2>
          </div>
          <div className="service-process-grid">
            {service.steps.map(([title, text], index) => (
              <article key={title}>
                <span className="service-process-number">0{index + 1}</span>
                <div className="service-process-line" />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      {/* <section className="service-detail-cta"><div className="container-xl service-detail-cta-inner"><div><p className="section-kicker">Let’s build what’s next</p><h2>Have a challenge in mind?</h2><p>Tell us where you want to go. We’ll help you find a practical way to get there.</p></div><Link className="button button-primary" to="/contact">Talk to our team <ArrowUpRight size={17} /></Link></div></section> */}
    </main>
  );
}
