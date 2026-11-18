import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

function RouteScroll() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const frame = requestAnimationFrame(() => {
        const target = document.getElementById(decodeURIComponent(hash.slice(1)));
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
      return () => cancelAnimationFrame(frame);
    }
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname, hash]);

  return null;
}

export default function SiteLayout() {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handle = () => setVisible(window.scrollY > 650);
    handle();
    window.addEventListener('scroll', handle, { passive: true });
    return () => window.removeEventListener('scroll', handle);
  }, []);

  return (
    <div className="min-h-screen bg-cream">
      <RouteScroll />
      <Header />
      <main><Outlet /></main>
      <Footer />
      {visible && (
        <button
          type="button"
          onClick={() => {
            if (window.location.pathname !== '/') navigate('/');
            else window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-30 flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-ink shadow-editorial transition hover:bg-ink hover:text-white"
        >
          <ArrowUp size={18} />
        </button>
      )}
    </div>
  );
}
