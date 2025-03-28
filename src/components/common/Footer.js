import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 text-center fixed bottom-0 w-full">
      <div className="container mx-auto">
        <p>&copy; {new Date().getFullYear()} Система управління ЗСУ</p>
      </div>
    </footer>
  );
};

export default Footer;