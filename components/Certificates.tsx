
import React from 'react';
import Section from './Section.tsx';
import { Certificate } from '../types.ts';
import useIntersectionObserver from '../hooks/useIntersectionObserver.ts';
import { coursesAndCertifications } from '../data/content.ts';

const CertificateCard: React.FC<{ certificate: Certificate, index: number }> = ({ certificate, index }) => {
    const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.1 });

    return (
        <div ref={ref} className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ animationDelay: `${index * 100}ms` }}>
            <div className="aspect-[4/3] overflow-hidden">
                <img 
                    src={certificate.imageUrl} 
                    alt={certificate.title} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
                />
            </div>
            <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium px-2 py-1 bg-brand-orange-100 text-brand-orange-700 rounded-full">
                        {certificate.institute}
                    </span>
                    <span className="text-xs text-gray-500 font-medium">
                        {certificate.date}
                    </span>
                </div>
                <h3 className="font-bold text-brand-blue-800 text-sm md:text-base mb-2 line-clamp-2 leading-tight">
                    {certificate.title}
                </h3>
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed line-clamp-3">
                    {certificate.description}
                </p>
            </div>
        </div>
    );
};

const Certificates: React.FC = () => {
  return (
    <Section id="certificates" title="Courses & Certifications" subtitle="Continuing education and professional development.">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-8">
        {coursesAndCertifications.map((certificate, index) => (
          <CertificateCard key={certificate.id} certificate={certificate} index={index} />
        ))}
      </div>
    </Section>
  );
};

export default Certificates;
