
import React from 'react';
import Section from './Section.tsx';
import { skills } from '../data/content.ts';
import { Skill } from '../types.ts';
import useIntersectionObserver from '../hooks/useIntersectionObserver.ts';

const SkillCard: React.FC<{ skill: Skill, delay: number }> = ({ skill, delay }) => {
    const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.1 });
    return (
        <div ref={ref} className={`transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: `${delay}ms`}}>
            <div className="bg-white rounded-lg shadow-lg p-8 text-center h-full flex flex-col items-center transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
                <div className="mb-4 text-brand-orange-500">
                    <skill.icon className="w-16 h-16" />
                </div>
                <h3 className="text-xl font-bold font-sans text-brand-blue-800 mb-2">{skill.name}</h3>
                <p className="text-gray-600 leading-relaxed flex-grow">{skill.description}</p>
            </div>
        </div>
    )
}

const Skills: React.FC = () => {
  return (
    <Section id="skills" title="My Skills" subtitle="A collection of my professional abilities and the tools I use to make an impact.">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <SkillCard key={skill.name} skill={skill} delay={index * 150} />
        ))}
      </div>
    </Section>
  );
};

export default Skills;