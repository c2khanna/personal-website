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

            const isExpanded = expandedIndex === index;
            const techString = entry.technologies.join(' | ');
            const dateString = formatJobDates(entry);

            return (
              <div key={`job-${index}`} className={styles.jobRow}>
                {/* Dot placed precisely on the center line */}
                <button
                  type="button"
                  className={styles.jobDot}
                  onClick={() => handleToggle(index)}
                  aria-label={`Toggle details for ${entry.company}`}
                />

                {/* Entry card on the right */}
                <div className={styles.cardContainer}>
                  <div
                    className={`${styles.jobHeader} ${isExpanded ? styles.jobHeaderExpanded : styles.headerNotExpanded}`}
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
                    <div>{entry.company}</div>
                    <div style={{ fontStyle: 'italic' }}>{entry.jobTitle}</div>
                  </div>

                  {isExpanded && (
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
