import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver.ts';

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, subtitle, children, className = 'py-16 md:py-24' }) => {
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section id={id} className={`${className} bg-white odd:bg-gray-50`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          <h2 className="text-3xl md:text-4xl font-bold font-sans text-center text-brand-blue-800 mb-4">{title}</h2>
          {subtitle && <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12 text-lg">{subtitle}</p>}
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section;