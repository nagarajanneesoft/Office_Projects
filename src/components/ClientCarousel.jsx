import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { clients } from '../data/siteData.js';

export default function ClientCarousel() {
  const trackRef = useRef(null);
  const [paused, setPaused] = useState(false);

  const move = (direction) => {
    const track = trackRef.current;
    if (!track) return;
    const firstCard = track.querySelector('.home-client-wordmark');
    const gap = Number.parseFloat(window.getComputedStyle(track).columnGap) || 14;
    const step = firstCard ? (firstCard.getBoundingClientRect().width + gap) * 2 : track.clientWidth * 0.72;
    track.scrollBy({ left: direction * step, behavior: 'smooth' });
  };

  useEffect(() => {
    if (paused) return undefined;

    const timer = window.setInterval(() => {
      const track = trackRef.current;
      if (!track || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

      const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 8;
      const firstCard = track.querySelector('.home-client-wordmark');
      const gap = Number.parseFloat(window.getComputedStyle(track).columnGap) || 14;
      const step = firstCard ? firstCard.getBoundingClientRect().width + gap : track.clientWidth * 0.72;
      if (atEnd) {
        track.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        track.scrollBy({ left: step, behavior: 'smooth' });
      }
    }, 3200);

    return () => window.clearInterval(timer);
  }, [paused]);

  return (
    <section className="home-client-strip" aria-label="Selected clients">
      <div className="container-xl">
        <div className="home-client-heading">
          <div>
            <p className="section-kicker">Trusted by teams at</p>
          </div>
          <div className="home-client-controls">
            <button type="button" aria-label="Previous clients" onClick={() => move(-1)}>
              <ChevronLeft size={19} />
            </button>
            <button type="button" aria-label="Next clients" onClick={() => move(1)}>
              <ChevronRight size={19} />
            </button>
          </div>
        </div>
        <div
          className="home-client-track"
          ref={trackRef}
          role="region"
          aria-label="Client carousel"
          tabIndex={0}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false);
          }}
        >
          {clients.slice(0, 6).map((client, index) => (
            <div className="home-client-wordmark" key={`${client}-${index}`}>
              <strong>{client}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
