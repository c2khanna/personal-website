'use client';

import React from 'react';
import Reveal from './Reveal';
import styles from './AboutMe.module.scss';

export default function AboutMe() {
  return (
    <div className={styles.aboutMeContainer} id="about-me">
      <div className={styles.leftAboutMe}>
        <div className={styles.headingContainer}>
          <Reveal viewFactor={0.8}>
            <h1>About Me</h1>
          </Reveal>
        </div>
        <Reveal viewFactor={0.4}>
          <div className={styles.aboutMeContent}>
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
          </div>
        </Reveal>
      </div>
      <div className={styles.rightAboutMePic}>
        <Reveal viewFactor={0.4}>
          <img src="/assets/about-me-pic.jpeg" alt="profile-pic" />
        </Reveal>
      </div>
    </div>
  );
}
