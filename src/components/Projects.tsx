'use client';

import React from 'react';
import { PROJECTS } from '@/data/projects-data';
import ProjectTile from './ProjectTile';
import Reveal from './Reveal';
import styles from './Projects.module.scss';

const headingConfig = { reset: true, viewFactor: 0.9, viewOffset: { top: 56, right: 0, bottom: 0, left: 0 } };
const bodyConfig = { reset: true, viewFactor: 0.05, viewOffset: { top: 56, right: 0, bottom: 0, left: 0 } };

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
      <div className={styles.projectsContent}>
        <Reveal config={bodyConfig}>
          <div className="row justify-content-center">
            {PROJECTS.map((proj, idx) => (
              <div key={idx} className="col-12 col-md-4 d-flex justify-content-center mb-4">
                <ProjectTile project={proj} />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  );
}
