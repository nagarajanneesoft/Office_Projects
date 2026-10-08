import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function PageHero({ eyebrow, title, text }) {
  return (
    <section className="page-hero">
      <div className="container-xl">
        <p className="page-hero-eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{text}</p>
        <div className="breadcrumbs">
          <Link to="/">Home</Link>
          <ChevronRight size={15} /> <strong>{title}</strong>
        </div>
      </div>
    </section>
  );
}