'use client';

import styles from './ChipGroup.module.scss';

export interface ChipOption {
  value: string;
  label: string;
  icon?: string;
}

interface ChipGroupProps {
  options: ChipOption[];
  selected: string[];
  onChange: (selected: string[]) => void;
  label?: string;
  multiSelect?: boolean;
}

export function ChipGroup({
  options,
  selected,
  onChange,
  label,
  multiSelect = true,
}: ChipGroupProps) {
  const handleClick = (value: string) => {
    if (multiSelect) {
      if (selected.includes(value)) {
        onChange(selected.filter((v) => v !== value));
      } else {
        onChange([...selected, value]);
      }
    } else {
      if (selected.includes(value)) {
        onChange([]);
      } else {
        onChange([value]);
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, value: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick(value);
    }
  };

  return (
    <div className={styles.chipGroup}>
      {label && <span className={styles.label}>{label}</span>}
      <div className={styles.chips} role="group" aria-label={label}>
        {options.map((option) => (
          <button
            key={option.value}
            type="button"
            role="checkbox"
            aria-checked={selected.includes(option.value)}
            className={`${styles.chip} ${selected.includes(option.value) ? styles.selected : ''}`}
            onClick={() => handleClick(option.value)}
            onKeyDown={(e) => handleKeyDown(e, option.value)}
          >
            {option.icon && <span className={styles.icon}>{option.icon}</span>}
            <span>{option.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
