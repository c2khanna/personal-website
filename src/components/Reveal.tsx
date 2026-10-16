'use client';

import React, { useRef, useState, useEffect } from 'react';

interface RevealProps {
  children: React.ReactNode;
  viewFactor?: number;
  duration?: number;
  distance?: string;
  scale?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default function Reveal({
  children,
  viewFactor = 0.2,
  duration = 600,
  distance = '20px',
  scale = 0.95,
  className = '',
  style = {},
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Replicate viewOffset: { top: 56, right: 0, bottom: 0, left: 0 }
    // which offsets the viewport by the 56px height of the fixed navbar
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Replicate reset: true (appears on enter, disappears on exit)
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '-56px 0px 0px 0px',
        threshold: viewFactor,
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [viewFactor]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0) scale(1)' : `translateY(${distance}) scale(${scale})`,
        transition: `opacity ${duration}ms cubic-bezier(0.5, 0, 0, 1), transform ${duration}ms cubic-bezier(0.5, 0, 0, 1)`,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  );
}
