'use client';

import React from 'react';
import { PROJECTS } from '@/data/projects-data';
import ProjectTile from './ProjectTile';
import styles from './Projects.module.scss';

export default function Projects() {
  return (
    <div className={styles.projectsContainer} id="proj">
      <div className="heading-container">
        <h1>Projects</h1>
      </div>
      <div className={styles.projectsContent}>
        <div className={styles.grid}>
          {PROJECTS.map((proj, idx) => (
            <ProjectTile key={idx} project={proj} />
          ))}
        </div>
      </div>
    </div>
  );
}
