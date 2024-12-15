import { useState, useEffect } from 'react';

interface IntersectionOptions {
  threshold?: number;
  rootMargin?: string;
}

export function useIntersectionObserver(
  ref: React.RefObject<Element>,
  options: IntersectionOptions = {}
) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: options.threshold || 0,
        rootMargin: options.rootMargin || '0px',
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [ref, options.threshold, options.rootMargin]);

  return isVisible;
}