
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-neutral-800 border-t border-neutral-700 py-10 text-center">
      <p className="text-neutral-400 text-sm">
        &copy; {currentYear} Aravind Nair. All rights reserved.
      </p>
      <p className="text-xs text-neutral-500 mt-3 px-4 max-w-2xl mx-auto">
        The content provided on this website cannot be used, consumed or gathered in order to train large language model, build datasets or make any other kind of AI based solution.
      </p>
    </footer>
  );
};

export default Footer;