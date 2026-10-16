'use client';

import React from 'react';
import Reveal from './Reveal';
import styles from './AboutMe.module.scss';

const headingConfig = { reset: true, viewFactor: 0.99, viewOffset: { top: 56, right: 0, bottom: 0, left: 0 } };
const bodyConfig = { reset: true, viewFactor: 0.2, viewOffset: { top: 56, right: 0, bottom: 0, left: 0 } };

export default function AboutMe() {
  return (
    <div className={styles.aboutMeContainer} id="about-me">
      <div className={styles.leftAboutMe}>
        <div className={styles.headingContainer}>
          <Reveal as="h1" config={headingConfig}>
            About Me
          </Reveal>
        </div>
        <Reveal config={bodyConfig} className={styles.aboutMeContent}>
          <p>
            Welcome! I’m a software developer with an interest in web and application development.
            I grew up in New Delhi, India and have always been interested in software development.
            I recently graduated from the University of Waterloo with a Bachelor’s of Applied Science in Computer Engineering.
            As part of my undergraduate degree’s cooperative education program, I have experience working in web development through various companies.
            You can find more information <a href="#work-ex">here</a>.
          </p>
          <p>
            In my spare time, I have completed some side <a href="#proj">projects</a>. You can also view my projects on{' '}
            <a href="https://github.com/c2khanna" target="_blank" rel="noopener noreferrer">GitHub</a>.
            Apart from development, I also like to travel and to drive.
          </p>
          <p>
            Click <a href="#contact-me">here</a> to get in touch. You can also find my resume{' '}
            <a href="https://c2khanna.github.io/resume/" target="_blank" rel="noopener noreferrer">here</a>.
          </p>
        </Reveal>
      </div>
      <Reveal config={bodyConfig} className={styles.rightAboutMePic}>
        <img src="/assets/about-me-pic.jpeg" alt="profile-pic" />
      </Reveal>
    </div>
  );
}
