
import React from 'react';
import Section from './Section.tsx';
import { Certificate } from '../types.ts';
import useIntersectionObserver from '../hooks/useIntersectionObserver.ts';
import { coursesAndCertifications } from '../data/content.ts';

const CourseCard: React.FC<{ course: Certificate, index: number }> = ({ course, index }) => {
    const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.1 });
    const isEven = index % 2 === 0;

    return (
        <div ref={ref} className={`flex flex-col md:flex-row items-center gap-8 lg:gap-12 mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${isEven ? '' : 'md:flex-row-reverse'}`}>
            <div className="md:w-1/3 w-full">
                <img 
                    src={course.imageUrl} 
                    alt={course.title} 
                    className="rounded-lg shadow-lg w-full object-cover aspect-[4/3] transform transition-transform duration-300 hover:scale-105" 
                />
            </div>
            <div className={`md:w-2/3 ${isEven ? 'md:text-left' : 'md:text-right'}`}>
                <p className="text-sm text-gray-500">{course.institute} &mdash; {course.date}</p>
                <h3 className="text-2xl font-bold font-sans text-brand-blue-800 my-2">{course.title}</h3>
                <p className="text-gray-600 leading-relaxed">{course.description}</p>
            </div>
        </div>
    );
};


const Certificates: React.FC = () => {
  return (
    <Section id="certificates" title="Courses & Certifications" subtitle="Continuing education and professional development.">
      <div className="max-w-4xl mx-auto mt-12">
        {coursesAndCertifications.map((course, index) => (
          <CourseCard key={course.id} course={course} index={index} />
        ))}
      </div>
    </Section>
  );
};

export default Certificates;
