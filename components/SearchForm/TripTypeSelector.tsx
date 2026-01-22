'use client';

import { tripTypeLabels } from '@/data/mockData';
import { TripType } from '@/types';
import { ChipGroup, ChipOption } from '../ui/ChipGroup';

interface TripTypeSelectorProps {
  selected: TripType[];
  onChange: (types: TripType[]) => void;
}

export function TripTypeSelector({ selected, onChange }: TripTypeSelectorProps) {
  const options: ChipOption[] = (Object.keys(tripTypeLabels) as TripType[]).map((type) => ({
    value: type,
    label: tripTypeLabels[type].label,
    icon: tripTypeLabels[type].icon,
  }));

  return (
    <ChipGroup
      label="What type of holiday?"
      options={options}
      selected={selected}
      onChange={(values) => onChange(values as TripType[])}
      multiSelect
    />
  );
}
