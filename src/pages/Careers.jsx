import {
  ArrowDownRight,
  ArrowUpRight,
  BookOpenCheck,
  BriefcaseBusiness,
  ChevronLeft,
  ChevronRight,
  HeartHandshake,
  Lightbulb,
  Sparkles,
  UsersRound,
} from "lucide-react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import PageHero from "../components/PageHero.jsx";
import ClientCarousel from "../components/ClientCarousel.jsx";
import teamImage from "../assets/about-inset.webp";

const reasons = [
  {
    icon: BriefcaseBusiness,
    title: "Work with purpose",
    text: "Solve meaningful business challenges and see your work make a difference for real teams.",
    tone: "orange",
  },
  {
    icon: BookOpenCheck,
    title: "Keep learning",
    text: "Build deep skills through hands-on work, knowledge sharing, and focused training.",
    tone: "blue",
  },
  {
    icon: UsersRound,
    title: "Grow together",
    text: "Work with people who value clear communication, shared ownership, and thoughtful delivery.",
    tone: "green",
  },
];

const growthSteps = [
  [
    "01",
    "Bring your perspective",
    "Every career starts with curiosity, ideas, and a willingness to learn.",
  ],
  [
    "02",
    "Learn by doing",
    "Build practical experience while contributing to real client work.",
  ],
  [
    "03",
    "Deepen your craft",
    "Grow your technical, business, and communication skills over time.",
  ],
  [
    "04",
    "Make an impact",
    "Take on new challenges and help shape solutions that move businesses forward.",
  ],
];

const roles = [
  {
    title: "Software Engineer",
    category: "Engineering",
    text: "Design and build custom software and enterprise applications around business requirements.",
  },
  {
    title: "Web Developer",
    category: "Engineering",
    text: "Create secure, scalable web applications with modern front-end and back-end technologies.",
  },
  {
    title: "IT Consultant",
    category: "Consulting",
    text: "Help clients plan architecture, digital change, and practical technology decisions.",
  },
  {
    title: "QA Engineer",
    category: "Quality",
    text: "Help teams ship dependable software through thoughtful testing and quality practices.",
  },
  {
    title: "UI/UX Designer",
    category: "Design",
    text: "Turn user needs and business goals into clear, accessible digital experiences.",
  },
  {
    title: "Business Analyst",
    category: "Business",
    text: "Connect people, processes, and technology to shape effective solutions.",
  },
];

const experienceOptions = [
  "Fresher",
  "1-2 years",
  "3-5 years",
  "6-9 years",
  "10+ years",
];
const roleLoop = [...roles, ...roles, ...roles];

