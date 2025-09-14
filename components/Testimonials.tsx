import React, { useState } from 'react';
import Section from './Section.tsx';
import { testimonials } from '../data/content.ts';
import { Testimonial } from '../types.ts';
import { QuoteIcon } from './icons/DecorativeIcons.tsx';

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg p-8 h-full flex flex-col relative overflow-hidden min-w-full">
            <QuoteIcon className="absolute top-4 right-4 w-20 h-20 text-brand-blue-100/50 transform rotate-12" />
            <blockquote className="relative z-10 text-gray-600 italic leading-relaxed flex-grow mb-6">
                "{testimonial.quote}"
            </blockquote>
            <footer className="relative z-10 mt-auto">
                <p className="font-bold font-sans text-brand-blue-800">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.title}</p>
            </footer>
        </div>
    )
}

const Testimonials: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? testimonials.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    const nextSlide = () => {
        const isLastSlide = currentIndex === testimonials.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    const goToSlide = (slideIndex: number) => {
        setCurrentIndex(slideIndex);
    }

  return (
    <Section id="testimonials" title="Testimonials" subtitle="What others say about my work.">
      <div className="max-w-3xl mx-auto relative group">
        <div className="overflow-hidden relative rounded-lg">
            <div 
                className="flex transition-transform ease-out duration-500"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.name} className="w-full flex-shrink-0 p-1">
                      <TestimonialCard testimonial={testimonial} />
                  </div>
                ))}
            </div>
        </div>
        
        {/* Navigation Arrows */}
        <button onClick={prevSlide} aria-label="Previous testimonial" className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 z-10 p-2 rounded-full bg-white/50 hover:bg-white shadow-md transition-all opacity-0 group-hover:opacity-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
        </button>
        <button onClick={nextSlide} aria-label="Next testimonial" className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 z-10 p-2 rounded-full bg-white/50 hover:bg-white shadow-md transition-all opacity-0 group-hover:opacity-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
        </button>
        
        {/* Dot Indicators */}
        <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, slideIndex) => (
                <button 
                    key={slideIndex}
                    onClick={() => goToSlide(slideIndex)}
                    aria-label={`Go to slide ${slideIndex + 1}`}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === slideIndex ? 'bg-brand-orange-500 scale-125' : 'bg-gray-300 hover:bg-gray-400'}`}
                ></button>
            ))}
        </div>
      </div>
    </Section>
  );
};

export default Testimonials;
