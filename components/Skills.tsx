
import React from 'react';
import Section from './Section.tsx';
import { skills } from '../data/content.ts';
import { Skill } from '../types.ts';
import useIntersectionObserver from '../hooks/useIntersectionObserver.ts';

const SkillCard: React.FC<{ skill: Skill, delay: number }> = ({ skill, delay }) => {
    const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.2 });

    return (
        <div 
            ref={ref} 
            className={`transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} bg-white rounded-lg shadow-md hover:shadow-lg border border-gray-100 p-4 md:p-5 hover:-translate-y-1 group`}
            style={{transitionDelay: `${delay}ms`}}
        >
            <div className="flex flex-col space-y-3">
                <div className="flex items-center space-x-3">
                    <skill.icon className="w-8 h-8 md:w-10 md:h-10 text-brand-orange-500 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-base md:text-lg font-bold font-sans text-brand-blue-800 leading-tight">{skill.name}</h3>
                </div>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">{skill.description}</p>
            </div>
        </div>
    );
};

const Skills: React.FC = () => {
  return (
    <Section id="skills" title="My Skills" subtitle="Core competencies that drive my impact in public health and community development.">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} delay={index * 80} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Skills;
