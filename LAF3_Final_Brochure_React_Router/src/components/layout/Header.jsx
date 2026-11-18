import { useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { ArrowUpRight, Download, Menu, X, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import { navLinks, event } from '../../data/brochure';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);
  
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 15);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navClass = ({ isActive }) => 
    `text-[14px] xl:text-[15px] font-semibold transition hover:text-accent whitespace-nowrap ${isActive ? 'text-accent' : 'text-[#50544f]'}`;

  return (
    <header className={`sticky top-0 z-50 border-b transition duration-300 w-full ${scrolled || open ? 'border-line bg-white/95 shadow-[0_4px_24px_rgba(0,0,0,.03)] backdrop-blur-xl' : 'border-transparent bg-cream/95'}`}>
      
      {/* 1. TOP BAR */}
      <div className="border-b border-line bg-ink text-white w-full">
        <div className="wrap flex h-[35px] items-center justify-between text-[12px] font-medium">
          <div className="flex gap-4 sm:gap-5">
            <Link to="/about" className="hover:text-accent transition whitespace-nowrap">About</Link>
            <Link to="/contact" className="hover:text-accent transition whitespace-nowrap">Contact</Link>
            <Link to="/write-for-us" className="hover:text-accent transition hidden sm:block whitespace-nowrap">Write for Us</Link>
            <Link to="/archive" className="hover:text-accent transition hidden sm:block whitespace-nowrap">Archive</Link>
          </div>
          <div className="flex items-center gap-3">
            <Facebook size={14} className="cursor-pointer hover:text-accent transition" />
            <Twitter size={14} className="cursor-pointer hover:text-accent transition" />
            <Instagram size={14} className="cursor-pointer hover:text-accent transition" />
            <Youtube size={14} className="cursor-pointer hover:text-accent transition" />
            <Linkedin size={14} className="cursor-pointer hover:text-accent transition" />
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVBAR */}
      <div className="wrap flex h-[78px] items-center justify-between gap-2 lg:gap-4 lg:h-[92px] w-full">
        
        {/* Logo Left */}
        <Link to="/" aria-label="LAF 3.0 home" className="flex min-w-0 items-center gap-3 shrink-0">
          <img src="/assets/laf-logo.png" alt="Official LAF 3.0 logo" className="h-[48px] w-[98px] object-contain object-left sm:h-[55px] sm:w-[110px]"/>
          <span className="hidden border-l border-line pl-3 text-[11px] font-bold leading-[1.6] tracking-[.09em] text-ink 2xl:block whitespace-nowrap">LUCKNOW<br/>ARCHITECTURE FESTIVAL</span>
        </Link>

        {/* Center: Nav Links */}
        <nav className="hidden flex-1 items-center justify-center gap-3 xl:gap-5 lg:flex min-w-0" aria-label="Main navigation">
          {navLinks.map(link => (
            <NavLink key={link.to} to={link.to} end={link.to === '/'} className={navClass}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Right: Brochure & Enquire */}
        <div className="hidden items-center gap-3 lg:flex shrink-0">
          <a href={event.download} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-[13px] font-bold text-ink transition hover:text-accent whitespace-nowrap">
            <Download size={15}/> Brochure
          </a>
          <Link to="/contact" className="inline-flex items-center gap-1.5 rounded-full bg-ink px-4 py-2.5 text-[13px] font-bold text-white transition hover:bg-accent whitespace-nowrap">
            Enquire <ArrowUpRight size={15}/>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          type="button" 
          className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white lg:hidden shrink-0" 
          onClick={() => setOpen(v => !v)} 
          aria-expanded={open} 
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* 3. MOBILE MENU */}
      {open && (
        <nav className="border-t border-line bg-white px-5 py-5 lg:hidden w-full absolute top-full left-0 shadow-lg" aria-label="Mobile navigation">
          <div className="mx-auto grid max-w-4xl grid-cols-2 gap-2 sm:grid-cols-3">
            {navLinks.map(link => (
              <NavLink 
                key={link.to} 
                to={link.to} 
                onClick={() => setOpen(false)} 
                end={link.to === '/'} 
                className={({ isActive }) => `rounded-xl border px-4 py-3 text-[15px] font-semibold ${isActive ? 'border-accent bg-cream text-accent' : 'border-line text-ink'}`}
              >
                {link.label}
              </NavLink>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="rounded-xl bg-ink px-4 py-3 text-center text-[15px] font-semibold text-white">
              Contact
            </Link>
            <a href={event.download} target="_blank" rel="noreferrer" className="rounded-xl border border-line px-4 py-3 text-center text-[15px] font-semibold text-ink flex items-center justify-center gap-2">
               <Download size={16}/> Brochure
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}