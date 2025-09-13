
import React from 'react';
import Section from './Section.tsx';
import { testimonials } from '../data/content.ts';
import { Testimonial } from '../types.ts';
import useIntersectionObserver from '../hooks/useIntersectionObserver.ts';
import { QuoteIcon } from './icons/DecorativeIcons.tsx';

const TestimonialCard: React.FC<{ testimonial: Testimonial, delay: number }> = ({ testimonial, delay }) => {
    const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.1 });
    return (
        <div ref={ref} className={`transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: `${delay}ms`}}>
            <div className="bg-white rounded-lg shadow-lg p-8 h-full flex flex-col relative overflow-hidden">
                <QuoteIcon className="absolute top-4 right-4 w-20 h-20 text-brand-blue-100/50 transform rotate-12" />
                <blockquote className="relative z-10 text-gray-600 italic leading-relaxed flex-grow mb-6">
                    "{testimonial.quote}"
                </blockquote>
                <footer className="relative z-10 mt-auto">
                    <p className="font-bold font-sans text-brand-blue-800">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.title}</p>
                </footer>
            </div>
        </div>
    )
}

const Testimonials: React.FC = () => {
  return (
    <Section id="testimonials" title="Testimonials" subtitle="What others say about my work.">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={testimonial.name} testimonial={testimonial} delay={index * 150} />
        ))}
      </div>
    </Section>
  );
};

export default Testimonials;
