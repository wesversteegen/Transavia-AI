'use client';

import { Destination } from '@/types';
import { DestinationCard } from './DestinationCard';
import styles from './ResultsGrid.module.scss';

interface ResultsGridProps {
  destinations: Destination[];
  isLoading: boolean;
  hasSearched: boolean;
}

export function ResultsGrid({ destinations, isLoading, hasSearched }: ResultsGridProps) {
  if (isLoading) {
    return (
      <div className={styles.wrapper}>
        <div className={styles.grid}>
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className={styles.skeleton}>
              <div className={styles.skeletonImage} />
              <div className={styles.skeletonContent}>
                <div className={styles.skeletonTitle} />
                <div className={styles.skeletonText} />
                <div className={styles.skeletonText} style={{ width: '60%' }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (!hasSearched) {
    return null;
  }

  if (destinations.length === 0) {
    return (
      <div className={styles.wrapper}>
        <div className={styles.empty}>
          <div className={styles.emptyIcon}>
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </div>
          <h3 className={styles.emptyTitle}>No destinations found</h3>
          <p className={styles.emptyText}>
            Try adjusting your filters or selecting more regions to discover amazing destinations.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h2 className={styles.title}>
          {destinations.length} destination{destinations.length !== 1 ? 's' : ''} found
        </h2>
        <p className={styles.subtitle}>
          Based on your preferences, here are some inspiring places to visit
        </p>
      </div>

      <div className={styles.grid}>
        {destinations.map((destination) => (
          <DestinationCard key={destination.id} destination={destination} />
        ))}
      </div>
    </div>
  );
}
