import { Link } from "react-router-dom";
import { ArrowUp, ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
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
    </>
  );
}
