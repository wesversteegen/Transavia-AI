'use client';

import { SearchFilters, RegionCluster, TripType, PartySize } from '@/types';
import { RegionSelector } from './RegionSelector';
import { TripTypeSelector } from './TripTypeSelector';
import { PartySelector } from './PartySelector';
import { BudgetInput } from './BudgetInput';
import { DateRangeSelector } from './DateRangeSelector';
import styles from './SearchForm.module.scss';

interface SearchFormProps {
  filters: SearchFilters;
  onFiltersChange: (filters: SearchFilters) => void;
  onSearch: () => void;
  isSearching: boolean;
}

export function SearchForm({
  filters,
  onFiltersChange,
  onSearch,
  isSearching,
}: SearchFormProps) {
  const handleRegionsChange = (regions: RegionCluster[]) => {
    onFiltersChange({ ...filters, regions });
  };

  const handleTripTypesChange = (tripTypes: TripType[]) => {
    onFiltersChange({ ...filters, tripTypes });
  };

  const handlePartyChange = (party: PartySize) => {
    onFiltersChange({
      ...filters,
      adults: party.adults,
      children: party.children,
      infants: party.infants,
    });
  };

  const handleBudgetChange = (maxBudget: number | null) => {
    onFiltersChange({ ...filters, maxBudget });
  };

  const handleDateModeChange = (dateMode: 'precise' | 'flexible') => {
    onFiltersChange({ ...filters, dateMode });
  };

  const handleDatesChange = (startDate: Date | null, endDate: Date | null) => {
    onFiltersChange({ ...filters, startDate, endDate });
  };

  const handleFlexibleMonthChange = (flexibleMonth: string | null) => {
    onFiltersChange({ ...filters, flexibleMonth });
  };

  const handleFlexibleDurationChange = (flexibleDuration: string | null) => {
    onFiltersChange({ ...filters, flexibleDuration });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch();
  };

  const partySize: PartySize = {
    adults: filters.adults,
    children: filters.children,
    infants: filters.infants,
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.section}>
        <RegionSelector
          selected={filters.regions}
          onChange={handleRegionsChange}
        />
      </div>

      <div className={styles.section}>
        <TripTypeSelector
          selected={filters.tripTypes}
          onChange={handleTripTypesChange}
        />
      </div>

      <div className={styles.section}>
        <PartySelector
          value={partySize}
          onChange={handlePartyChange}
        />
      </div>

      <div className={styles.section}>
        <BudgetInput
          value={filters.maxBudget}
          onChange={handleBudgetChange}
        />
      </div>

      <div className={styles.section}>
        <DateRangeSelector
          dateMode={filters.dateMode}
          onDateModeChange={handleDateModeChange}
          startDate={filters.startDate}
          endDate={filters.endDate}
          onDatesChange={handleDatesChange}
          flexibleMonth={filters.flexibleMonth}
          onFlexibleMonthChange={handleFlexibleMonthChange}
          flexibleDuration={filters.flexibleDuration}
          onFlexibleDurationChange={handleFlexibleDurationChange}
        />
      </div>

      <div className={styles.actions}>
        <button
          type="submit"
          className={styles.searchButton}
          disabled={isSearching}
        >
          {isSearching ? (
            <>
              <span className={styles.spinner} />
              Finding inspiration...
            </>
          ) : (
            <>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              Find Inspiration
            </>
          )}
        </button>
      </div>
    </form>
  );
}
