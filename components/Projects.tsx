import React from 'react';
import Section from './Section.tsx';
import { projects } from '../data/content.ts';
import useIntersectionObserver from '../hooks/useIntersectionObserver.ts';

const ProjectCard: React.FC<{ project: typeof projects[0], delay: number }> = ({ project, delay }) => {
    const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.1 });
    return (
        <div ref={ref} className={`transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: `${delay}ms`}}>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full flex flex-col transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group">
                {/* Project Image */}
                {project.imageUrl && (
                    <div className="overflow-hidden">
                        <img 
                            src={project.imageUrl} 
                            alt={project.title}
                            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                    </div>
                )}
                
                <div className="p-6 md:p-8 flex-grow flex flex-col">
                    {/* Project Title and Date */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                        <h3 className="text-lg md:text-xl font-bold font-sans text-brand-blue-800 leading-tight">
                            {project.title} ({project.acronym})
                        </h3>
                        {project.date && (
                            <span className="text-xs md:text-sm text-brand-orange-500 font-medium mt-1 sm:mt-0">
                                {project.date}
                            </span>
                        )}
                    </div>
                    
                    {/* Project Description */}
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed flex-grow mb-4">
                        {project.description}
                    </p>
                    
                    {/* Visit Link */}
                    {project.link && (
                        <div className="mt-auto">
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-4 py-2 border border-brand-blue-600 text-brand-blue-600 hover:bg-brand-blue-600 hover:text-white text-sm font-medium rounded-md transition-colors duration-300 group-hover:border-brand-blue-700 group-hover:text-brand-blue-700"
                            >
                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                                Visit Project
                            </a>
                        </div>
                    )}
                </div>
                
                <div className="bg-brand-orange-500 h-2"></div>
            </div>
        </div>
    )
}

const Projects: React.FC = () => {
  return (
    <Section id="projects" title="Projects & Initiatives" subtitle="Building sustainable solutions for community development and public health research.">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.acronym} project={project} delay={index * 150} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Projects;