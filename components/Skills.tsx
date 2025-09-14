
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
            className={`transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1`}
            style={{transitionDelay: `${delay}ms`}}
        >
            <div className="flex items-start">
                <skill.icon className="w-10 h-10 mr-5 text-brand-orange-500 flex-shrink-0 mt-1" />
                <div>
                    <h3 className="text-xl font-bold font-sans text-brand-blue-800 mb-2">{skill.name}</h3>
                    <p className="text-gray-600 leading-relaxed">{skill.description}</p>
                </div>
            </div>
        </div>
    );
};

const Skills: React.FC = () => {
  return (
    <Section id="skills" title="My Skills" subtitle="A collection of my professional abilities and the tools I use to make an impact.">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <SkillCard key={skill.name} skill={skill} delay={index * 100} />
        ))}
      </div>
    </Section>
  );
};

export default Skills;
