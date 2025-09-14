
import React from 'react';
import Section from './Section.tsx';
import { Workshop } from '../types.ts';
import useIntersectionObserver from '../hooks/useIntersectionObserver.ts';

interface WorkshopsProps {
  workshops: Workshop[];
  openModal: (imageUrl: string) => void;
}

const WorkshopCard: React.FC<{ workshop: Workshop, openModal: (imageUrl: string) => void, delay: number }> = ({ workshop, openModal, delay }) => {
    const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.1 });
    const otherImages = workshop.images.slice(1, 4);
    const remainingImages = workshop.images.length - 4;

    return (
        <div ref={ref} className={`bg-white rounded-lg shadow-lg overflow-hidden flex flex-col group transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: `${delay}ms`}}>
            <div className="overflow-hidden cursor-pointer" onClick={() => openModal(workshop.images[0])}>
                <img src={workshop.images[0]} alt={workshop.title} className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105" />
            </div>
            <div className="p-6 flex-grow flex flex-col">
                <p className="text-sm text-gray-500 mb-2">{workshop.date} &bull; {workshop.location}</p>
                <h3 className="text-xl font-bold font-sans text-brand-blue-800 mb-3 flex-grow">{workshop.title}</h3>
                <p className="text-gray-600 mb-4">{workshop.description}</p>
                {otherImages.length > 0 && (
                    <div className="grid grid-cols-4 gap-2 mt-auto">
                        {otherImages.map((image, index) => (
                             <div key={index} className="group/thumb relative cursor-pointer overflow-hidden rounded-md shadow-sm" onClick={() => openModal(image)}>
                                <img src={image} alt={`${workshop.title} thumbnail ${index + 1}`} className="aspect-square w-full h-full object-cover transition-transform duration-200 group-hover/thumb:scale-110" />
                            </div>
                        ))}
                        {remainingImages > 0 && (
                             <div className="group/thumb relative cursor-pointer overflow-hidden rounded-md shadow-sm flex items-center justify-center bg-gray-100" onClick={() => openModal(workshop.images[4])}>
                                <span className="text-brand-blue-800 font-bold font-sans z-10">+{remainingImages}</span>
                                <img src={workshop.images[4]} alt={`${workshop.title} thumbnail more`} className="aspect-square w-full h-full object-cover absolute inset-0 transition-opacity duration-200 opacity-20 group-hover/thumb:opacity-40" />
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};


const Workshops: React.FC<WorkshopsProps> = ({ workshops, openModal }) => {
  return (
    <Section id="workshops" title="Workshops & Activities" subtitle="Engaging with communities to promote health and education.">
       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {workshops.map((workshop, index) => (
          <WorkshopCard key={workshop.id} workshop={workshop} openModal={openModal} delay={index * 150} />
        ))}
      </div>
    </Section>
  );
};

export default Workshops;
