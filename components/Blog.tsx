
import React from 'react';
import Section from './Section.tsx';
import { blogPosts } from '../data/content.ts';
import useIntersectionObserver from '../hooks/useIntersectionObserver.ts';
import { BlogPost as BlogPostType } from '../types.ts';

interface BlogProps {
  onPostSelect: (post: BlogPostType) => void;
}

const BlogPostCard: React.FC<{ post: BlogPostType, delay: number, onPostSelect: (post: BlogPostType) => void }> = ({ post, delay, onPostSelect }) => {
    const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.1 });
    return (
        <div ref={ref} className={`bg-white rounded-lg shadow-lg overflow-hidden flex flex-col group transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: `${delay}ms`}}>
            <div className="overflow-hidden">
                <img src={post.imageUrl} alt={post.title} className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105" />
            </div>
            <div className="p-6 flex-grow flex flex-col">
                <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                <h3 className="text-xl font-bold font-sans text-brand-blue-800 mb-3 flex-grow">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <button onClick={() => onPostSelect(post)} className="font-sans font-semibold text-brand-orange-600 hover:text-brand-orange-700 self-start text-left transition-transform active:translate-y-px">
                    Read More &rarr;
                </button>
            </div>
        </div>
    )
}

const Blog: React.FC<BlogProps> = ({ onPostSelect }) => {
  return (
    <Section id="blog" title="Achievements & Life Updates" subtitle="Sharing my latest milestones, reflections, and thoughts.">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <BlogPostCard key={post.id} post={post} delay={index*150} onPostSelect={onPostSelect} />
        ))}
      </div>
    </Section>
  );
};

export default Blog;