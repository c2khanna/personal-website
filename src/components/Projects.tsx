'use client';

import React from 'react';
import { PROJECTS } from '@/data/projects-data';
import ProjectTile from './ProjectTile';
import Reveal from './Reveal';
import styles from './Projects.module.scss';

const headingConfig = { reset: true, viewFactor: 0.9, viewOffset: { top: 56, right: 0, bottom: 0, left: 0 } };
const bodyConfig = { reset: true, viewFactor: 0.2, viewOffset: { top: 56, right: 0, bottom: 0, left: 0 } };

export default function Projects() {
  return (
    <div className={styles.projectsContainer} id="proj">
      <div className="heading-container">
        <br />
        <br />
        <br />
        <Reveal as="h1" config={headingConfig}>
          Projects
        </Reveal>
      </div>
      <Reveal className={styles.projectsContent} config={bodyConfig}>
        <div className={styles.row}>
          {PROJECTS.map((proj, idx) => (
            <div key={idx} className={styles.tileWrapper}>
              <ProjectTile project={proj} />
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  );
}
