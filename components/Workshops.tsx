
import React from 'react';
import Section from './Section.tsx';
import { Workshop } from '../types.ts';
import useIntersectionObserver from '../hooks/useIntersectionObserver.ts';

interface WorkshopsProps {
  workshops: Workshop[];
  openModal: (imageUrl: string) => void;
}

const WorkshopCard: React.FC<{ workshop: Workshop, openModal: (imageUrl: string) => void, delay: number }> = ({ workshop, openModal, delay }) => {
    const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.1 });
    const [showAllImages, setShowAllImages] = React.useState(false);
    const displayImages = workshop.images.slice(1, showAllImages ? workshop.images.length : 4);
    const hasMoreImages = workshop.images.length > 4;

    return (
        <div ref={ref} className={`bg-white rounded-lg shadow-lg overflow-hidden flex flex-col group transition-all duration-500 ease-out h-full ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: `${delay}ms`}}>
            {/* Main Image */}
            <div className="overflow-hidden cursor-pointer" onClick={() => openModal(workshop.images[0])}>
                <img src={workshop.images[0]} alt={workshop.title} className="w-full h-40 md:h-48 object-cover transition-transform duration-300 group-hover:scale-105" />
            </div>
            
            {/* Content */}
            <div className="p-4 md:p-5 flex-grow flex flex-col">
                <h3 className="text-lg md:text-xl font-bold font-sans text-brand-blue-800 mb-2 leading-tight">{workshop.title}</h3>
                <div className="flex flex-col sm:flex-row sm:items-center text-xs md:text-sm text-brand-orange-500 font-medium mb-3 space-y-1 sm:space-y-0 sm:space-x-4">
                    <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                        </svg>
                        {workshop.date}
                    </span>
                    <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        {workshop.location}
                    </span>
                </div>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4 flex-grow">{workshop.description}</p>
                
                {/* Image Gallery */}
                {displayImages.length > 0 && (
                    <div className="mt-auto space-y-3">
                        <div className={`grid grid-cols-3 gap-2 ${showAllImages && displayImages.length > 6 ? 'max-h-32 overflow-y-auto' : ''}`}>
                            {displayImages.map((image, index) => (
                                <div key={index} className="group/thumb relative cursor-pointer overflow-hidden rounded-md shadow-sm" onClick={() => openModal(image)}>
                                    <img src={image} alt={`${workshop.title} ${index + 2}`} className="aspect-square w-full h-full object-cover transition-transform duration-200 group-hover/thumb:scale-110" />
                                </div>
                            ))}
                        </div>
                        {hasMoreImages && (
                            <button
                                onClick={() => setShowAllImages(!showAllImages)}
                                className="w-full text-xs md:text-sm text-brand-blue-600 hover:text-brand-blue-700 font-medium transition-colors py-2 border border-brand-blue-200 rounded-md hover:bg-brand-blue-50"
                            >
                                {showAllImages ? 'Show Less' : `See More (+${workshop.images.length - 4} photos)`}
                            </button>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};


const Workshops: React.FC<WorkshopsProps> = ({ workshops, openModal }) => {
  const [currentPage, setCurrentPage] = React.useState(0);
  const workshopsPerPage = 3;
  const totalPages = Math.ceil(workshops.length / workshopsPerPage);
  const startIndex = currentPage * workshopsPerPage;
  const currentWorkshops = workshops.slice(startIndex, startIndex + workshopsPerPage);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <Section id="workshops" title="Workshops & Activities" subtitle="Empowering communities through hands-on education and health initiatives.">
      <div className="max-w-7xl mx-auto">
        {/* Workshop Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8">
          {currentWorkshops.map((workshop, index) => (
            <WorkshopCard key={workshop.id} workshop={workshop} openModal={openModal} delay={index * 100} />
          ))}
        </div>
        
        {/* Navigation Controls */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center space-x-4">
            <button
              onClick={prevPage}
              className="p-2 rounded-full bg-white shadow-md hover:shadow-lg border border-gray-200 transition-all hover:bg-gray-50 disabled:opacity-50"
              aria-label="Previous workshops"
            >
              <svg className="w-5 h-5 text-brand-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <div className="flex space-x-2">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${currentPage === i ? 'bg-brand-orange-500 scale-125' : 'bg-gray-300 hover:bg-gray-400'}`}
                  aria-label={`Go to page ${i + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={nextPage}
              className="p-2 rounded-full bg-white shadow-md hover:shadow-lg border border-gray-200 transition-all hover:bg-gray-50 disabled:opacity-50"
              aria-label="Next workshops"
            >
              <svg className="w-5 h-5 text-brand-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </Section>
  );
};

export default Workshops;
