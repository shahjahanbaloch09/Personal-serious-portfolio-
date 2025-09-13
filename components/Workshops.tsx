import React from 'react';
import Section from './Section.tsx';
import { Workshop } from '../types.ts';

interface WorkshopsProps {
  workshops: Workshop[];
  openModal: (imageUrl: string) => void;
}

const Workshops: React.FC<WorkshopsProps> = ({ workshops, openModal }) => {
  return (
    <Section id="workshops" title="Workshops & Activities" subtitle="Engaging with communities to promote health and education.">
      <div className="space-y-16">
        {workshops.map((workshop) => (
          <div key={workshop.id}>
            <h3 className="text-2xl font-bold font-sans text-brand-blue-800 mb-6 text-center">{workshop.title}</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {workshop.images.map((image, index) => (
                <div key={index} className="group relative cursor-pointer overflow-hidden rounded-lg shadow-md" onClick={() => openModal(image)}>
                  <img src={image} alt={`${workshop.title} - ${index + 1}`} className="aspect-video w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Workshops;