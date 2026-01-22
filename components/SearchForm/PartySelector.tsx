'use client';

import { PartySize } from '@/types';
import styles from './PartySelector.module.scss';

interface PartySelectorProps {
  value: PartySize;
  onChange: (party: PartySize) => void;
}

interface CounterProps {
  label: string;
  sublabel?: string;
  value: number;
  min: number;
  max: number;
  onChange: (value: number) => void;
}

function Counter({ label, sublabel, value, min, max, onChange }: CounterProps) {
  const decrement = () => {
    if (value > min) {
      onChange(value - 1);
    }
  };

  const increment = () => {
    if (value < max) {
      onChange(value + 1);
    }
  };

  return (
    <div className={styles.counter}>
      <div className={styles.counterInfo}>
        <span className={styles.counterLabel}>{label}</span>
        {sublabel && <span className={styles.counterSublabel}>{sublabel}</span>}
      </div>
      <div className={styles.counterControls}>
        <button
          type="button"
          className={styles.counterButton}
          onClick={decrement}
          disabled={value <= min}
          aria-label={`Decrease ${label}`}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </button>
        <span className={styles.counterValue} aria-live="polite">
          {value}
        </span>
        <button
          type="button"
          className={styles.counterButton}
          onClick={increment}
          disabled={value >= max}
          aria-label={`Increase ${label}`}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export function PartySelector({ value, onChange }: PartySelectorProps) {
  return (
    <div className={styles.partySelector}>
      <label className={styles.label}>Who's travelling?</label>
      <div className={styles.counters}>
        <Counter
          label="Adults"
          value={value.adults}
          min={1}
          max={9}
          onChange={(adults) => onChange({ ...value, adults })}
        />
        <Counter
          label="Children"
          sublabel="2-11 years"
          value={value.children}
          min={0}
          max={9}
          onChange={(children) => onChange({ ...value, children })}
        />
        <Counter
          label="Infants"
          sublabel="0-2 years"
          value={value.infants}
          min={0}
          max={4}
          onChange={(infants) => onChange({ ...value, infants })}
        />
      </div>
    </div>
  );
}
