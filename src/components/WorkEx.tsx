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

export default function WorkEx() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setExpandedIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <div className={styles.workExContainer} id="work-ex">
      <div className="heading-container">
        <h1>Work Experience</h1>
      </div>

      <div className={styles.workExContent}>
        <div className={styles.timeline}>
          {/* Vertical gray line */}
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

            const isExpanded = expandedIndex === index;
            const techString = entry.technologies.join(' | ');
            const dateString = formatJobDates(entry);

            return (
              <div key={`job-${index}`} className={styles.jobRow}>
                {/* Timeline Dot */}
                <button
                  type="button"
                  className={`${styles.jobDot} ${isExpanded ? styles.jobDotExpanded : styles.jobDotCollapsed}`}
                  onClick={() => handleToggle(index)}
                  aria-label={`Toggle details for ${entry.company}`}
                />

                {/* Card Container */}
                <div className={styles.card}>
                  <div
                    className={`${styles.cardHeader} ${isExpanded ? styles.cardHeaderExpanded : styles.cardHeaderCollapsed}`}
                    onClick={() => handleToggle(index)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        handleToggle(index);
                      }
                    }}
                  >
                    <div className={styles.companyName}>{entry.company}</div>
                    <div className={styles.jobTitle}>{entry.jobTitle}</div>
                  </div>

                  {isExpanded && (
                    <div className={styles.cardContent}>
                      <div className={styles.jobSubtitle}>
                        <span className={styles.jobTechnologies}>{techString}</span>
                        <span className={styles.jobTimes}>{dateString}</span>
                      </div>
                      <div className={styles.jobDescription}>
                        <ul>
                          {entry.description.map((desc, dIndex) => (
                            <li key={dIndex}>{desc}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
