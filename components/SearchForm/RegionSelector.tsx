'use client';

import { regions } from '@/data/mockData';
import { RegionCluster } from '@/types';
import styles from './RegionSelector.module.scss';

interface RegionSelectorProps {
  selected: RegionCluster[];
  onChange: (regions: RegionCluster[]) => void;
}

const regionIcons: Record<RegionCluster, string> = {
  'western-europe': '🇫🇷',
  'southern-europe': '🇪🇸',
  'central-europe': '🇩🇪',
  'nordic': '🇸🇪',
  'eastern-europe': '🇵🇱',
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
            <span className={styles.regionIcon}>{regionIcons[region.id]}</span>
            <span className={styles.regionName}>{region.name}</span>
            <span className={styles.countries}>
              {region.countries.slice(0, 3).join(', ')}
              {region.countries.length > 3 && '...'}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
