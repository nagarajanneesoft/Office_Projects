import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  ArrowUpRight,
  Clock3,
  Mail,
  MapPin,
  Menu,
  Phone,
  X,
} from "lucide-react";
import Logo from "../assets/Logo.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    let frame = 0;
    const updateProgress = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        const scrollableHeight =
          document.documentElement.scrollHeight - window.innerHeight;
        const progress = scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;
        document.documentElement.style.setProperty(
          "--site-scroll-progress",
          String(Math.min(1, Math.max(0, progress))),
        );
      });
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
      document.documentElement.style.removeProperty("--site-scroll-progress");
    };
  }, []);

  return (
    <header className="site-header">
      <span className="site-scroll-progress" aria-hidden="true" />
      <div className="header-topbar">
        <div className="container-xl header-topbar-inner">
          <div className="header-topbar-details">
            <a href="mailto:info@neesoft.com">
              <Mail size={14} /> info@neesoft.com
            </a>
            <span>
              <Clock3 size={14} /> Mon-Fri, 9 AM-6 PM IST
            </span>
          </div>
          <Link to="/contact">
            Talk to our team <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
      <nav className="nav-wrap container-xl" aria-label="Primary navigation">
        <Link
          className="brand"
          to="/"
          aria-label="NeeSoft home"
          onClick={closeMenu}
        >
          <img className="brand-logo" src={Logo} alt="NeeSoft" />
        </Link>
        <div className="header-actions">
          <div className="nav-links">
            <NavLink end to="/" onClick={closeMenu}>
              Home
            </NavLink>
            <NavLink to="/about" onClick={closeMenu}>
              About Us
            </NavLink>
            <NavLink to="/services" onClick={closeMenu}>
              Services
            </NavLink>
            <NavLink to="/clients" onClick={closeMenu}>
              Clients
            </NavLink>
            <NavLink to="/contact" onClick={closeMenu}>
              Contact
            </NavLink>
            <NavLink className="nav-cta" to="/contact" onClick={closeMenu}>
              Get Quote <ArrowUpRight size={16} />
            </NavLink>
          </div>
          <button
            className="menu-toggle"
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <X size={20} strokeWidth={1.8} />
            ) : (
              <Menu size={20} strokeWidth={1.8} />
            )}
          </button>
        </div>
      </nav>
      <div
        className={`menu-backdrop ${menuOpen ? "is-visible" : ""}`}
        aria-hidden="true"
        onClick={closeMenu}
      />
      <aside
        className={`menu-drawer ${menuOpen ? "is-open" : ""}`}
        aria-label="Quick contact and menu"
        aria-hidden={!menuOpen}
        inert={!menuOpen}
      >
        <button
          className="drawer-close"
          type="button"
          aria-label="Close menu"
          onClick={closeMenu}
        >
          <X size={22} />
        </button>
        <Link
          className="brand drawer-brand"
          to="/"
          onClick={closeMenu}
          aria-label="NeeSoft home"
        >
          <img className="brand-logo" src={Logo} alt="NeeSoft" />
        </Link>
        <p className="drawer-intro">
          Thoughtful technology, built around the way your business works.
        </p>
        <p className="drawer-heading">Explore NeeSoft</p>
        <div className="drawer-links">
          <NavLink end to="/" onClick={closeMenu}>
            Home <ArrowUpRight size={16} />
          </NavLink>
          <NavLink to="/about" onClick={closeMenu}>
            About Us <ArrowUpRight size={16} />
          </NavLink>
          <NavLink to="/services" onClick={closeMenu}>
            Services <ArrowUpRight size={16} />
          </NavLink>
          <NavLink to="/clients" onClick={closeMenu}>
            Clients <ArrowUpRight size={16} />
          </NavLink>
        </div>
        <p className="drawer-heading drawer-contact-heading">Get in touch</p>
        <div className="drawer-contact-list">
          <a href="tel:+919840173006">
            <Phone size={17} />
            <span>
              <small>Call us</small>+91 98401 73006
            </span>
          </a>
          <a href="mailto:info@neesoft.com">
            <Mail size={17} />
            <span>
              <small>Email us</small>info@neesoft.com
            </span>
          </a>
          <div>
            <MapPin size={17} />
            <span>
              <small>Visit us</small>Chennai, Tamil Nadu
            </span>
          </div>
        </div>
        <Link
          className="button button-primary drawer-cta"
          to="/contact"
          onClick={closeMenu}
        >
          Start a conversation <ArrowUpRight size={17} />
        </Link>
      </aside>
    </header>
  );
}
