import { useEffect, useRef, useState } from 'react';

export default function AnimatedCounter({ value, suffix = '', label }) {
  const counterRef = useRef(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const element = counterRef.current;
    if (!element) return undefined;

    let frameId;
    let startedAt;
    const duration = 1400;
    const finish = () => setCount(value);

    if (!('IntersectionObserver' in window)) {
      finish();
      return undefined;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();

      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        finish();
        return;
      }

      const tick = (time) => {
        if (startedAt === undefined) startedAt = time;
        const progress = Math.min((time - startedAt) / duration, 1);
        const eased = 1 - (1 - progress) ** 3;
        setCount(Math.round(value * eased));
        if (progress < 1) frameId = window.requestAnimationFrame(tick);
      };

      frameId = window.requestAnimationFrame(tick);
    }, { threshold: 0.35 });

    observer.observe(element);
    return () => {
      observer.disconnect();
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, [value]);

  return (
    <div className="metric-card" ref={counterRef}>
      <strong aria-label={`${value}${suffix} ${label}`}>
        {count}<span aria-hidden="true">{suffix}</span>
      </strong>
      <small>{label}</small>
    </div>
  );
}
