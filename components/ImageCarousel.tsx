
import React, { useState, useEffect } from 'react';
import ImageWithLoader from './ImageWithLoader';

interface ImageCarouselProps {
  imageUrls: string[];
  altText: string;
}

const ChevronLeftIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
  </svg>
);

const ChevronRightIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
  </svg>
);

const ImageCarousel: React.FC<ImageCarouselProps> = ({ imageUrls, altText }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? imageUrls.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === imageUrls.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    if (isPaused || imageUrls.length <= 1) return;
    const timer = setTimeout(() => {
        goToNext();
    }, 5000); // Change slide every 5 seconds
    return () => clearTimeout(timer);
  }, [currentIndex, isPaused, imageUrls.length]);


  if (!imageUrls || imageUrls.length === 0) {
    return <div className="text-center text-neutral-400 py-10">No images available for this project.</div>;
  }

  return (
    <div 
      className="relative w-full max-w-3xl mx-auto aspect-[16/10] overflow-hidden rounded-lg shadow-xl mb-6 sm:mb-8"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {imageUrls.map((url, index) => (
        <div
          key={url + index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ease-in-out ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          aria-hidden={index !== currentIndex}
        >
          <ImageWithLoader
            src={url}
            alt={`${altText} - Slide ${index + 1}`}
            className="w-full h-full object-contain"
          />
        </div>
      ))}

      {imageUrls.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            aria-label="Previous image"
            className="absolute top-1/2 left-2 sm:left-4 transform -translate-y-1/2 z-20 bg-black/40 hover:bg-black/70 text-white p-2 sm:p-3 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-opacity-75"
          >
            <ChevronLeftIcon className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <button
            onClick={goToNext}
            aria-label="Next image"
            className="absolute top-1/2 right-2 sm:right-4 transform -translate-y-1/2 z-20 bg-black/40 hover:bg-black/70 text-white p-2 sm:p-3 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-opacity-75"
          >
            <ChevronRightIcon className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
            {imageUrls.map((_, slideIndex) => (
              <button
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                aria-label={`Go to image ${slideIndex + 1}`}
                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 focus:outline-none 
                  ${currentIndex === slideIndex ? 'bg-cyan-400 scale-125' : 'bg-neutral-400/70 hover:bg-neutral-200/90'}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ImageCarousel;