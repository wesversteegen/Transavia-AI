'use client';

import { tripTypeLabels } from '@/data/mockData';
import { TripType } from '@/types';
import styles from './TripTypeSelector.module.scss';

interface TripTypeSelectorProps {
  selected: TripType[];
  onChange: (types: TripType[]) => void;
}

export function TripTypeSelector({ selected, onChange }: TripTypeSelectorProps) {
  const types = Object.keys(tripTypeLabels) as TripType[];

  const handleToggle = (type: TripType) => {
    if (selected.includes(type)) {
      onChange(selected.filter((t) => t !== type));
    } else {
      onChange([...selected, type]);
    }
  };

  return (
    <div className={styles.tripTypeSelector}>
      <label className={styles.label}>What type of holiday?</label>
      <div className={styles.tabs}>
        {types.map((type) => (
          <button
            key={type}
            type="button"
            className={`${styles.tab} ${selected.includes(type) ? styles.selected : ''}`}
            onClick={() => handleToggle(type)}
            aria-pressed={selected.includes(type)}
          >
            {tripTypeLabels[type].label}
          </button>
        ))}
      </div>
    </div>
  );
}
