
import React, { useState } from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Education from './components/Education.tsx';
import Skills from './components/Skills.tsx';
import Projects from './components/Projects.tsx';
import Certificates from './components/Certificates.tsx';
import Testimonials from './components/Testimonials.tsx';
import Workshops from './components/Workshops.tsx';
import Blog from './components/Blog.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';
import Modal from './components/Modal.tsx';
import { workshops } from './data/content.ts';
import { BlogPost as BlogPostType } from './types.ts';
import BlogPostDetail from './components/BlogPostDetail.tsx';

const App: React.FC = () => {
  const [modalImage, setModalImage] = useState<string | null>(null);
  const [selectedPost, setSelectedPost] = useState<BlogPostType | null>(null);

  const openModal = (imageUrl: string) => {
    setModalImage(imageUrl);
  };

  const closeModal = () => {
    setModalImage(null);
  };
  
  const handleSelectPost = (post: BlogPostType) => {
    setSelectedPost(post);
    window.scrollTo(0, 0);
  };
  
  const handleClosePost = () => {
    setSelectedPost(null);
  };

  return (
    <div className="bg-gray-50 font-serif text-gray-800 antialiased">
      <Header />
      <main>
        {selectedPost ? (
          <BlogPostDetail post={selectedPost} onClose={handleClosePost} />
        ) : (
          <>
            <Hero />
            <About />
            <Education />
            <Skills />
            <Projects />
            <Certificates />
            <Testimonials />
            <Workshops workshops={workshops} openModal={openModal} />
            <Blog onPostSelect={handleSelectPost}/>
            <Contact />
          </>
        )}
      </main>
      <Footer />
      {modalImage && <Modal imageUrl={modalImage} onClose={closeModal} />}
    </div>
  );
};

export default App;
