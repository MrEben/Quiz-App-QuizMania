import React, { useEffect, useState, useRef } from 'react';

const AnimatedElement = ({ 
  children, 
  direction = 'left',
  duration = 1,
  delay = 0,
  threshold = 0.1,
  blur = true,
  className = ''
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(elementRef.current);
        }
      },
      {
        threshold: threshold
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [threshold]);

  const getTransformDirection = () => {
    switch (direction) {
      case 'right':
        return 'translateX(100%)';
      case 'up':
        return 'translateY(100%)';
      case 'down':
        return 'translateY(-100%)';
      case 'left':
      default:
        return 'translateX(-100%)';
    }
  };

  const styles = {
    opacity: 0,
    transform: getTransformDirection(),
    filter: blur ? 'blur(5px)' : 'none',
    transition: `all ${duration}s ease ${delay}s`,
    ...(isVisible && {
      opacity: 1,
      transform: 'translate(0)',
      filter: 'blur(0)',
    }),
  };

  // Add media query for reduced motion
  useEffect(() => {
    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
      @media (prefers-reduced-motion: reduce) {
        .animated-element {
          transition: none !important;
        }
      }
    `;
    document.head.appendChild(styleSheet);
    return () => document.head.removeChild(styleSheet);
  }, []);

  return (
    <div 
      ref={elementRef}
      className={`animated-element ${className}`}
      style={styles}
    >
      {children}
    </div>
  );
};

export default AnimatedElement;
