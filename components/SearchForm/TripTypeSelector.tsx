'use client';

import { tripTypeLabels } from '@/data/mockData';
import { TripType } from '@/types';
import { ChipGroup } from '../ui/ChipGroup';

interface TripTypeSelectorProps {
  selected: TripType[];
  onChange: (types: TripType[]) => void;
}

export function TripTypeSelector({ selected, onChange }: TripTypeSelectorProps) {
  const options = (Object.keys(tripTypeLabels) as TripType[]).map((key) => ({
    value: key,
    label: tripTypeLabels[key].label,
    icon: tripTypeLabels[key].icon,
  }));

  return (
    <div>
      <label style={{
        display: 'block',
        fontSize: '1rem',
        fontWeight: 600,
        marginBottom: '12px',
        color: 'var(--color-text)'
      }}>
        What type of holiday?
      </label>
      <ChipGroup
        options={options}
        selected={selected}
        onChange={(values) => onChange(values as TripType[])}
        multiSelect={true}
      />
    </div>
  );
}
