'use client';

import React, { useRef, useEffect } from 'react';
import type scrollReveal from 'scrollreveal';

interface RevealProps {
  children: React.ReactNode;
  config?: scrollReveal.ScrollRevealObjectOptions;
  className?: string;
  style?: React.CSSProperties;
  as?: React.ElementType;
}

export default function Reveal({
  children,
  config = {},
  className = '',
  style = {},
  as: Component = 'div',
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let sr: scrollReveal.ScrollRevealObject | undefined;
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
    <Component ref={ref} className={className} style={style}>
      {children}
    </Component>
  );
}
