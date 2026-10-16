'use client';

import React from 'react';
import Reveal from './Reveal';
import styles from './HomeHero.module.scss';

export default function HomeHero() {
  return (
    <div className={styles.homeContainer} id="home">
      <Reveal viewFactor={0.5}>
        <div className={styles.nameContainer}>
          Chaitanya Khanna
        </div>
      </Reveal>
    </div>
  );
}
