
import React, { useState } from 'react';
import Section from './Section.tsx';
import { testimonials } from '../data/content.ts';
import { Testimonial } from '../types.ts';
import { QuoteIcon } from './icons/DecorativeIcons.tsx';
import { LinkedInIcon } from './icons/SocialIcons.tsx';

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => {
    return (
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 h-full flex flex-col relative overflow-hidden min-w-full border border-gray-100">
            <QuoteIcon className="absolute -top-2 -left-2 w-16 h-16 text-brand-orange-50" />
            
            {/* Profile Section */}
            <div className="relative z-10 flex flex-col sm:flex-row items-center sm:items-start mb-6 text-center sm:text-left">
                <div className="relative mb-4 sm:mb-0 sm:mr-5">
                    <img 
                        src={testimonial.imageUrl} 
                        alt={testimonial.name} 
                        className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover shadow-lg border-4 border-white mx-auto sm:mx-0" 
                    />
                    <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-1 shadow-md">
                        <a 
                            href={testimonial.linkedinUrl} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            aria-label={`Connect with ${testimonial.name} on LinkedIn`}
                            className="text-brand-blue-600 hover:text-brand-blue-700 transition-colors block"
                        >
                            <LinkedInIcon className="w-5 h-5 md:w-6 md:h-6" />
                        </a>
                    </div>
                </div>
                
                <div className="flex-grow">
                    <h4 className="font-bold font-sans text-brand-blue-800 text-lg md:text-xl mb-1">{testimonial.name}</h4>
                    <p className="text-sm md:text-base text-brand-orange-500 font-medium mb-2">{testimonial.title}</p>
                    <div className="flex items-center justify-center sm:justify-start text-xs text-gray-500">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Verified Professional
                    </div>
                </div>
            </div>
            
            {/* Testimonial Quote */}
            <blockquote className="relative z-10 text-gray-700 leading-relaxed flex-grow text-sm md:text-base">
                <span className="text-3xl md:text-4xl text-brand-orange-300 font-serif leading-none">"</span>
                <span className="italic">{testimonial.quote}</span>
                <span className="text-3xl md:text-4xl text-brand-orange-300 font-serif leading-none">"</span>
            </blockquote>
            
            {/* Trust indicators */}
            <div className="relative z-10 mt-6 pt-4 border-t border-gray-100">
                <div className="flex items-center justify-between text-xs text-gray-500">
                    <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Verified
                    </span>
                    <span>Professional Reference</span>
                </div>
            </div>
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
    <Section id="testimonials" title="Professional References" subtitle="Voices from colleagues, partners, and community leaders who've witnessed my impact.">
      <div className="max-w-4xl mx-auto relative group">
        <div className="overflow-hidden relative rounded-xl">
            <div 
                className="flex transition-transform ease-out duration-500"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.name} className="w-full flex-shrink-0 p-2">
                      <TestimonialCard testimonial={testimonial} />
                  </div>
                ))}
            </div>
        </div>
        
        {/* Navigation Arrows */}
        <button 
            onClick={prevSlide} 
            aria-label="Previous testimonial" 
            className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 z-10 p-3 rounded-full bg-white hover:bg-gray-50 shadow-lg transition-all opacity-0 group-hover:opacity-100 active:scale-90 border border-gray-200"
        >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
        </button>
        <button 
            onClick={nextSlide} 
            aria-label="Next testimonial" 
            className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 z-10 p-3 rounded-full bg-white hover:bg-gray-50 shadow-lg transition-all opacity-0 group-hover:opacity-100 active:scale-90 border border-gray-200"
        >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
        </button>
        
        {/* Dot Indicators */}
        <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, slideIndex) => (
                <button 
                    key={slideIndex}
                    onClick={() => goToSlide(slideIndex)}
                    aria-label={`Go to testimonial ${slideIndex + 1}`}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === slideIndex ? 'bg-brand-orange-500 scale-125 shadow-md' : 'bg-gray-300 hover:bg-gray-400'}`}
                ></button>
            ))}
        </div>
        
        {/* Trust Badge */}
        <div className="text-center mt-6">
            <div className="inline-flex items-center px-4 py-2 bg-green-50 border border-green-200 rounded-full">
                <svg className="w-4 h-4 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium text-green-800">All references verified and authentic</span>
            </div>
        </div>
      </div>
    </Section>
  );
};

export default Testimonials;
