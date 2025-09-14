
import React, { useState } from 'react';
import Section from './Section.tsx';
import { Certificate } from '../types.ts';
import { coursesAndCertifications } from '../data/content.ts';

const CertificateCard: React.FC<{ course: Certificate }> = ({ course }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden min-w-full flex flex-col md:flex-row">
            <div className="md:w-1/2 w-full">
                <img 
                    src={course.imageUrl} 
                    alt={course.title} 
                    className="w-full h-full object-cover aspect-[4/3]" 
                />
            </div>
            <div className="md:w-1/2 p-8 flex flex-col justify-center">
                <p className="text-sm text-gray-500">{course.institute} &mdash; {course.date}</p>
                <h3 className="text-2xl font-bold font-sans text-brand-blue-800 my-2">{course.title}</h3>
                <p className="text-gray-600 leading-relaxed">{course.description}</p>
            </div>
        </div>
    );
};


const Certificates: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? coursesAndCertifications.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
  }

  const nextSlide = () => {
      const isLastSlide = currentIndex === coursesAndCertifications.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
  }

  return (
    <Section id="certificates" title="Courses & Certifications" subtitle="Continuing education and professional development.">
      <div className="max-w-4xl mx-auto relative group">
        <div className="overflow-hidden relative rounded-lg">
            <div 
                className="flex transition-transform ease-out duration-500"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {coursesAndCertifications.map((course) => (
                  <div key={course.id} className="w-full flex-shrink-0 p-1">
                      <CertificateCard course={course} />
                  </div>
                ))}
            </div>
        </div>
        
        {/* Navigation Arrows */}
        <button onClick={prevSlide} aria-label="Previous certificate" className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 z-10 p-2 rounded-full bg-white/50 hover:bg-white shadow-md transition-all opacity-0 group-hover:opacity-100 active:scale-90">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
        </button>
        <button onClick={nextSlide} aria-label="Next certificate" className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 z-10 p-2 rounded-full bg-white/50 hover:bg-white shadow-md transition-all opacity-0 group-hover:opacity-100 active:scale-90">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
        </button>
      </div>
    </Section>
  );
};

export default Certificates;
