'use client';

import { RegionCluster } from '@/types';
import styles from './EuropeMap.module.scss';

interface EuropeMapProps {
  selected: RegionCluster[];
  onToggle: (region: RegionCluster) => void;
}

const regionLabels: Record<RegionCluster, string> = {
  'western-europe': 'Western Europe',
  'southern-europe': 'Southern Europe',
  'central-europe': 'Central Europe',
  'nordic': 'Nordic',
  'eastern-europe': 'Eastern Europe',
};

export function EuropeMap({ selected, onToggle }: EuropeMapProps) {
  const isSelected = (region: RegionCluster) => selected.includes(region);

  return (
    <div className={styles.mapContainer}>
      <svg
        viewBox="0 0 400 350"
        className={styles.map}
        aria-label="Interactive map of Europe"
      >
        {/* Nordic - Scandinavia */}
        <g
          className={`${styles.region} ${isSelected('nordic') ? styles.selected : ''}`}
          onClick={() => onToggle('nordic')}
          role="button"
          tabIndex={0}
          aria-pressed={isSelected('nordic')}
          aria-label="Nordic region"
          onKeyDown={(e) => e.key === 'Enter' && onToggle('nordic')}
        >
          <path
            d="M200 20 L280 30 L290 80 L260 120 L220 110 L180 90 L170 50 Z"
            className={styles.regionPath}
          />
          <text x="230" y="70" className={styles.regionLabel}>Nordic</text>
        </g>

        {/* Western Europe - UK, France, Belgium, Netherlands */}
        <g
          className={`${styles.region} ${isSelected('western-europe') ? styles.selected : ''}`}
          onClick={() => onToggle('western-europe')}
          role="button"
          tabIndex={0}
          aria-pressed={isSelected('western-europe')}
          aria-label="Western Europe region"
          onKeyDown={(e) => e.key === 'Enter' && onToggle('western-europe')}
        >
          <path
            d="M60 100 L120 90 L150 110 L160 160 L140 200 L100 220 L60 200 L40 150 Z"
            className={styles.regionPath}
          />
          <text x="100" y="155" className={styles.regionLabel}>Western</text>
        </g>

        {/* Central Europe - Germany, Austria, Switzerland, Czech Republic */}
        <g
          className={`${styles.region} ${isSelected('central-europe') ? styles.selected : ''}`}
          onClick={() => onToggle('central-europe')}
          role="button"
          tabIndex={0}
          aria-pressed={isSelected('central-europe')}
          aria-label="Central Europe region"
          onKeyDown={(e) => e.key === 'Enter' && onToggle('central-europe')}
        >
          <path
            d="M150 110 L220 110 L250 140 L240 190 L200 210 L160 200 L140 160 Z"
            className={styles.regionPath}
          />
          <text x="190" y="160" className={styles.regionLabel}>Central</text>
        </g>

        {/* Eastern Europe - Poland, Hungary, Romania, etc */}
        <g
          className={`${styles.region} ${isSelected('eastern-europe') ? styles.selected : ''}`}
          onClick={() => onToggle('eastern-europe')}
          role="button"
          tabIndex={0}
          aria-pressed={isSelected('eastern-europe')}
          aria-label="Eastern Europe region"
          onKeyDown={(e) => e.key === 'Enter' && onToggle('eastern-europe')}
        >
          <path
            d="M260 120 L340 100 L360 160 L350 220 L300 240 L250 220 L240 190 L250 140 Z"
            className={styles.regionPath}
          />
          <text x="295" y="170" className={styles.regionLabel}>Eastern</text>
        </g>

        {/* Southern Europe - Spain, Portugal, Italy, Greece */}
        <g
          className={`${styles.region} ${isSelected('southern-europe') ? styles.selected : ''}`}
          onClick={() => onToggle('southern-europe')}
          role="button"
          tabIndex={0}
          aria-pressed={isSelected('southern-europe')}
          aria-label="Southern Europe region"
          onKeyDown={(e) => e.key === 'Enter' && onToggle('southern-europe')}
        >
          <path
            d="M60 220 L100 220 L160 200 L200 210 L250 220 L300 240 L320 290 L280 320 L200 330 L120 310 L60 280 L40 240 Z"
            className={styles.regionPath}
          />
          <text x="175" y="275" className={styles.regionLabel}>Southern</text>
        </g>
      </svg>

      {/* Legend */}
      <div className={styles.legend}>
        {(Object.keys(regionLabels) as RegionCluster[]).map((region) => (
          <button
            key={region}
            type="button"
            className={`${styles.legendItem} ${isSelected(region) ? styles.selected : ''}`}
            onClick={() => onToggle(region)}
          >
            <span className={styles.legendDot} />
            <span className={styles.legendText}>{regionLabels[region]}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
