import { useState, useEffect, useRef, RefObject } from 'react';

interface ObserverOptions extends IntersectionObserverInit {
  triggerOnce?: boolean;
}

const useIntersectionObserver = <T extends HTMLElement>(
  options: ObserverOptions
): [RefObject<T>, boolean] => {
  const targetRef = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = targetRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        if (options.triggerOnce) {
          observer.unobserve(node);
        }
      } else {
        if (!options.triggerOnce) {
            setIsVisible(false);
        }
      }
    }, options);

    observer.observe(node);

    return () => {
        if (node) {
            observer.unobserve(node);
        }
    };
  }, [targetRef, options]);

  return [targetRef, isVisible];
};

export default useIntersectionObserver;
