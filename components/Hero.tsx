
import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const fullTagline = "Public Health Student | Community Builder | Digital Educator | Health Advocate";
  const [typedTagline, setTypedTagline] = useState('');

  useEffect(() => {
    if (typedTagline.length < fullTagline.length) {
      const timeout = setTimeout(() => {
        setTypedTagline(fullTagline.slice(0, typedTagline.length + 1));
      }, 60);
      return () => clearTimeout(timeout);
    }
  }, [typedTagline, fullTagline]);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue-700 to-brand-orange-500 opacity-80 animate-moveGradient" style={{ backgroundSize: '200% 200%' }}></div>
      <div className="absolute inset-0 bg-cover bg-center animate-kenburns" style={{ backgroundImage: "url('https://picsum.photos/seed/hero/1920/1080')" }}></div>

      <div className="relative z-10 p-4">
        <h1 className="text-5xl md:text-7xl font-bold font-sans tracking-tight mb-4 drop-shadow-lg animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
          SHAH JAHAN BALOCH
        </h1>
        <div className="text-xl md:text-2xl font-light font-sans drop-shadow-md animate-fadeInUp min-h-[2rem]" style={{ animationDelay: '0.4s' }}>
          <span className="inline-block align-bottom">{typedTagline}</span>
          {typedTagline.length < fullTagline.length && (
            <span className="inline-block w-1 h-7 bg-brand-orange-400 -mb-1 animate-pulse"></span>
          )}
        </div>
      </div>
       <a href="#about" aria-label="Scroll down" className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 transition-transform active:scale-90">
        <svg className="w-8 h-8 text-white/70 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
      </a>
    </section>
  );
};

export default Hero;