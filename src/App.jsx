import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Clients from "./pages/Clients.jsx";
import Contact from "./pages/Contact.jsx";
import "./App.css";

function AppRoutes() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    if (!("IntersectionObserver" in window)) return undefined;

    const targets = document.querySelectorAll(
      ".page-transition > section:not(.page-hero), .page-transition > main > section:not(.hero-section):not(.page-hero), .newsletter-section, .site-footer",
    );
    const revealDirections = [
      "left",
      "right",
      "top",
      "bottom",
      "zoom",
      "bounce",
    ];
    targets.forEach((target, index) => {
      target.classList.add("scroll-reveal");
      target.dataset.reveal = revealDirections[index % revealDirections.length];
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("is-visible", entry.isIntersecting);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -48px 0px" },
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, [location.pathname]);

  return (
    <div className="page-transition" key={location.pathname}>
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default function App() {
  useEffect(() => {
    const loader = document.getElementById("app-loader");
    if (!loader) return undefined;

    let loadTimeout;
    let removeTimeout;
    let resolvePageLoad;
    const pageLoaded =
      document.readyState === "complete"
        ? Promise.resolve()
        : new Promise((resolve) => {
            resolvePageLoad = resolve;
            window.addEventListener("load", resolve, { once: true });
          });
    const minimumDisplayTime = new Promise((resolve) => {
      loadTimeout = window.setTimeout(resolve, 500);
    });

    Promise.all([pageLoaded, minimumDisplayTime]).then(() => {
      loader.classList.add("app-loader-hidden");
      removeTimeout = window.setTimeout(() => loader.remove(), 300);
    });

    return () => {
      if (resolvePageLoad) {
        window.removeEventListener("load", resolvePageLoad);
      }
      window.clearTimeout(loadTimeout);
      window.clearTimeout(removeTimeout);
    };
  }, []);

  return (
    <BrowserRouter>
      <div className="site-shell">
        <Header />
        <AppRoutes />
        <Footer />
      </div>
    </BrowserRouter>
  );
}
