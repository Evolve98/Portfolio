
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-neutral-800 border-t border-neutral-700 py-10 text-center">
      <p className="text-neutral-400 text-sm">
        &copy; {currentYear} Aravind Nair. All rights reserved.
      </p>
      <p className="text-xs text-neutral-500 mt-2">
        Built with React, TypeScript, and Tailwind CSS.
      </p>
    </footer>
  );
};

export default Footer;