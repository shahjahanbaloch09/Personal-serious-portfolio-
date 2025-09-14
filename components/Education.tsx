
import React from 'react';
import Section from './Section.tsx';
import { educationHistory } from '../data/content.ts';
import useIntersectionObserver from '../hooks/useIntersectionObserver.ts';
import { EducationItem as EducationItemType } from '../types.ts';

const TimelineItem: React.FC<{ item: EducationItemType, index: number }> = ({ item, index }) => {
    const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.5 });

    return (
        <div ref={ref} className={`relative pl-12 md:pl-16 pb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`} style={{transitionDelay: `${index * 150}ms`}}>
            <div className="absolute left-0 top-1.5 z-10 flex items-center justify-center bg-brand-blue-700 shadow-xl w-8 h-8 rounded-full">
                <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
            <div className={`order-1 px-6 py-4 rounded-lg shadow-xl bg-white`}>
                <p className="text-sm text-brand-orange-500 mb-1">{item.duration}</p>
                <h3 className="mb-2 font-bold text-gray-800 text-xl font-sans">{item.institution}</h3>
                <h4 className="mb-3 font-semibold text-brand-blue-800 text-md">{item.degree}</h4>
                <p className="text-sm leading-snug tracking-wide text-gray-600">
                    {item.description}
                </p>
            </div>
        </div>
    );
}

const Education: React.FC = () => {
  return (
    <Section id="education" title="Education" subtitle="My academic background and milestones.">
      <div className="relative max-w-2xl mx-auto mt-8">
        <div className="absolute left-4 top-0 h-full w-0.5 bg-gray-200"></div>
        {educationHistory.map((item, index) => (
          <TimelineItem key={index} item={item} index={index} />
        ))}
      </div>
    </Section>
  );
};

export default Education;
