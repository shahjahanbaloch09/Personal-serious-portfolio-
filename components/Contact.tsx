
import React, { useState } from 'react';
import Section from './Section.tsx';
import { socialLinks } from '../data/content.ts';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <Section id="contact" title="Get In Touch" subtitle="I'd love to hear from you! Whether you have a question or just want to connect.">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12">
        <div className="md:w-1/2">
          <h3 className="text-2xl font-bold font-sans text-brand-blue-800 mb-4">Contact Form</h3>
          {submitted ? (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
                <strong className="font-bold">Thank you!</strong>
                <span className="block sm:inline"> Your message has been sent successfully.</span>
            </div>
          ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-brand-orange-500 focus:border-brand-orange-500" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-brand-orange-500 focus:border-brand-orange-500" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea name="message" id="message" rows={4} value={formData.message} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-brand-orange-500 focus:border-brand-orange-500"></textarea>
            </div>
            <div>
              <button type="submit" disabled={isSubmitting} className="w-full inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-brand-orange-600 hover:bg-brand-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-orange-500 transition-all duration-200 active:bg-brand-orange-800 active:scale-[0.98] disabled:bg-brand-orange-400 disabled:cursor-not-allowed">
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
           )}
        </div>
        <div className="md:w-1/2">
          <h3 className="text-2xl font-bold font-sans text-brand-blue-800 mb-4">Follow Me</h3>
          <p className="text-gray-600 mb-6">Connect with me on social media for my latest updates and activities.</p>
          <div className="flex space-x-6">
            {socialLinks.map(link => (
              <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name} className="text-gray-500 hover:text-brand-orange-600 transition-all duration-300 transform hover:scale-125 hover:-translate-y-1 active:scale-110 active:translate-y-0">
                <link.icon className="w-8 h-8" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;