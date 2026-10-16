'use client';

import React from 'react';
import Reveal from './Reveal';
import styles from './HomeHero.module.scss';

const nameConfig = { reset: true, viewFactor: 0.8, viewOffset: { top: 56, right: 0, bottom: 0, left: 0 } };

export default function HomeHero() {
  return (
    <div className={styles.homeContainer} id="home">
      <Reveal config={nameConfig} className={styles.nameContainer}>
        Chaitanya Khanna
      </Reveal>
    </div>
  );
}
