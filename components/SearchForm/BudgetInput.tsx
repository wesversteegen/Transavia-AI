'use client';

import styles from './BudgetInput.module.scss';

interface BudgetInputProps {
  value: number | null;
  onChange: (value: number | null) => void;
}

export function BudgetInput({ value, onChange }: BudgetInputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    if (inputValue === '') {
      onChange(null);
    } else {
      const numValue = parseInt(inputValue, 10);
      if (!isNaN(numValue) && numValue >= 0) {
        onChange(numValue);
      }
    }
  };

  return (
    <div className={styles.budgetInput}>
      <label htmlFor="budget" className={styles.label}>
        Maximum budget per person
      </label>
      <div className={styles.inputWrapper}>
        <span className={styles.currency}>€</span>
        <input
          type="number"
          id="budget"
          className={styles.input}
          placeholder="No limit"
          value={value ?? ''}
          onChange={handleChange}
          min={0}
          step={10}
        />
      </div>
      <span className={styles.hint}>Leave empty for no budget limit</span>
    </div>
  );
}
