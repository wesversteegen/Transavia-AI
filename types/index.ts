export type RegionCluster =
  | 'western-europe'
  | 'southern-europe'
  | 'central-europe'
  | 'nordic'
  | 'eastern-europe';

export type TripType = 'popular' | 'art-culture' | 'beach' | 'mountains' | 'outdoor' | 'activities';

export interface Region {
  id: RegionCluster;
  name: string;
  countries: string[];
}

export interface Destination {
  id: string;
  name: string;
  country: string;
  countryCode: string;
  region: RegionCluster;
  tripTypes: TripType[];
  imageUrl: string;
  priceFrom: number;
  description: string;
  airport: string;
}

export interface SearchFilters {
  regions: RegionCluster[];
  tripTypes: TripType[];
  adults: number;
  children: number;
  infants: number;
  minBudget: number;
  maxBudget: number;
  dateMode: 'precise' | 'flexible';
  startDate: Date | null;
  endDate: Date | null;
  flexibleMonth: string | null;
  flexibleDuration: string | null;
}

export interface PartySize {
  adults: number;
  children: number;
  infants: number;
}
