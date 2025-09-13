
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-brand-blue-900 text-white">
      <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center">
        <p>&copy; {currentYear} Shah Jahan Baloch. All Rights Reserved.</p>
        <p className="text-sm text-brand-blue-200 mt-1">Designed with passion and code.</p>
      </div>
    </footer>
  );
};

export default Footer;
