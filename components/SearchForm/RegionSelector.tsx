'use client';

import { regions } from '@/data/mockData';
import { RegionCluster } from '@/types';
import styles from './RegionSelector.module.scss';

interface RegionSelectorProps {
  selected: RegionCluster[];
  onChange: (regions: RegionCluster[]) => void;
}

// Atmospheric images representing each region's vibe
const regionImages: Record<RegionCluster, string> = {
  'western-europe': 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=400&q=80', // Paris/Eiffel
  'southern-europe': 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=400&q=80', // Mediterranean coast
  'central-europe': 'https://images.unsplash.com/photo-1519677100203-a0e668c92439?w=400&q=80', // Alpine village
  'nordic': 'https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?w=400&q=80', // Northern lights/fjords
  'eastern-europe': 'https://images.unsplash.com/photo-1541343672885-9be56236302a?w=400&q=80', // Budapest Parliament
};

export function RegionSelector({ selected, onChange }: RegionSelectorProps) {
  const handleToggle = (regionId: RegionCluster) => {
    if (selected.includes(regionId)) {
      onChange(selected.filter((r) => r !== regionId));
    } else {
      onChange([...selected, regionId]);
    }
  };

  const handleSelectAll = () => {
    if (selected.length === regions.length) {
      onChange([]);
    } else {
      onChange(regions.map((r) => r.id));
    }
  };

  return (
    <div className={styles.regionSelector}>
      <div className={styles.header}>
        <label className={styles.label}>Where do you want to go?</label>
        <button
          type="button"
          className={styles.selectAll}
          onClick={handleSelectAll}
        >
          {selected.length === regions.length ? 'Deselect all' : 'Select all'}
        </button>
      </div>

      <div className={styles.regions}>
        {regions.map((region) => (
          <button
            key={region.id}
            type="button"
            className={`${styles.region} ${selected.includes(region.id) ? styles.selected : ''}`}
            onClick={() => handleToggle(region.id)}
            aria-pressed={selected.includes(region.id)}
          >
            <div
              className={styles.regionImage}
              style={{ backgroundImage: `url(${regionImages[region.id]})` }}
            />
            <div className={styles.regionContent}>
              <span className={styles.regionName}>{region.name}</span>
              <span className={styles.countries}>
                {region.countries.slice(0, 3).join(', ')}
                {region.countries.length > 3 && '...'}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
