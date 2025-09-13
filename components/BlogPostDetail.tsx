
import React, { useEffect } from 'react';
import { BlogPost } from '../types.ts';

interface BlogPostDetailProps {
    post: BlogPost;
    onClose: () => void;
}

const BlogPostDetail: React.FC<BlogPostDetailProps> = ({ post, onClose }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-white animate-fadeInUp" style={{ animationDuration: '0.5s' }}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                <button onClick={onClose} className="font-sans font-semibold text-brand-orange-600 hover:text-brand-orange-700 mb-8 inline-flex items-center group">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to Portfolio
                </button>
                <article className="max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold font-sans text-brand-blue-800 mb-4 leading-tight">{post.title}</h1>
                    <p className="text-gray-500 mb-6">{post.date}</p>
                    <img src={post.imageUrl} alt={post.title} className="w-full h-auto max-h-[500px] object-cover rounded-lg shadow-lg mb-8" />
                    <div
                        className="prose-content max-w-none text-gray-700 text-lg"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                </article>
            </div>
        </div>
    );
};

export default BlogPostDetail;
