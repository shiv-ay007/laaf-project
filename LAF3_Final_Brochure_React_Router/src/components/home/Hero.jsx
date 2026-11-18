import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Download, CalendarDays, MapPin } from 'lucide-react';
import { event } from '../../data/brochure';

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });

  useEffect(() => {
    const targetDate = new Date('January 22, 2027 10:00:00').getTime();
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      if (distance < 0) { clearInterval(timer); return; }
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        mins: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        secs: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative overflow-hidden bg-white">
      
      {/* Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <iframe
          className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2"
          src="https://www.youtube.com/embed/1La4QzGeaaQ?autoplay=1&mute=1&loop=1&playlist=1La4QzGeaaQ&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&disablekb=1"
          title="Architecture Exhibition Background"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 wrap flex min-h-[90vh] flex-col items-center justify-center py-20 text-center">
        
        {/* Main Heading Only */}
        <h1 
          className="mb-12 text-4xl font-extrabold uppercase tracking-tight text-transparent sm:text-5xl lg:text-7xl xl:text-[80px]" 
          style={{ WebkitTextStroke: '2px white' }}
        >
          LUCKNOW ARCHITECTURE FESTIVAL
        </h1>

        {/* Countdown Timer Box */}
        <div className="mb-8 rounded-2xl border border-white/20 bg-black/60 p-6 backdrop-blur-md sm:px-10 shadow-2xl">
          <p className="mb-3 flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-wider text-[#d91b5c]">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#d91b5c]"></span> 
            Event Starts In
          </p>
          <div className="flex gap-4 sm:gap-8 text-white">
            {[
              { val: timeLeft.days, label: 'Days' },
              { val: timeLeft.hours, label: 'Hrs' },
              { val: timeLeft.mins, label: 'Min' },
              { val: timeLeft.secs, label: 'Sec' },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center">
                <span className="text-3xl font-bold sm:text-4xl">{String(item.val).padStart(2, '0')}</span>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-300">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
          <Link 
            to="/contact" 
            className="rounded-full bg-[#d91b5c] px-8 py-4 text-lg font-bold text-white transition hover:bg-[#b0154a] shadow-lg shadow-pink-500/30 inline-flex items-center gap-2"
          >
            Register Now <ArrowUpRight size={20}/>
          </Link>
          <a 
            href={event.download || "#"} 
            target="_blank" 
            rel="noreferrer"
            className="rounded-full border-2 border-white px-8 py-4 text-lg font-bold text-white transition hover:bg-white hover:text-black inline-flex items-center gap-2"
          >
            View Brochure <Download size={20}/>
          </a>
        </div>

        {/* Date & Location */}
        <div className="flex flex-col sm:flex-row items-center gap-6 text-sm font-medium text-white/90">
          <span className="flex items-center gap-2">
            <CalendarDays size={18} className="text-[#d91b5c]"/> 
            22 | 23 | 24 January 2027
          </span>
          <span className="hidden sm:block h-4 w-px bg-white/30"></span>
          <span className="flex items-center gap-2 text-center">
            <MapPin size={18} className="text-[#d91b5c] shrink-0"/> 
            Ekana International Stadium, Lucknow
          </span>
        </div>

      </div>

      {/* Bottom Pink Strip (Stats from PDF) */}
      <div className="relative z-10 border-t border-white/20 bg-[#d91b5c] py-4 text-white">
         <div className="wrap flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="rounded-full border-2 border-white px-6 py-2 text-sm font-bold uppercase tracking-widest">
              Limited Seats
            </span>
            <div className="flex flex-wrap justify-center gap-6 sm:gap-10 text-xl sm:text-2xl font-bold">
               <span>80+ <span className="text-sm font-normal text-white/80 block sm:inline">Exhibitors (2022)</span></span>
               <span>100+ <span className="text-sm font-normal text-white/80 block sm:inline">Companies (2025)</span></span>
               <span>3 <span className="text-sm font-normal text-white/80 block sm:inline">Days of Festival</span></span>
            </div>
         </div>
      </div>

    </section>
  );
}