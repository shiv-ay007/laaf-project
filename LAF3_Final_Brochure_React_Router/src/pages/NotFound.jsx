import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="flex min-h-[65vh] items-center bg-cream py-24">
      <div className="wrap text-center">
        <span className="eyebrow">404 / PAGE NOT FOUND</span>
        <h1 className="mx-auto mt-6 max-w-3xl font-display text-[54px] leading-tight sm:text-[80px]">
          This page doesn't exist.
        </h1>
        <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-muted">
          The page you tried to open isn't available. Explore the festival from the homepage.
        </p>
        <Link to="/" className="btn-dark mt-9">
          <ArrowLeft size={16} /> Back to homepage
        </Link>
      </div>
    </section>
  );
}
