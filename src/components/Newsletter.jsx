import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent('Newsletter subscription request');
    const body = encodeURIComponent(`Please add this email address to the NeeSoft newsletter: ${email}`);
    window.location.href = `mailto:info@neesoft.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="newsletter-section" aria-labelledby="newsletter-title">
      <div className="container-xl">
        <div className="newsletter-panel">
          <div className="newsletter-copy">
            <p>Ideas, updates, and useful reads</p>
            <h2 id="newsletter-title">A little more insight in your inbox.</h2>
          </div>
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <label className="visually-hidden" htmlFor="newsletter-email">Email address</label>
            <input
              id="newsletter-email"
              name="email"
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
            <button type="submit">Subscribe <ArrowUpRight size={16} /></button>
          </form>
        </div>
      </div>
    </section>
  );
}