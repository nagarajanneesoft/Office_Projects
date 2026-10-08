import { Link } from 'react-router-dom';
import { ArrowUpRight, Code2, Layers3, MonitorSmartphone, ShieldCheck, Sparkles } from 'lucide-react';

export default function ServiceCards({ home = false }) {
  if (home) {
    const homeServices = [
      {
        icon: Code2,
        title: "Custom Software Development",
        text: "Software shaped around your workflows, goals, and plans for growth.",
        tone: "software",
      },
      {
        icon: MonitorSmartphone,
        title: "Web Application Development",
        text: "Fast, accessible web products that make everyday work feel simpler.",
        tone: "web",
      },
      {
        icon: Layers3,
        title: "Enterprise Solutions",
        text: "Connected systems that bring teams, data, and operations together.",
        tone: "enterprise",
      },
      {
        icon: ShieldCheck,
        title: "Maintenance & Support",
        text: "Ongoing care that keeps your products reliable, secure, and up to date.",
        tone: "support",
      },
      {
        icon: Sparkles,
        title: "IT Consulting",
        text: "Clear technical direction to help you make confident next steps.",
        tone: "consulting",
      },
    ];

    return (
      <div className="home-services-list">
        {homeServices.map(({ icon: Icon, title, text, tone }, index) => (
          <Link
            className={`home-service-card ${tone}`}
            to="/services"
            key={title}
          >
            <span className="home-service-card-top">
              <span className="home-service-icon">
                <Icon size={22} />
              </span>
              <small>0{index + 1}</small>
            </span>
            <span className="home-service-card-copy">
              <strong>{title}</strong>
              <span>{text}</span>
            </span>
            <span className="home-service-arrow">
              <ArrowUpRight size={19} />
            </span>
          </Link>
        ))}
      </div>
    );
  }

  const pageServices = [
    {
      icon: Code2,
      number: '01',
      title: 'Custom Software Development',
      text: 'Software shaped around your workflows, goals, and plans for growth.',
    },
    {
      icon: MonitorSmartphone,
      number: '02',
      title: 'Web Application Development',
      text: 'Fast, accessible web products that make everyday work feel simpler.',
    },
    {
      icon: Layers3,
      number: '03',
      title: 'Enterprise Solutions',
      text: 'Connected systems that bring teams, data, and operations together.',
    },
    {
      icon: ShieldCheck,
      number: '04',
      title: 'Maintenance & Support',
      text: 'Ongoing care that keeps your products reliable, secure, and up to date.',
    },
    {
      icon: Sparkles,
      number: '05',
      title: 'IT Consulting',
      text: 'Clear technical direction to help you make confident next steps.',
    },
  ];

  return (
    <div className="service-grid service-grid-wide">
      {pageServices.map(({ icon: Icon, number, title, text }) => (
        <article className="service-card" key={title}>
          <div className="service-top">
            <span className="service-icon">
              <Icon size={23} />
            </span>
            <span className="service-number">{number}</span>
          </div>
          <h3>{title}</h3>
          <p>{text}</p>
          <Link to="/contact" aria-label={`Learn more about ${title}`}>
            <ArrowUpRight size={19} />
          </Link>
        </article>
      ))}
    </div>
  );
}
