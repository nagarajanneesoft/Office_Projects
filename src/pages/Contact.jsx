import { useState } from "react";
import { ArrowUpRight, Check, Mail, MapPin, Phone, X } from "lucide-react";
import { services } from "../data/siteData.js";
import PageHero from "../components/PageHero.jsx";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    details: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const updateField = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: "" }));
    setSubmitted(false);
  };

  const validateForm = () => {
    const nextErrors = {};
    const phoneDigits = formData.phone.replace(/\D/g, "");

    if (formData.name.trim().length < 2)
      nextErrors.name = "Please enter your full name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      nextErrors.email = "Enter a valid email address.";
    if (phoneDigits.length < 10 || phoneDigits.length > 15)
      nextErrors.phone = "Enter a valid phone number.";
    if (!formData.service) nextErrors.service = "Please select a service.";
    if (formData.details.trim().length < 20)
      nextErrors.details =
        "Please add at least 20 characters about your project.";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", service: "", details: "" });
    }
  };

  const closeSuccessModal = () => setSubmitted(false);

  return (
    <>
      <PageHero
        eyebrow="Start a conversation"
        title="Contact Us"
        text="Have a project or technology challenge in mind? Let’s connect and explore how NeeSoft can help."
      />
      <section className="section-pad contact-page">
        <div className="container-xl contact-intro">
          <p className="section-kicker">Let&apos;s talk</p>
          <h2>Make your next idea work harder.</h2>
          <p>
            Share what you are working on. We&apos;ll help you find a practical
            way forward.
          </p>
        </div>
        <div className="container-xl contact-layout">
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <p className="section-kicker">Project inquiry</p>
            <h2>Tell us about your project</h2>
            <p>
              Tell us about your project and our team will get back to you
              shortly.
            </p>
            <label className={errors.name ? "has-error" : ""}>
              Full Name
              <input
                name="name"
                value={formData.name}
                onChange={updateField}
                type="text"
                placeholder="John Doe"
                aria-invalid={Boolean(errors.name)}
              />
              {errors.name && (
                <span className="field-error">{errors.name}</span>
              )}
            </label>
            <div className="form-row">
              <label className={errors.email ? "has-error" : ""}>
                Email Address
                <input
                  name="email"
                  value={formData.email}
                  onChange={updateField}
                  type="email"
                  placeholder="john@example.com"
                  aria-invalid={Boolean(errors.email)}
                />
                {errors.email && (
                  <span className="field-error">{errors.email}</span>
                )}
              </label>
              <label className={errors.phone ? "has-error" : ""}>
                Phone Number
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={updateField}
                  type="tel"
                  placeholder="+91 00000 00000"
                  aria-invalid={Boolean(errors.phone)}
                />
                {errors.phone && (
                  <span className="field-error">{errors.phone}</span>
                )}
              </label>
            </div>
            <label className={errors.service ? "has-error" : ""}>
              Service Interest
              <select
                name="service"
                value={formData.service}
                onChange={updateField}
                aria-invalid={Boolean(errors.service)}
              >
                <option value="" disabled>
                  Select a service
                </option>
                {services.map((service) => (
                  <option key={service.title}>{service.title}</option>
                ))}
              </select>
              {errors.service && (
                <span className="field-error">{errors.service}</span>
              )}
            </label>
            <label className={errors.details ? "has-error" : ""}>
              Project Details
              <textarea
                name="details"
                value={formData.details}
                onChange={updateField}
                rows="5"
                placeholder="Tell us about your project requirements..."
                aria-invalid={Boolean(errors.details)}
              />
              {errors.details && (
                <span className="field-error">{errors.details}</span>
              )}
            </label>

            <button className="nav-cta" type="submit">
              Send inquiry <ArrowUpRight size={18} />
            </button>
          </form>
          <div className="contact-details">
            <div className="contact-detail wide">
              <Phone />
              <div>
                <span>Call us</span>
                <strong>+91 44 4617 9493</strong>
                <small>Mon-Fri, 9 AM - 6 PM IST</small>
              </div>
            </div>
            <div className="contact-detail wide">
              <Mail />
              <div>
                <span>Email us</span>
                <strong>info@neesoft.com</strong>
                <small>We reply within 24 hours</small>
              </div>
            </div>
            <div className="contact-detail wide">
              <MapPin />
              <div>
                <span>Our office</span>
                <strong>
                  Third Floor, No. 207, Velachery Main Road,
                  <br />
                  Dhadeswaram Nagar, Velachery,
                  <br />
                  Chennai, Tamil Nadu - 600042
                </strong>
              </div>
            </div>
          </div>
        </div>
      </section>
      {submitted && (
        <div
          className="success-modal-backdrop"
          role="presentation"
          onClick={(event) =>
            event.target === event.currentTarget && closeSuccessModal()
          }
        >
          <div
            className="success-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="success-title"
          >
            <button
              className="modal-close"
              type="button"
              aria-label="Close success message"
              onClick={closeSuccessModal}
            >
              <X size={18} />
            </button>
            <div className="success-icon">
              <Check size={28} />
            </div>
            <p className="section-kicker">Inquiry received</p>
            <h2 id="success-title">Thanks for reaching out.</h2>
            <p>
              Our team has your project details and will get back to you within
              24 hours.
            </p>
            <button
              className="button button-primary modal-action"
              type="button"
              onClick={closeSuccessModal}
            >
              Done <Check size={17} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
