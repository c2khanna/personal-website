'use client';

import React, { useRef, useEffect } from 'react';

interface RevealProps {
  children: React.ReactNode;
  config?: Record<string, any>;
  className?: string;
  style?: React.CSSProperties;
}

export default function Reveal({
  children,
  config = {},
  className = '',
  style = {},
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let sr: any;
    import('scrollreveal').then(({ default: ScrollReveal }) => {
      if (el) {
        sr = ScrollReveal();
        sr.reveal(el, config);
      }
    });

    return () => {
      if (sr && el) {
        sr.clean(el);
      }
    };
  }, []);

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}
