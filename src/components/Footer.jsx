import { Link } from "react-router-dom";
import {
  ArrowUp,
  Bot,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Newsletter from "./Newsletter.jsx";
// import Logo from "../assets/Logo.png";

const quickReplies = ["Services", "Contact", "Careers", "Start a project"];

function getReply(message) {
  const text = message.toLowerCase();
  if (/\b(cancel|stop)\b/.test(text))
    return "No problem. I’ve stopped the project inquiry. You can choose another topic whenever you’re ready.";
  if (/service|what do you do|offerings/.test(text))
    return "NeeSoft builds custom software, web applications, enterprise solutions, and provides maintenance and IT consulting. Which service would you like to explore?";
  if (/career|job|hiring|resume/.test(text))
    return "For career opportunities, please email your resume and the role you’re interested in to info@neesoft.com.";
  if (/contact|email|phone|call|reach/.test(text))
    return "You can reach our team at info@neesoft.com or call +91 98401 73006. Our office is in Velachery, Chennai.";
  if (/project|build|inquiry|website|app/.test(text))
    return "I can help start a project inquiry. What’s your name?";
  return "I can help with NeeSoft services, careers, contact details, or a project inquiry. What would you like to know?";
}

function createGreeting() {
  return [
    {
      id: 1,
      role: "assistant",
      text: "Hello. I can help with NeeSoft services, careers, and contact details, or send a short project inquiry to the team.",
    },
  ];
}

export default function Footer() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(createGreeting);
  const [draft, setDraft] = useState("");
  const [inquiry, setInquiry] = useState(null);
  const messageListRef = useRef(null);

  useEffect(() => {
    messageListRef.current?.scrollTo({
      top: messageListRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages]);

  function addMessage(role, text) {
    setMessages((current) => [
      ...current,
      { id: Date.now() + Math.random(), role, text },
    ]);
  }

  function beginInquiry() {
    setInquiry({ step: "name", name: "" });
    addMessage("user", "Start a project");
    addMessage(
      "assistant",
      "I can send a short inquiry to the NeeSoft team. What is your name?",
    );
  }

  function handleQuickReply(reply) {
    if (reply === "Start a project") return beginInquiry();
    addMessage("user", reply);
    addMessage("assistant", getReply(reply));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const text = draft.trim();
    if (!text) return;
    setDraft("");
    addMessage("user", text);
    if (inquiry?.step === "name") {
      if (text.length < 2)
        return addMessage(
          "assistant",
          "Please enter your name so I can prepare the inquiry.",
        );
      setInquiry({ step: "email", name: text });
      return addMessage(
        "assistant",
        `Thanks, ${text}. What is your email address?`,
      );
    }
    if (inquiry?.step === "email") {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text))
        return addMessage(
          "assistant",
          "That email does not look quite right. Please enter a valid email address.",
        );
      setInquiry({ ...inquiry, step: "project", email: text });
      return addMessage(
        "assistant",
        "What would you like the team to help you build? A short description is perfect.",
      );
    }
    if (inquiry?.step === "project") {
      const subject = encodeURIComponent("NeeSoft project inquiry");
      const body = encodeURIComponent(
        `Name: ${inquiry.name}\nEmail: ${inquiry.email}\nProject: ${text}`,
      );
      setInquiry(null);
      addMessage(
        "assistant",
        "Your inquiry is ready. Use the email link below to send it to our team.",
      );
      setMessages((current) => [
        ...current,
        {
          id: Date.now() + Math.random(),
          role: "assistant",
          text: "Open email draft",
          href: `mailto:info@neesoft.com?subject=${subject}&body=${body}`,
        },
      ]);
      return;
    }
    if (/\b(cancel|stop)\b/i.test(text)) setInquiry(null);
    addMessage("assistant", getReply(text));
  }

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
              <Link to="/services">Services</Link>
              <Link to="/clients">Clients</Link>
              <Link to="/careers">Careers</Link>
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
      {/* <a
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
      </a> */}
      <button
        className={`whatsapp-float ${isOpen ? " is-open" : ""}`}
        type="button"
        aria-label={
          isOpen ? "Close NeeSoft support chat" : "Open NeeSoft support chat"
        }
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
      >
        {isOpen ? (
          <X size={22} />
        ) : (
          <>
            <svg width="30" height="30" viewBox="0 0 48 48" aria-hidden="true">
              <g
                fill="none"
                stroke="#3d5566"
                stroke-width="2.6"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M8.5 21a15.5 15.5 0 0 1 31 0"></path>
                <path d="M39.5 33v2.5a6 6 0 0 1-6 6H30"></path>
              </g>
              <rect
                x="5"
                y="20"
                width="7"
                height="13"
                rx="3.5"
                fill="#7fd0f7"
                stroke="#3d5566"
                stroke-width="2.4"
              ></rect>
              <rect
                x="36"
                y="20"
                width="7"
                height="13"
                rx="3.5"
                fill="#7fd0f7"
                stroke="#3d5566"
                stroke-width="2.4"
              ></rect>
              <path
                d="M17.5 12H30.5A4.5 4.5 0 0 1 35 16.5V26.5A4.5 4.5 0 0 1 30.5 31H22L16.5 36V30.7A4.5 4.5 0 0 1 13 26.5V16.5A4.5 4.5 0 0 1 17.5 12Z"
                fill="#ffe36e"
                stroke="#3d5566"
                stroke-width="2.4"
                stroke-linejoin="round"
              ></path>
              <path
                d="M20 19.5v3M28 19.5v3"
                stroke="#3d5566"
                stroke-width="2.6"
                stroke-linecap="round"
              ></path>
              <path d="M20.5 24.5h7a3.5 3.5 0 0 1-7 0Z" fill="#3d5566"></path>
              <rect
                x="22"
                y="39"
                width="8"
                height="5"
                rx="2.5"
                fill="#7fd0f7"
                stroke="#3d5566"
                stroke-width="2.2"
              ></rect>
            </svg>
            {/* <MessageCircle size={22} />
            <span>Support</span> */}
          </>
        )}
      </button>
      {isOpen && (
        <section
          className="support-chat"
          aria-label="NeeSoft Support"
          role="dialog"
        >
          <header className="support-chat-header">
            <span className="support-bot-avatar">
              {/* <Bot size={25} /> */}
              <svg
                width="25"
                height="25"
                viewBox="0 0 48 48"
                aria-hidden="true"
              >
                <g
                  fill="none"
                  stroke="#3d5566"
                  stroke-width="2.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M8.5 21a15.5 15.5 0 0 1 31 0"></path>
                  <path d="M39.5 33v2.5a6 6 0 0 1-6 6H30"></path>
                </g>
                <rect
                  x="5"
                  y="20"
                  width="7"
                  height="13"
                  rx="3.5"
                  fill="#7fd0f7"
                  stroke="#3d5566"
                  stroke-width="2.4"
                ></rect>
                <rect
                  x="36"
                  y="20"
                  width="7"
                  height="13"
                  rx="3.5"
                  fill="#7fd0f7"
                  stroke="#3d5566"
                  stroke-width="2.4"
                ></rect>
                <path
                  d="M17.5 12H30.5A4.5 4.5 0 0 1 35 16.5V26.5A4.5 4.5 0 0 1 30.5 31H22L16.5 36V30.7A4.5 4.5 0 0 1 13 26.5V16.5A4.5 4.5 0 0 1 17.5 12Z"
                  fill="#ffe36e"
                  stroke="#3d5566"
                  stroke-width="2.4"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M20 19.5v3M28 19.5v3"
                  stroke="#3d5566"
                  stroke-width="2.6"
                  stroke-linecap="round"
                ></path>
                <path d="M20.5 24.5h7a3.5 3.5 0 0 1-7 0Z" fill="#3d5566"></path>
                <rect
                  x="22"
                  y="39"
                  width="8"
                  height="5"
                  rx="2.5"
                  fill="#7fd0f7"
                  stroke="#3d5566"
                  stroke-width="2.2"
                ></rect>
              </svg>
            </span>
            <strong>NeeSoft Support</strong>
            <button
              type="button"
              aria-label="Close chat"
              onClick={() => setIsOpen(false)}
            >
              <X size={20} />
            </button>
          </header>
          <div
            className="support-chat-messages"
            ref={messageListRef}
            aria-live="polite"
          >
            {messages.map((message) =>
              message.href ? (
                <a
                  className="support-message support-email-link"
                  href={message.href}
                  key={message.id}
                >
                  {message.text}
                </a>
              ) : (
                <div
                  className={`support-message support-message-${message.role}`}
                  key={message.id}
                >
                  {message.text}
                </div>
              ),
            )}
            {messages.length === 1 && (
              <div className="support-quick-replies">
                {quickReplies.map((reply) => (
                  <button
                    type="button"
                    key={reply}
                    onClick={() => handleQuickReply(reply)}
                  >
                    {reply}
                  </button>
                ))}
              </div>
            )}
            {inquiry && (
              <p className="support-hint">Type cancel to stop the inquiry.</p>
            )}
          </div>
          <form className="support-chat-form" onSubmit={handleSubmit}>
            <input
              value={draft}
              onChange={(event) => setDraft(event.target.value)}
              placeholder={inquiry ? "Type your reply" : "Ask about NeeSoft"}
              aria-label="Message NeeSoft Support"
            />
            <button
              type="submit"
              aria-label="Send message"
              disabled={!draft.trim()}
            >
              <Send size={16} />
            </button>
          </form>
        </section>
      )}
    </>
  );
}
