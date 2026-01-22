'use client';

import { regions } from '@/data/mockData';
import { RegionCluster } from '@/types';
import { EuropeMap } from './EuropeMap';
import styles from './RegionSelector.module.scss';

interface RegionSelectorProps {
  selected: RegionCluster[];
  onChange: (regions: RegionCluster[]) => void;
}

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

      <EuropeMap selected={selected} onToggle={handleToggle} />
    </div>
  );
}
