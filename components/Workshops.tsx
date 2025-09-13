import React from 'react';
import Section from './Section.tsx';
import { Workshop } from '../types.ts';
import useIntersectionObserver from '../hooks/useIntersectionObserver.ts';

interface WorkshopsProps {
  workshops: Workshop[];
  openModal: (imageUrl: string) => void;
}

const ActivityCard: React.FC<{ workshop: Workshop; index: number; openModal: (imageUrl: string) => void }> = ({ workshop, index, openModal }) => {
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.1 });

  return (
    <div ref={ref} className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-xl ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ animationDelay: `${index * 150}ms` }}>
      {/* Header with main image */}
      <div className="relative aspect-[16/9] overflow-hidden cursor-pointer group" onClick={() => openModal(workshop.images[0])}>
        <img 
          src={workshop.images[0]} 
          alt={workshop.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-white font-bold text-lg md:text-xl mb-1">{workshop.title}</h3>
          <div className="flex items-center space-x-2 text-white/90 text-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
            <span>{workshop.date}</span>
          </div>
        </div>
        {workshop.images.length > 1 && (
          <div className="absolute top-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded-full">
            +{workshop.images.length - 1} photos
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 md:p-5">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-1 text-brand-orange-600 text-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
            <span className="text-xs">{workshop.location}</span>
          </div>
        </div>

        <p className="text-gray-700 text-sm leading-relaxed mb-4">
          {workshop.description}
        </p>

        <div className="bg-gray-50 rounded-lg p-3 mb-4">
          <div className="flex items-center space-x-2 mb-1">
            <svg className="w-4 h-4 text-brand-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
            </svg>
            <span className="font-semibold text-brand-blue-800 text-sm">Impact:</span>
          </div>
          <p className="text-gray-700 text-sm">{workshop.impact}</p>
        </div>

        {/* Photo gallery thumbnail */}
        {workshop.images.length > 1 && (
          <div className="grid grid-cols-4 gap-2">
            {workshop.images.slice(1, 5).map((image, idx) => (
              <div key={idx} className="aspect-square overflow-hidden rounded-lg cursor-pointer group" onClick={() => openModal(image)}>
                <img 
                  src={image} 
                  alt={`${workshop.title} - ${idx + 2}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" 
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const Workshops: React.FC<WorkshopsProps> = ({ workshops, openModal }) => {
  return (
    <Section id="workshops" title="Community Activities & Events" subtitle="Real impact through community engagement and education.">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-8">
        {workshops.map((workshop, index) => (
          <ActivityCard key={workshop.id} workshop={workshop} index={index} openModal={openModal} />
        ))}
      </div>
    </Section>
  );
};

export default Workshops;