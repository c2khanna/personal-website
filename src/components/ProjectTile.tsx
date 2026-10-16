'use client';

import React from 'react';
import { Project } from '@/data/types';
import styles from './ProjectTile.module.scss';

interface ProjectTileProps {
  project: Project;
}

export default function ProjectTile({ project }: ProjectTileProps) {
  const techString = project.technologies.join(' | ');

  return (
    <div className={styles.projectTileContainer}>
      <div className={styles.hoverContainer}>
        <div className={styles.projectLogoContainer}>
          <img src={project.img} alt={project.name} className={styles.projectLogo} />
        </div>

        <div className={styles.showOnHoverContainer}>
          <div className={styles.projectDemoLinks}>
            {project.links.map((link, idx) => (
              <a
                key={idx}
                href={link.ref}
                target="_blank"
                rel="noopener noreferrer"
                title={link.display}
              >
                <div className={styles.linkImgContainer}>
                  <img
                    src={link.type === 'GitHub' ? '/assets/github.svg' : '/assets/demoIcon.png'}
                    alt={link.type}
                    className={styles.linkImg}
                  />
                </div>
              </a>
            ))}
          </div>
          <div className={styles.projectTech}>
            {techString}
          </div>
        </div>
      </div>

      <div className={styles.projectName}>{project.name}</div>
      <div className={styles.projectDescription}>{project.description[0]}</div>
    </div>
  );
}
