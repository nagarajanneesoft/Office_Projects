import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { clients } from '../data/siteData.js';

const visibleClients = clients.slice(0, 6);
const clientLoop = [...visibleClients, ...visibleClients, ...visibleClients];

export default function ClientCarousel() {
  const trackRef = useRef(null);
  const [paused, setPaused] = useState(false);

  const getMetrics = () => {
    const track = trackRef.current;
    const firstCard = track?.querySelector('.home-client-wordmark');
    if (!track || !firstCard) return null;
    const gap = Number.parseFloat(window.getComputedStyle(track).columnGap) || 14;
    const step = firstCard.getBoundingClientRect().width + gap;
    return { track, step, cycle: step * visibleClients.length };
  };

  useLayoutEffect(() => {
    const metrics = getMetrics();
    if (metrics) metrics.track.scrollLeft = metrics.cycle;
  }, []);

  const move = (direction) => {
    const metrics = getMetrics();
    if (!metrics) return;
    metrics.track.scrollBy({ left: direction * metrics.step * 2, behavior: 'smooth' });
  };

  const normalizeLoop = () => {
    const metrics = getMetrics();
    if (!metrics) return;
    const { track, step, cycle } = metrics;
    if (track.scrollLeft >= cycle * 2 - step / 2) track.scrollLeft -= cycle;
    else if (track.scrollLeft <= step / 2) track.scrollLeft += cycle;
  };

  useEffect(() => {
    if (paused) return undefined;

    const timer = window.setInterval(() => {
      const metrics = getMetrics();
      if (!metrics || document.hidden || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      metrics.track.scrollBy({ left: metrics.step, behavior: 'smooth' });
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
          onScroll={normalizeLoop}
        >
          {clientLoop.map((client, index) => (
            <div className="home-client-wordmark" key={`${client}-${index}`} aria-hidden={index < visibleClients.length || index >= visibleClients.length * 2}>
              <strong>{client}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
