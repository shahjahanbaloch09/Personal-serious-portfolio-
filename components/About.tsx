
import React from 'react';
import Section from './Section.tsx';
import useIntersectionObserver from '../hooks/useIntersectionObserver.ts';
import { EducationIcon, HealthIcon, TechIcon } from './icons/FeatureIcons.tsx';

interface AboutProps {
  onReadMore: () => void;
}

const About: React.FC<AboutProps> = ({ onReadMore }) => {
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.2 });

  return (
    <Section id="about" title="About Me" subtitle="A little bit about my journey and what drives me.">
      <div ref={ref} className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
        <div className={`w-full md:w-1/3 flex justify-center items-center transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
          <div className="relative w-64 h-64 lg:w-80 lg:h-80">
             <img
              src="/shah-profile.jpg"
              alt="Shah Jahan Baloch"
              className="rounded-full shadow-2xl border-8 border-white object-cover w-full h-full"
            />
            <div 
              className="absolute -top-4 -left-4 w-20 h-20 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg animate-jump"
              style={{ animationDelay: '0s' }}
            >
              <EducationIcon className="w-10 h-10 text-brand-blue-600" />
            </div>
            <div 
              className="absolute -top-4 -right-4 w-20 h-20 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg animate-jump"
              style={{ animationDelay: '0.5s' }}
            >
              <HealthIcon className="w-10 h-10 text-brand-orange-600" />
            </div>
            <div 
              className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-20 h-20 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg animate-jump"
              style={{ animationDelay: '1s' }}
            >
              <TechIcon className="w-10 h-10 text-gray-700" />
            </div>
          </div>
        </div>
        <div className={`w-full md:w-2/3 space-y-4 md:space-y-6 text-base md:text-lg text-gray-700 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-5'}`}>
          <p className="leading-relaxed">
            Hello! I'm Shah Jahan Baloch, a passionate advocate for public health and community development from Awaran, Balochistan, Pakistan.
          </p>
          <p className="leading-relaxed">
            My journey is driven by a firsthand understanding of how access to health and education can transform lives, fueling my dedication to creating sustainable, positive change in communities.
          </p>
          <p className="leading-relaxed">
            Currently pursuing a Bachelor's in Public Health at Islamia University of Bahawalpur, I am committed to bridging the gap between healthcare systems and the communities they serve.
          </p>
          <p className="leading-relaxed">
            As the founder of 'Build Bandat Foundation' and 'Vision for Tomorrow', I focus on digital literacy, health advocacy, and sustainable development initiatives.
          </p>
          <p className="leading-relaxed">
            My goal is to build healthier, more informed, and empowered societies through digital education, grassroots initiatives, and evidence-based health interventions.
          </p>
          
          <blockquote className="border-l-4 border-brand-orange-400 pl-6 py-3 italic text-gray-800 bg-orange-50 rounded-r-md mt-6">
            "Education frees the individual, and health improves life."
          </blockquote>
          
          <div className="pt-4">
             <button
                onClick={onReadMore}
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brand-orange-600 hover:bg-brand-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-orange-500 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg"
              >
                Read My Complete Journey &rarr;
            </button>
          </div>

        </div>
      </div>
    </Section>
  );
};

export default About;
