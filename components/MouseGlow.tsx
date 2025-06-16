import React, { useState, useEffect } from 'react';

const MouseGlow: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false); // Optional: for fade-in effect or hiding on touch devices

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) {
        setIsVisible(true);
      }
    };

    const handleMouseLeave = () => {
      // Optional: hide glow when mouse leaves window or make it less prominent
      // setIsVisible(false); 
    };
    
    // Check if it's a touch device - if so, maybe don't show the glow
    // const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    // if (isTouchDevice) return;


    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseleave', handleMouseLeave); // If you want it to fade when leaving body

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]); // Re-run effect if isVisible changes, e.g., to add/remove listeners

  // Style for the glow effect
  // The main styling (size, gradient, pointer-events) is in index.css for better organization
  const glowStyle: React.CSSProperties = {
    left: `${position.x}px`,
    top: `${position.y}px`,
    opacity: isVisible ? 1 : 0, // Optional fade-in
  };

  return <div className="mouse-glow" style={glowStyle} />;
};

export default MouseGlow;
