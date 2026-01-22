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
        viewBox="0 0 500 420"
        className={styles.map}
        aria-label="Interactive map of Europe"
      >
        {/* Nordic - Norway, Sweden, Finland, Denmark, Iceland */}
        <g
          className={`${styles.region} ${isSelected('nordic') ? styles.selected : ''}`}
          onClick={() => onToggle('nordic')}
          role="button"
          tabIndex={0}
          aria-pressed={isSelected('nordic')}
          aria-label="Nordic region"
          onKeyDown={(e) => e.key === 'Enter' && onToggle('nordic')}
        >
          {/* Iceland */}
          <path
            d="M55 45 L85 40 L95 50 L90 65 L70 70 L50 60 Z"
            className={styles.regionPath}
          />
          {/* Norway - West coast */}
          <path
            d="M205 15 L215 10 L235 15 L245 35 L240 55 L235 75 L225 95 L220 115 L210 125 L200 115 L205 95 L210 75 L215 55 L210 35 Z"
            className={styles.regionPath}
          />
          {/* Sweden */}
          <path
            d="M245 35 L260 30 L275 40 L280 60 L278 85 L275 110 L268 130 L258 145 L245 140 L242 125 L248 110 L255 90 L252 70 L245 50 Z"
            className={styles.regionPath}
          />
          {/* Finland */}
          <path
            d="M280 40 L310 35 L325 50 L330 75 L325 100 L315 120 L300 135 L285 130 L278 115 L282 95 L285 75 L282 55 Z"
            className={styles.regionPath}
          />
          {/* Denmark */}
          <path
            d="M215 140 L235 138 L245 148 L242 160 L228 165 L215 158 Z"
            className={styles.regionPath}
          />
          <text x="260" y="85" className={styles.regionLabel}>Nordic</text>
        </g>

        {/* Western Europe - UK, Ireland, France, Belgium, Netherlands */}
        <g
          className={`${styles.region} ${isSelected('western-europe') ? styles.selected : ''}`}
          onClick={() => onToggle('western-europe')}
          role="button"
          tabIndex={0}
          aria-pressed={isSelected('western-europe')}
          aria-label="Western Europe region"
          onKeyDown={(e) => e.key === 'Enter' && onToggle('western-europe')}
        >
          {/* Ireland */}
          <path
            d="M95 120 L115 115 L125 125 L128 145 L120 160 L105 165 L90 155 L88 135 Z"
            className={styles.regionPath}
          />
          {/* UK - Great Britain */}
          <path
            d="M135 100 L155 95 L165 105 L170 125 L175 145 L172 165 L165 180 L155 190 L145 185 L140 170 L142 150 L138 130 L132 115 Z"
            className={styles.regionPath}
          />
          {/* Netherlands + Belgium */}
          <path
            d="M195 155 L215 152 L220 165 L215 180 L200 185 L190 175 Z"
            className={styles.regionPath}
          />
          {/* France */}
          <path
            d="M145 195 L165 185 L190 180 L200 185 L215 190 L225 205 L230 230 L225 260 L210 280 L185 290 L160 285 L140 270 L130 245 L135 220 Z"
            className={styles.regionPath}
          />
          <text x="168" y="240" className={styles.regionLabel}>Western</text>
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
          {/* Germany */}
          <path
            d="M220 155 L250 150 L275 155 L290 170 L295 190 L290 210 L275 225 L255 230 L235 225 L220 210 L215 190 L215 170 Z"
            className={styles.regionPath}
          />
          {/* Switzerland */}
          <path
            d="M225 260 L245 255 L260 262 L255 280 L235 285 L220 275 Z"
            className={styles.regionPath}
          />
          {/* Austria */}
          <path
            d="M260 245 L290 240 L315 250 L318 265 L305 280 L280 285 L260 278 L255 260 Z"
            className={styles.regionPath}
          />
          {/* Czech Republic */}
          <path
            d="M275 210 L300 205 L320 215 L318 235 L300 240 L280 235 L272 220 Z"
            className={styles.regionPath}
          />
          <text x="275" y="200" className={styles.regionLabel}>Central</text>
        </g>

        {/* Eastern Europe - Poland, Hungary, Romania, Bulgaria, Slovenia */}
        <g
          className={`${styles.region} ${isSelected('eastern-europe') ? styles.selected : ''}`}
          onClick={() => onToggle('eastern-europe')}
          role="button"
          tabIndex={0}
          aria-pressed={isSelected('eastern-europe')}
          aria-label="Eastern Europe region"
          onKeyDown={(e) => e.key === 'Enter' && onToggle('eastern-europe')}
        >
          {/* Poland */}
          <path
            d="M295 145 L340 140 L370 155 L375 180 L365 205 L340 215 L320 210 L300 200 L290 175 Z"
            className={styles.regionPath}
          />
          {/* Hungary */}
          <path
            d="M320 245 L355 240 L375 255 L370 275 L345 285 L320 280 L315 262 Z"
            className={styles.regionPath}
          />
          {/* Romania */}
          <path
            d="M375 250 L410 245 L435 260 L440 290 L425 315 L395 320 L370 310 L365 285 Z"
            className={styles.regionPath}
          />
          {/* Bulgaria */}
          <path
            d="M380 320 L420 315 L440 335 L435 360 L405 370 L375 360 L370 340 Z"
            className={styles.regionPath}
          />
          {/* Slovenia */}
          <path
            d="M305 285 L325 282 L335 295 L325 310 L305 308 L295 295 Z"
            className={styles.regionPath}
          />
          <text x="365" y="275" className={styles.regionLabel}>Eastern</text>
        </g>

        {/* Southern Europe - Spain, Portugal, Italy, Greece, Croatia */}
        <g
          className={`${styles.region} ${isSelected('southern-europe') ? styles.selected : ''}`}
          onClick={() => onToggle('southern-europe')}
          role="button"
          tabIndex={0}
          aria-pressed={isSelected('southern-europe')}
          aria-label="Southern Europe region"
          onKeyDown={(e) => e.key === 'Enter' && onToggle('southern-europe')}
        >
          {/* Portugal */}
          <path
            d="M65 260 L85 255 L90 280 L88 310 L80 340 L65 345 L55 325 L55 290 Z"
            className={styles.regionPath}
          />
          {/* Spain */}
          <path
            d="M85 255 L130 245 L160 250 L175 260 L180 285 L175 315 L155 340 L120 355 L85 350 L70 330 L75 300 L80 270 Z"
            className={styles.regionPath}
          />
          {/* Italy - boot shape */}
          <path
            d="M255 285 L275 290 L295 300 L310 320 L305 345 L290 370 L275 395 L260 400 L250 385 L255 360 L268 340 L280 325 L275 305 L260 295 Z"
            className={styles.regionPath}
          />
          {/* Sicily */}
          <path
            d="M265 395 L285 390 L295 400 L285 410 L265 408 Z"
            className={styles.regionPath}
          />
          {/* Croatia */}
          <path
            d="M315 295 L340 290 L355 305 L350 325 L330 335 L310 325 L305 310 Z"
            className={styles.regionPath}
          />
          {/* Greece */}
          <path
            d="M365 355 L395 350 L415 370 L420 395 L405 410 L380 405 L360 390 L358 370 Z"
            className={styles.regionPath}
          />
          <text x="130" y="305" className={styles.regionLabel}>Southern</text>
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
