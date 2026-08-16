import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: 100 | 200 | 300 | 400;
}

export default function ScrollReveal({
  children,
  className = '',
  direction = 'up',
  delay
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const getDirectionClass = () => {
    switch (direction) {
      case 'left':
        return 'reveal-left';
      case 'right':
        return 'reveal-right';
      case 'down':
        return 'reveal-down';
      case 'up':
      default:
        return 'reveal';
    }
  };

  const getDelayClass = () => {
    if (!delay) return '';
    return `reveal-delay-${delay}`;
  };

  const combinedClasses = `${getDirectionClass()} ${getDelayClass()} ${
    isVisible ? 'reveal-visible' : ''
  } ${className}`.trim();

  return (
    <div ref={ref} className={combinedClasses}>
      {children}
    </div>
  );
}
