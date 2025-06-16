
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-slate-800 border-t border-slate-700 py-8 text-center">
      <p className="text-slate-400 text-sm">
        &copy; {currentYear} [Your Name]. All rights reserved.
      </p>
      <p className="text-xs text-slate-500 mt-1">
        Built with React, TypeScript, and Tailwind CSS.
      </p>
    </footer>
  );
};

export default Footer;