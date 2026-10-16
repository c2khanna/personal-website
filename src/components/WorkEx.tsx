'use client';

import React, { useState } from 'react';
import { WORK_EX_DATA } from '@/data/work-ex-data';
import { WorkExJobEntry } from '@/data/types';
import styles from './WorkEx.module.scss';

function formatJobDates(job: WorkExJobEntry): string {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const [startYear, startMonth] = job.startDate.split('-');
  const startStr = `${months[parseInt(startMonth, 10) - 1]} ${startYear}`;

  if (job.endDate && job.endDate.trim() !== '') {
    const [endYear, endMonth] = job.endDate.split('-');
    const endStr = `${months[parseInt(endMonth, 10) - 1]} ${endYear}`;
    return `${startStr} - ${endStr}`;
  }
  return `${startStr} - Present`;
}

interface TimelineJobCardProps {
  entry: WorkExJobEntry;
  isExpanded: boolean;
  onToggle: () => void;
}

function TimelineJobCard({ entry, isExpanded, onToggle }: TimelineJobCardProps) {
  const [hasInteracted, setHasInteracted] = useState(false);
  const techString = entry.technologies.join(' | ');
  const dateString = formatJobDates(entry);

  const handleCardClick = () => {
    setHasInteracted(true);
    onToggle();
  };

  // Determine dot class based on expansion and whether user has interacted yet
  let dotAnimationClass = '';
  if (hasInteracted) {
    dotAnimationClass = isExpanded ? styles.dotExpanding : styles.dotCollapsing;
  } else if (isExpanded) {
    dotAnimationClass = styles.dotExpandedStatic;
  }

  return (
    <div className={styles.jobRow}>
      {/* Card Header acts as the coordinate container for the morphing dot */}
      <div className={styles.cardWrapper}>
        <div
          className={`${styles.cardHeader} ${isExpanded ? styles.headerExpanded : styles.headerCollapsed}`}
          onClick={handleCardClick}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              handleCardClick();
            }
          }}
        >
          {/* Morphing Dot Element */}
          <div
            className={`${styles.morphDot} ${dotAnimationClass}`}
            aria-hidden="true"
          />

          {/* Text above the morphing background */}
          <div className={styles.headerText}>
            <div>{entry.company}</div>
            <div style={{ fontStyle: 'italic' }}>{entry.jobTitle}</div>
          </div>
        </div>

        {/* Accordion Content with smooth height transition */}
        <div className={`${styles.accordionWrapper} ${isExpanded ? styles.accordionOpen : styles.accordionClosed}`}>
          <div className={styles.accordionInner}>
            <div className={styles.jobContent}>
              <div className={styles.jobSubtitle}>
                <p className={styles.jobTechnologies}>{techString}</p>
                <p className={styles.jobTimes}>{dateString}</p>
              </div>
              <br />
              <div className={styles.jobDescription}>
                <ul>
                  {entry.description.map((desc, dIndex) => (
                    <li key={dIndex}>{desc}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function WorkEx() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setExpandedIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <div className={styles.workExContainer} id="work-ex">
      <div className="heading-container">
        <br />
        <br />
        <br />
        <h1>Work Experience</h1>
      </div>

      <div className={styles.workExContent}>
        <div className={styles.timeline}>
          {/* Central vertical line */}
          <div className={styles.timelineLine} />

          {WORK_EX_DATA.map((entry, index) => {
            if (entry.isYear) {
              return (
                <div key={`year-${index}`} className={styles.yearRow}>
                  <div className={styles.yearDot}>
                    {entry.year}
                  </div>
                </div>
              );
            }

            return (
              <TimelineJobCard
                key={`job-${index}`}
                entry={entry}
                isExpanded={expandedIndex === index}
                onToggle={() => handleToggle(index)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
