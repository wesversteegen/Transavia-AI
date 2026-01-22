'use client';

import { regions } from '@/data/mockData';
import { RegionCluster } from '@/types';
import { ChipGroup, ChipOption } from '../ui/ChipGroup';

interface RegionSelectorProps {
  selected: RegionCluster[];
  onChange: (regions: RegionCluster[]) => void;
}

// Flag icons representing each region
const regionIcons: Record<RegionCluster, string> = {
  'western-europe': '🇫🇷',
  'southern-europe': '🇪🇸',
  'central-europe': '🇩🇪',
  'nordic': '🇸🇪',
  'eastern-europe': '🇵🇱',
};

export function RegionSelector({ selected, onChange }: RegionSelectorProps) {
  const options: ChipOption[] = regions.map((region) => ({
    value: region.id,
    label: region.name,
    icon: regionIcons[region.id],
  }));

  return (
    <ChipGroup
      label="Where do you want to go?"
      options={options}
      selected={selected}
      onChange={(values) => onChange(values as RegionCluster[])}
      multiSelect
    />
  );
}
