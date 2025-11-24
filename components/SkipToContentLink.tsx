
import React from 'react';

interface SkipToContentLinkProps {
  targetId: string;
}

const SkipToContentLink: React.FC<SkipToContentLinkProps> = ({ targetId }) => {
  return (
    <a href={`#${targetId}`} className="skip-link">
      Skip to Main Content
    </a>
  );
};

export default SkipToContentLink;