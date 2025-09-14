
import React from 'react';
import Section from './Section.tsx';
import { educationHistory } from '../data/content.ts';
import useIntersectionObserver from '../hooks/useIntersectionObserver.ts';
import { EducationItem as EducationItemType } from '../types.ts';

const EducationCard: React.FC<{ item: EducationItemType, index: number }> = ({ item, index }) => {
    const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.3 });

    return (
        <div ref={ref} className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`} style={{transitionDelay: `${index * 100}ms`}}>
            <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-l-4 border-brand-blue-600">
                <div className="flex flex-col space-y-2">
                    <span className="text-xs md:text-sm text-brand-orange-500 font-medium uppercase tracking-wide">
                        {item.duration}
                    </span>
                    <h3 className="text-lg md:text-xl font-bold text-brand-blue-800 font-sans leading-tight">
                        {item.degree}
                    </h3>
                    <h4 className="text-sm md:text-base font-semibold text-gray-700">
                        {item.institution}
                    </h4>
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed pt-2">
                        {item.description}
                    </p>
                </div>
            </div>
        </div>
    );
}

const Education: React.FC = () => {
  return (
    <Section id="education" title="Education" subtitle="My academic journey and professional development.">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {educationHistory.map((item, index) => (
            <EducationCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Education;
