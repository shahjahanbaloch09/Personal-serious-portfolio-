import React from 'react';
import Section from './Section.tsx';
import { projects } from '../data/content.ts';
import useIntersectionObserver from '../hooks/useIntersectionObserver.ts';

const ProjectCard: React.FC<{ project: typeof projects[0], delay: number }> = ({ project, delay }) => {
    const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.1 });
    return (
        <div ref={ref} className={`transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: `${delay}ms`}}>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full flex flex-col transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
                <div className="p-8 flex-grow">
                    <h3 className="text-2xl font-bold font-sans text-brand-blue-800 mb-2">{project.title} ({project.acronym})</h3>
                    <p className="text-gray-600 leading-relaxed">{project.description}</p>
                </div>
                <div className="bg-brand-orange-500 h-2"></div>
            </div>
        </div>
    )
}

const Projects: React.FC = () => {
  return (
    <Section id="projects" title="Projects & Initiatives" subtitle="Driving change through community-focused action.">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.acronym} project={project} delay={index * 150} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;