import { Link } from "react-router-dom";
import { ArrowUp, Mail, MapPin, Phone } from "lucide-react";
import Newsletter from "./Newsletter.jsx";
// import Logo from "../assets/Logo.png";
export default function Footer() {
  return (
    <>
      <Newsletter />
      <footer className="site-footer">
        <div className="container-xl footer-grid">
          <div className="footer-intro">
            {/* <img className="brand-logo" src={Logo} alt="NeeSoft" /> */}
            <p className="footer-overline">Ready to</p>
            <h2>Work with us?</h2>
            <p>
              Tell us where you want to go. We can help you find a clear path
              forward.
            </p>
          </div>
          <div className="footer-services">
            <p className="footer-label">Our Services</p>
            <Link to="/services">Custom Software Development</Link>
            <Link to="/services">Web Application Development</Link>
            <Link to="/services">Enterprise Solutions</Link>
            <Link to="/services">Maintenance &amp; Support</Link>
            <Link to="/services">IT Consulting</Link>
          </div>
          <div className="footer-contact">
            <p className="footer-label">Contact Us</p>
            <a href="tel:+919840173006">
              <span className="footer-contact-icon">
                <Phone size={16} />
              </span>
              <span>
                <small>Call us</small>+91 98401 73006
              </span>
            </a>
            <a href="mailto:info@neesoft.com">
              <span className="footer-contact-icon">
                <Mail size={16} />
              </span>
              <span>
                <small>Email us</small>info@neesoft.com
              </span>
            </a>
            <div className="footer-location">
              <span className="footer-contact-icon">
                <MapPin size={16} />
              </span>
              <span>
                <small>Our location</small>
                Neesoft Solution Pvt Ltd, <br />
                Office-A, I Floor, Kaashyap Enclave, <br />
                13-A/209, Velachery Main Rd, Dhadeswaram Nagar, <br />
                Velachery, Chennai, Tamil Nadu 600042.
              </span>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container-xl footer-bottom-inner">
            <span>Copyright 2026 NeeSoft Private Limited</span>
            <nav aria-label="Footer navigation">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/clients">Clients</Link>
              <Link to="/contact">Contact</Link>
            </nav>
          </div>
        </div>
      </footer>
      <button
        className="back-to-top"
        type="button"
        aria-label="Back to top"
        title="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <ArrowUp size={19} />
      </button>
      <a
        className="whatsapp-float"
        href="https://wa.me/919840173006?text=Hello%20NeeSoft%2C%20I%27d%20like%20to%20know%20more."
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with NeeSoft on WhatsApp"
        title="Chat with us on WhatsApp"
      >
        <svg
          viewBox="0 0 32 32"
          role="img"
          aria-hidden="true"
          focusable="false"
        >
          <path d="M16 3.2A12.55 12.55 0 0 0 5.23 22.2L3.5 28.5l6.45-1.69A12.58 12.58 0 1 0 16 3.2Zm0 22.9a10.3 10.3 0 0 1-5.25-1.44l-.38-.22-3.83 1 1.02-3.73-.25-.39A10.34 10.34 0 1 1 16 26.1Zm5.67-7.74c-.31-.16-1.83-.9-2.11-1-.28-.1-.49-.16-.7.16-.2.31-.8 1-.98 1.2-.18.21-.36.24-.67.08-.31-.16-1.3-.48-2.48-1.53-.92-.82-1.54-1.83-1.72-2.14-.18-.31-.02-.48.14-.64.14-.14.31-.36.46-.54.16-.18.21-.31.31-.52.1-.21.05-.39-.03-.55-.08-.15-.7-1.68-.96-2.3-.25-.6-.51-.52-.7-.53h-.59c-.2 0-.54.08-.82.39-.28.31-1.07 1.05-1.07 2.56s1.1 2.97 1.25 3.18c.15.2 2.16 3.3 5.23 4.63.73.32 1.3.52 1.75.66.74.24 1.41.2 1.94.12.59-.09 1.83-.75 2.08-1.48.26-.72.26-1.34.18-1.47-.08-.13-.28-.21-.59-.36Z" />
        </svg>
      </a>
    </>
  );
}
