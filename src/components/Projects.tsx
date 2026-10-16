'use client';

import React from 'react';
import { PROJECTS } from '@/data/projects-data';
import ProjectTile from './ProjectTile';
import styles from './Projects.module.scss';

export default function Projects() {
  return (
    <div className={styles.projectsContainer} id="proj">
      <div className="heading-container">
        <br />
        <br />
        <br />
        <h1>Projects</h1>
      </div>
      <div className={styles.projectsContent}>
        <div className="row justify-content-center">
          {PROJECTS.map((proj, idx) => (
            <div key={idx} className="col-12 col-md-6 d-flex justify-content-center mb-4">
              <ProjectTile project={proj} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
