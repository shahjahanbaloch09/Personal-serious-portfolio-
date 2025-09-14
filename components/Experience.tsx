
import React from 'react';
import Section from './Section.tsx';
import { experience } from '../data/content.ts';
import useIntersectionObserver from '../hooks/useIntersectionObserver.ts';
import { Experience as ExperienceType } from '../types.ts';


const ExperienceCard: React.FC<{ item: ExperienceType, delay: number }> = ({ item, delay }) => {
    const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.2 });
    return (
        <div ref={ref} className={`transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: `${delay}ms`}}>
            <div className="bg-white rounded-lg shadow-md hover:shadow-lg border border-gray-100 p-4 md:p-5 h-full flex flex-col transform hover:-translate-y-1 transition-all duration-300 group">
                <div className="flex flex-col space-y-2">
                    <span className="text-xs md:text-sm text-brand-orange-500 font-medium uppercase tracking-wide">
                        {item.duration}
                    </span>
                    <h3 className="text-base md:text-lg font-bold text-brand-blue-800 font-sans leading-tight">
                        {item.role}
                    </h3>
                    <h4 className="text-sm md:text-base font-semibold text-gray-700 mb-2">
                        {item.company}
                    </h4>
                    <p className="text-xs md:text-sm text-gray-600 leading-relaxed flex-grow group-hover:text-gray-700 transition-colors">
                        {item.description}
                    </p>
                </div>
            </div>
        </div>
    )
}

const Experience: React.FC = () => {
  return (
    <Section id="experience" title="Experience" subtitle="My professional journey and organizational leadership.">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {experience.map((item, index) => (
            <ExperienceCard key={item.company} item={item} delay={index * 100} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Experience;
