
import React from 'react';
import Section from './Section.tsx';
import { experience } from '../data/content.ts';
import useIntersectionObserver from '../hooks/useIntersectionObserver.ts';
import { Experience as ExperienceType } from '../types.ts';


const ExperienceCard: React.FC<{ item: ExperienceType, delay: number }> = ({ item, delay }) => {
    const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.1 });
    return (
        <div ref={ref} className={`transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: `${delay}ms`}}>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full flex flex-col transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 p-8">
                <p className="text-sm text-brand-orange-500 mb-1 font-sans">{item.duration}</p>
                <h3 className="text-xl font-bold font-sans text-brand-blue-800">{item.role}</h3>
                <h4 className="text-md font-semibold text-gray-600 mb-3">{item.company}</h4>
                <p className="text-gray-600 leading-relaxed flex-grow">{item.description}</p>
            </div>
        </div>
    )
}

const Experience: React.FC = () => {
  return (
    <Section id="experience" title="Experience" subtitle="My professional roles and contributions.">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {experience.map((item, index) => (
          <ExperienceCard key={item.company} item={item} delay={index * 150} />
        ))}
      </div>
    </Section>
  );
};

export default Experience;
