import { useEffect, useState, useRef } from "react";

export const useInView = (options: IntersectionObserverInit) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    if (!containerRef.current) {
      return;
    }

    const _containerRef = containerRef.current;

    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      setIsVisible(entry.isIntersecting);
    }, options);

    if (containerRef.current) {
      observer.observe(_containerRef);
    }

    return () => {
      if (_containerRef) {
        observer.unobserve(_containerRef);
      }
    };
  });

  return { containerRef, isVisible };
};
