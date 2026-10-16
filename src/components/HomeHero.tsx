'use client';

import React from 'react';
import styles from './HomeHero.module.scss';

export default function HomeHero() {
  return (
    <div className={styles.homeContainer} id="home">
      <div className={styles.nameContainer}>
        Chaitanya Khanna
      </div>
    </div>
  );
}
