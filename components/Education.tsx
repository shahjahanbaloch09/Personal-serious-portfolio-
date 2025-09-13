
import React from 'react';
import Section from './Section.tsx';
import { educationHistory } from '../data/content.ts';
import useIntersectionObserver from '../hooks/useIntersectionObserver.ts';
import { EducationItem as EducationItemType } from '../types.ts';

const TimelineItem: React.FC<{ item: EducationItemType, index: number }> = ({ item, index }) => {
    const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.5 });
    const isLeft = index % 2 === 0;

    return (
        <div ref={ref} className="mb-6 md:mb-8">
            {/* Mobile Layout - Stacked */}
            <div className="md:hidden flex items-start space-x-4">
                <div className="flex-shrink-0 bg-brand-blue-700 shadow-xl w-8 h-8 rounded-full flex items-center justify-center">
                    <span className="font-semibold text-sm text-white">{index + 1}</span>
                </div>
                <div className={`flex-1 px-4 py-3 rounded-lg shadow-lg bg-white transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                    <p className="text-xs text-brand-orange-500 mb-1">{item.duration}</p>
                    <h3 className="mb-2 font-bold text-gray-800 text-lg font-sans leading-tight">{item.institution}</h3>
                    <h4 className="mb-2 font-semibold text-brand-blue-800 text-sm">{item.degree}</h4>
                    <p className="text-xs leading-relaxed text-gray-600">
                        {item.description}
                    </p>
                </div>
            </div>

            {/* Desktop Layout - Timeline */}
            <div className={`hidden md:flex justify-between items-center w-full ${isLeft ? 'flex-row-reverse' : ''}`}>
                <div className="order-1 w-5/12"></div>
                <div className="z-20 flex items-center order-1 bg-brand-blue-700 shadow-xl w-12 h-12 rounded-full">
                    <h1 className="mx-auto font-semibold text-lg text-white">{index + 1}</h1>
                </div>
                <div className={`order-1 w-5/12 px-6 py-4 rounded-lg shadow-xl bg-white transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'} ${isLeft ? 'text-right' : 'text-left'}`}>
                    <p className="text-sm text-brand-orange-500">{item.duration}</p>
                    <h3 className="mb-3 font-bold text-gray-800 text-xl font-sans">{item.institution}</h3>
                    <h4 className="mb-3 font-semibold text-brand-blue-800 text-md">{item.degree}</h4>
                    <p className="text-sm leading-snug tracking-wide text-gray-600">
                        {item.description}
                    </p>
                </div>
            </div>
        </div>
    );
}

const Education: React.FC = () => {
  return (
    <Section id="education" title="Education" subtitle="My academic background and milestones.">
      {/* Mobile Layout - Simple List */}
      <div className="md:hidden px-4 py-6">
        {educationHistory.map((item, index) => (
          <TimelineItem key={index} item={item} index={index} />
        ))}
      </div>

      {/* Desktop Layout - Timeline */}
      <div className="hidden md:block relative wrap overflow-hidden p-10 h-full">
        <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border" style={{ left: '50%' }}></div>
        {educationHistory.map((item, index) => (
          <TimelineItem key={index} item={item} index={index} />
        ))}
      </div>
    </Section>
  );
};

export default Education;
