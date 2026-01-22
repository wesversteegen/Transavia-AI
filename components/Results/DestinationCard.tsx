'use client';

import Image from 'next/image';
import { Destination } from '@/types';
import { tripTypeLabels } from '@/data/mockData';
import styles from './DestinationCard.module.scss';

interface DestinationCardProps {
  destination: Destination;
}

export function DestinationCard({ destination }: DestinationCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={destination.imageUrl}
          alt={`${destination.name}, ${destination.country}`}
          fill
          sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className={styles.image}
        />
        <div className={styles.badges}>
          {destination.tripTypes.slice(0, 2).map((type) => (
            <span key={type} className={styles.badge}>
              {tripTypeLabels[type].label}
            </span>
          ))}
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.header}>
          <h3 className={styles.name}>{destination.name}</h3>
          <span className={styles.country}>{destination.country}</span>
        </div>

        <p className={styles.description}>{destination.description}</p>

        <div className={styles.footer}>
          <div className={styles.price}>
            <span className={styles.priceLabel}>From</span>
            <span className={styles.priceValue}>€{destination.priceFrom}</span>
            <span className={styles.pricePer}>per person</span>
          </div>

          <button className={styles.button}>
            View flights
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div>
      </div>
    </article>
  );
}
