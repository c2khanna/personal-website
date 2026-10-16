'use client';

import React, { useState, useEffect, useRef } from 'react';
import { WORK_EX_DATA } from '@/data/work-ex-data';
import { WorkExJobEntry } from '@/data/types';
import Reveal from './Reveal';
import styles from './WorkEx.module.scss';

const headingConfig = { reset: true, viewFactor: 0.9, viewOffset: { top: 56, right: 0, bottom: 0, left: 0 } };
const bodyConfig = { reset: true, viewFactor: 0.15, viewOffset: { top: 56, right: 0, bottom: 0, left: 0 } };

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

type AnimState =
  | 'collapsed'
  | 'dot-expanding'
  | 'content-expanding'
  | 'expanded'
  | 'content-collapsing'
  | 'dot-collapsing';

function TimelineJobCard({ entry, isExpanded, onToggle }: TimelineJobCardProps) {
  const [animState, setAnimState] = useState<AnimState>('collapsed');
  const [contentHeight, setContentHeight] = useState<number>(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const isFirstRender = useRef(true);

  const techString = entry.technologies.join(' | ');
  const dateString = formatJobDates(entry);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }

    if (isExpanded) {
      // Stage 1: Dot morphs across the line into the card header (400ms ease)
      setAnimState('dot-expanding');
      timerRef.current = setTimeout(() => {
        // Stage 2: Content accordion slides open (100ms ease)
        if (contentRef.current) {
          setContentHeight(contentRef.current.scrollHeight);
        }
        setAnimState('content-expanding');
        timerRef.current = setTimeout(() => {
          setAnimState('expanded');
        }, 100);
      }, 400);
    } else {
      // Collapsing
      if (animState === 'expanded' || animState === 'content-expanding') {
        // Stage 1: Content accordion slides closed (200ms ease)
        if (contentRef.current) {
          setContentHeight(contentRef.current.scrollHeight);
        }
        // Use requestAnimationFrame to ensure the height is set before collapsing to 0
        setAnimState('content-collapsing');
        timerRef.current = setTimeout(() => {
          // Stage 2: Dot morphs back into the 30px circle on the line (200ms ease)
          setAnimState('dot-collapsing');
          timerRef.current = setTimeout(() => {
            setAnimState('collapsed');
          }, 200);
        }, 200);
      } else if (animState === 'dot-expanding') {
        // If interrupted while expanding dot, immediately collapse dot
        setAnimState('dot-collapsing');
        timerRef.current = setTimeout(() => {
          setAnimState('collapsed');
        }, 200);
      }
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [isExpanded]);

  let dotClass = styles.dotCollapsed;
  if (animState === 'dot-expanding') {
    dotClass = styles.dotExpanding;
  } else if (animState === 'content-expanding' || animState === 'expanded' || animState === 'content-collapsing') {
    dotClass = styles.dotExpanded;
  } else if (animState === 'dot-collapsing') {
    dotClass = styles.dotCollapsing;
  }

  const isHeaderExpanded = animState !== 'collapsed';

  // Compute inline styles for smooth accordion expansion/collapse
  let accordionStyle: React.CSSProperties = { height: 0, overflow: 'hidden' };
  if (animState === 'content-expanding') {
    accordionStyle = { height: contentHeight, overflow: 'hidden', transition: 'height 100ms ease' };
  } else if (animState === 'expanded') {
    accordionStyle = { height: 'auto', overflow: 'visible' };
  } else if (animState === 'content-collapsing') {
    accordionStyle = { height: 0, overflow: 'hidden', transition: 'height 200ms ease' };
  }

  return (
    <div className={styles.jobRow}>
      <div className={styles.cardWrapper}>
        <div
          className={`${styles.cardHeader} ${isHeaderExpanded ? styles.headerExpanded : styles.headerCollapsed}`}
          onClick={onToggle}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onToggle();
            }
          }}
        >
          <div className={dotClass} aria-hidden="true" />
          <div className={styles.headerText}>
            <div>{entry.company}</div>
            <div style={{ fontStyle: 'italic' }}>{entry.jobTitle}</div>
          </div>
        </div>

        <div className={styles.accordionWrapper} style={accordionStyle}>
          <div ref={contentRef} className={styles.jobContent}>
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
  );
}

export default function WorkEx() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className={styles.workExContainer} id="work-ex">
      <div className="heading-container">
        <br />
        <br />
        <br />
        <Reveal as="h1" config={headingConfig}>
          Work Experience
        </Reveal>
      </div>

      <div className={styles.workExContent}>
        <Reveal config={bodyConfig}>
          <div className={styles.timeline}>
            {/* Central vertical timeline line */}
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
        </Reveal>
      </div>
    </div>
  );
}
