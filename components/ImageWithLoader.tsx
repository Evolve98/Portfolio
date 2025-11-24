
import React, { useState, useEffect } from 'react';

interface ImageWithLoaderProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
}

const ImageWithLoader: React.FC<ImageWithLoaderProps> = ({ src, alt, className, ...rest }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const image = new Image();
    image.src = src;
    image.onload = () => {
      setIsLoading(false);
    };
    // In case of error, we might want to stop loading and show a fallback
    image.onerror = () => {
      setIsLoading(false); 
      // console.error(`Failed to load image: ${src}`);
    };
  }, [src]);

  return (
    <div className={`relative w-full h-full ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 w-full h-full animate-shimmer" />
      )}
      <img
        src={src}
        alt={alt}
        className={`w-full h-full transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        loading="lazy"
        {...rest}
      />
    </div>
  );
};

export default ImageWithLoader;