export default function Careers() {
  const [selectedRole, setSelectedRole] = useState(roles[0].title);
  const [rolesPaused, setRolesPaused] = useState(false);
  const [resumeName, setResumeName] = useState("");
  const [applicationStatus, setApplicationStatus] = useState("");
  const roleTrackRef = useRef(null);
  const applicationRef = useRef(null);

  function getRoleStep() {
    const track = roleTrackRef.current;
    const card = track?.firstElementChild;
    if (!track || !card) return 0;
    const gap =
      Number.parseFloat(window.getComputedStyle(track).columnGap) || 20;
    return card.getBoundingClientRect().width + gap;
  }

  function getRoleCycle() {
    return getRoleStep() * roles.length;
  }

  function moveRoles(direction) {
    roleTrackRef.current?.scrollBy({
      left: getRoleStep() * direction,
      behavior: "smooth",
    });
  }

  function normalizeRoleLoop() {
    const track = roleTrackRef.current;
    const step = getRoleStep();
    const cycle = getRoleCycle();
    if (!track || !step || !cycle) return;
    if (track.scrollLeft >= cycle * 2 - step / 2) track.scrollLeft -= cycle;
    else if (track.scrollLeft <= step / 2) track.scrollLeft += cycle;
  }

  useLayoutEffect(() => {
    const track = roleTrackRef.current;
    const cycle = getRoleCycle();
    if (track && cycle) track.scrollLeft = cycle;
  }, []);

  useEffect(() => {
    if (rolesPaused) return undefined;
    const timer = window.setInterval(() => {
      const track = roleTrackRef.current;
      const step = getRoleStep();
      if (!track || !step || document.hidden || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      track.scrollBy({ left: step, behavior: "smooth" });
    }, 3400);
    return () => window.clearInterval(timer);
  }, [rolesPaused]);

  function applyForRole(role) {
    setSelectedRole(role);
    setApplicationStatus("");
    applicationRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  function handleResumeChange(event) {
    const file = event.target.files?.[0];
    setApplicationStatus("");
    if (!file) return setResumeName("");
    const validType = /\.(pdf|doc|docx)$/i.test(file.name);
    if (!validType || file.size > 4 * 1024 * 1024) {
      setResumeName("");
      event.target.value = "";
      setApplicationStatus("Choose a PDF or Word resume up to 4 MB.");
      return;
    }
    setResumeName(file.name);
  }

  function handleApplicationSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const subject = encodeURIComponent(
      `Career application: ${formData.get("role")}`,
    );
    const body = encodeURIComponent(
      `Name: ${formData.get("name")}\nEmail: ${formData.get("email")}\nPhone: ${formData.get("phone") || "Not provided"}\nLinkedIn or portfolio: ${formData.get("portfolio") || "Not provided"}\nRole: ${formData.get("role")}\nExperience: ${formData.get("experience")}\nResume: ${resumeName || "Not attached"}\n\nAbout me:\n${formData.get("about") || "Not provided"}\n\nPlease attach my resume if I selected one.`,
    );
    window.location.href = `mailto:info@neesoft.com?subject=${subject}&body=${body}`;
    setApplicationStatus(
      "Your email app should open with your application details. Attach your resume before sending.",
    );
  }
  return (
    <>
      <PageHero
        eyebrow="Careers at NeeSoft"
        title="Careers"
        text="Bring your ideas, build skills that last, and help solve the challenges shaping tomorrow’s businesses."
      />
      <ClientCarousel />

      <main className="careers-page">
        <section className="careers-intro section-pad">
          <div className="container-xl careers-intro-grid">
            <div className="careers-intro-copy">
              <p className="section-kicker">A place to do your best work</p>
              <h2>Your next chapter should move you forward.</h2>
              <p>
                At NeeSoft, growth comes from doing meaningful work with people
                who care about getting it right. You’ll take on real challenges,
                keep learning on the job, and build the skills to make a lasting
                contribution.
              </p>
              <a
                className="button button-primary careers-apply-link"
                href="mailto:info@neesoft.com?subject=Career%20opportunities%20at%20NeeSoft"
              >
                Introduce yourself <ArrowUpRight size={18} />
              </a>
            </div>
            <div className="careers-photo-wrap">
              <img
                src={teamImage}
                alt="Colleagues working together and sharing ideas"
              />
              <div className="careers-photo-note">
                <span>
                  <Sparkles size={16} />
                </span>
                <div>
                  <strong>Curiosity belongs here.</strong>
                  <small>Bring what you know. Grow into what’s next.</small>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="careers-roles section-pad"
          aria-labelledby="careers-roles-title"
          onMouseEnter={() => setRolesPaused(true)}
          onMouseLeave={() => setRolesPaused(false)}
          onFocusCapture={() => setRolesPaused(true)}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) setRolesPaused(false);
          }}
        >
          <div className="container-xl">
            <div className="careers-section-heading careers-roles-heading">
              <div className="careers-roles-heading-copy">
                <p className="section-kicker">Open applications</p>
                <h2 id="careers-roles-title">Roles we hire for.</h2>
                <p>Send your profile for a current or upcoming opening. We review every application.</p>
              </div>
              <div className="careers-role-controls home-client-controls" aria-label="Role carousel controls">
                <button type="button" aria-label="Previous roles" onClick={() => moveRoles(-1)}><ChevronLeft size={19} /></button>
                <button type="button" aria-label="Next roles" onClick={() => moveRoles(1)}><ChevronRight size={19} /></button>
              </div>
            </div>
            <div className="careers-roles-viewport">
              <div
                className="careers-role-track"
                ref={roleTrackRef}
                onScroll={normalizeRoleLoop}
              >
                {roleLoop.map((role, index) => (
                  <article className="careers-role-card" key={`${role.title}-${index}`} aria-hidden={Math.floor(index / roles.length) !== 1} inert={Math.floor(index / roles.length) !== 1}>
                    <span className="careers-role-category">
                      {role.category}
                    </span>
                    <h3>{role.title}</h3>
                    <p>{role.text}</p>
                    <button
                      type="button"
                      onClick={() => applyForRole(role.title)}
                    >
                      Apply{" "}
                      <span>
                        <ArrowUpRight size={16} />
                      </span>
                    </button>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          className="careers-application section-pad"
          id="career-application"
          ref={applicationRef}
          aria-labelledby="career-application-title"
        >
          <div className="container-xl">
            <form
              className="careers-application-card"
              onSubmit={handleApplicationSubmit}
            >
              <div className="careers-application-heading">
                <p className="section-kicker">Apply</p>
                <h2 id="career-application-title">Send your profile</h2>
                <p>
                  Share a few details and we will review your application. A
                  resume is optional.
                </p>
              </div>
              <div className="careers-form-grid">
                <label>
                  Full name
                  <input
                    id="applicant-name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    autoComplete="name"
                    required
                  />
                </label>
                <label>
                  Email
                  <input
                    name="email"
                    type="email"
                    placeholder="you@email.com"
                    autoComplete="email"
                    required
                  />
                </label>
                <label>
                  Phone
                  <input
                    name="phone"
                    type="tel"
                    placeholder="+91 00000 00000"
                    autoComplete="tel"
                  />
                </label>
                <label>
                  LinkedIn or portfolio
                  <input name="portfolio" type="url" placeholder="https://" />
                </label>
                <label>
                  Role
                  <select
                    name="role"
                    value={selectedRole}
                    onChange={(event) => setSelectedRole(event.target.value)}
                  >
                    {roles.map((role) => (
                      <option key={role.title}>{role.title}</option>
                    ))}
                  </select>
                </label>
                <label>
                  Experience
                  <select name="experience" defaultValue="" required>
                    <option value="" disabled>
                      Select experience
                    </option>
                    {experienceOptions.map((experience) => (
                      <option key={experience}>{experience}</option>
                    ))}
                  </select>
                </label>
                <label className="careers-resume-field">
                  Resume{" "}
                  <span className="careers-file-input">
                    <input
                      name="resume"
                      type="file"
                      accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                      onChange={handleResumeChange}
                    />
                    <small>{resumeName || "PDF or Word, up to 4 MB"}</small>
                  </span>
                </label>
                <label className="careers-about-field">
                  About you
                  <textarea
                    name="about"
                    rows="4"
                    placeholder="A short note about your work and what you want to do next."
                  />
                </label>
              </div>
              {applicationStatus && (
                <p className="careers-application-status" role="status">
                  {applicationStatus}
                </p>
              )}
              <div className="careers-application-footer">
                <button className="button button-primary" type="submit">
                  Submit Application <ArrowUpRight size={17} />
                </button>
                <span>
                  Or email{" "}
                  <a href="mailto:info@neesoft.com">info@neesoft.com</a>
                </span>
              </div>
              <p className="careers-form-note">
                Submitting opens an email draft. If you selected a resume,
                attach it to the draft before sending.
              </p>
            </form>
          </div>
        </section>

        <section
          className="careers-reasons section-pad"
          aria-labelledby="careers-reasons-title"
        >
          <div className="container-xl">
            <div className="careers-section-heading">
              <p className="section-kicker">More than a job title</p>
              <h2 id="careers-reasons-title">
                Room to learn. Work to be proud of.
              </h2>
              <p>
                We want people to build confidence, expertise, and a career with
                real momentum.
              </p>
            </div>
            <div className="careers-reason-grid">
              {reasons.map(({ icon: Icon, title, text, tone }, index) => (
                <article
                  className={`careers-reason-card careers-reason-${tone}`}
                  key={title}
                >
                  <div className="careers-reason-top">
                    <span>0{index + 1}</span>
                    <Icon size={23} strokeWidth={1.8} aria-hidden="true" />
                  </div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <ArrowDownRight
                    className="careers-reason-arrow"
                    size={19}
                    aria-hidden="true"
                  />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="careers-growth section-pad"
          aria-labelledby="careers-growth-title"
        >
          <div className="container-xl careers-growth-layout">
            <div className="careers-growth-heading">
              <p className="section-kicker">Keep moving forward</p>
              <h2 id="careers-growth-title">
                A career shaped by curiosity and growth.
              </h2>
              <p>
                Professional development happens in the work, through new
                challenges, shared knowledge, and the support to keep getting
                better.
              </p>
              <div className="careers-growth-stamp">
                <Lightbulb size={19} />
                <span>
                  Learn something
                  <br />
                  new every day
                </span>
              </div>
            </div>
            <div className="careers-growth-list">
              {growthSteps.map(([number, title, text]) => (
                <article className="careers-growth-step" key={number}>
                  <span>{number}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                  <ArrowUpRight size={17} aria-hidden="true" />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="careers-cta section-pad">
          <div className="container-xl careers-cta-inner">
            <div className="careers-cta-icon">
              <HeartHandshake size={25} />
            </div>
            <p className="section-kicker">Your next step</p>
            <h2>Let’s make good things happen.</h2>
            <p>
              Tell us a little about yourself, what you’re great at, and what
              you’d like to learn next.
            </p>
            <a className="button button-primary" href="#career-application">
              Explore roles and apply <ArrowUpRight size={18} />
            </a>
            <small>Find a role that fits your next step.</small>
          </div>
        </section>
      </main>
    </>
  );
}
