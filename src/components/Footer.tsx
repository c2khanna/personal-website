'use client';

import React from 'react';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <div className={styles.footerContainer}>
      <a href="https://www.linkedin.com/in/c2khanna/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
        <img src="/assets/linkedin.svg" alt="LinkedIn icon" className={styles.linkedinLogo} />
      </a>
      <a href="https://github.com/c2khanna" target="_blank" rel="noopener noreferrer" title="GitHub">
        <img src="/assets/github.svg" alt="GitHub icon" className={styles.ghLogo} />
      </a>
      <a href="https://c2khanna.github.io/resume/" target="_blank" rel="noopener noreferrer" title="Resume">
        <img src="/assets/resume.svg" alt="Resume icon" className={styles.resumeLogo} />
      </a>
    </div>
  );
}
