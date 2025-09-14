
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";
import Section from './Section.tsx';
import useIntersectionObserver from '../hooks/useIntersectionObserver.ts';
import { EducationIcon, HealthIcon, TechIcon } from './icons/FeatureIcons.tsx';
import { CopyIcon, CheckIcon, SparklesIcon } from './icons/ActionIcons.tsx';

const About: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.2 });
  const [generatedBio, setGeneratedBio] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const handleGenerateBio = async () => {
    setIsLoading(true);
    setError(null);
    setGeneratedBio('');

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const prompt = `
        You are a professional brand strategist and copywriter. Your task is to generate a short, professional, and inspiring third-person bio for a portfolio website or LinkedIn profile for Shah Jahan Baloch.

        Here is his information:
        - Role: Public Health Student, Community Builder, Digital Educator, and Health Advocate.
        - Origin: From Awaran, Balochistan, Pakistan, a resilient region that inspires his work.
        - Mission: Passionate about creating sustainable, positive change through access to health and education.
        - Education: Pursuing a Bachelor's in Public Health at Islamia University of Bahawalpur and is an alumnus of the Aspire Institute's Leadership Development Program.
        - Key Projects: Founder of 'Vision for Tomorrow' (youth digital literacy), 'Vision for Bandata' (community infrastructure), and 'Build Bandat Foundation' (long-term development).
        - Core Belief: "Education frees the individual, and health improves life."

        Instructions:
        1. The bio must be in the third person.
        2. Keep it concise, around 3-4 sentences (60-80 words).
        3. The tone should be professional, confident, and passionate.
        4. Highlight his dedication to public health, community building, and digital advocacy.
        5. Start the bio with "Shah Jahan Baloch is a..."
      `;
      
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
      });

      setGeneratedBio(response.text.trim());

    } catch (err) {
      console.error("Gemini API Error:", err);
      setError("Sorry, the bio could not be generated at this time. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopyBio = () => {
    if (!generatedBio) return;
    navigator.clipboard.writeText(generatedBio).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }).catch(err => {
      console.error('Failed to copy text: ', err);
    });
  };

  return (
    <Section id="about" title="About Me" subtitle="A little bit about my journey and what drives me.">
      <div ref={ref} className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
        <div className={`w-full md:w-1/3 flex justify-center items-center transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
          <div className="relative w-64 h-64 lg:w-80 lg:h-80">
             <img
              src="https://picsum.photos/seed/shahjahan/400/400"
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
        <div className={`w-full md:w-2/3 space-y-6 text-lg text-gray-700 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-5'}`}>
          <p>
            Hello! I'm Shah Jahan Baloch, a passionate advocate for public health and community development. Hailing from the resilient region of Awaran, Balochistan, Pakistan, I've witnessed firsthand how access to health and education can transform lives. This has fueled my dedication to creating sustainable, positive change in communities, both online and offline.
          </p>
          <p>
            I am currently pursuing my Bachelor's in Public Health, where I am learning to bridge the gap between healthcare systems and the people they serve. My goal is to build healthier, more informed, and empowered communities through digital education and grassroots initiatives.
          </p>
          <blockquote className="border-l-4 border-brand-orange-400 pl-6 py-2 italic text-gray-800 bg-orange-50 rounded-r-md">
            "Education frees the individual, and health improves life."
          </blockquote>
          
          {/* AI Bio Generator */}
          <div className="pt-4">
             <button
                onClick={handleGenerateBio}
                disabled={isLoading}
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-brand-orange-500 to-brand-orange-600 hover:from-brand-orange-600 hover:to-brand-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-orange-500 transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <SparklesIcon className={`w-5 h-5 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
                {isLoading ? 'Generating...' : '✨ Generate AI Bio'}
            </button>
            {error && <p className="mt-4 text-sm text-red-600">{error}</p>}
            {generatedBio && (
                <div className="mt-6 p-6 bg-brand-blue-50/50 border border-brand-blue-100 rounded-lg relative animate-fadeInUp" style={{ animationDuration: '0.5s' }}>
                    <h4 className="font-sans font-bold text-brand-blue-800 mb-2">Generated Bio:</h4>
                    <p className="text-gray-700">{generatedBio}</p>
                    <button
                        onClick={handleCopyBio}
                        className={`absolute top-4 right-4 p-2 rounded-md transition-all duration-200 ${isCopied ? 'bg-green-100 text-green-700' : 'bg-gray-200 hover:bg-gray-300 text-gray-600'}`}
                        aria-label="Copy bio to clipboard"
                    >
                       {isCopied ? <CheckIcon className="w-5 h-5" /> : <CopyIcon className="w-5 h-5" />}
                    </button>
                    <p className="text-xs text-gray-400 mt-4 text-right italic">Powered by Gemini</p>
                </div>
            )}
          </div>

        </div>
      </div>
    </Section>
  );
};

export default About;
