'use client';

import { useState, useRef } from 'react';
import { Header } from '@/components/Header';
import { SearchForm } from '@/components/SearchForm';
import { ResultsGrid } from '@/components/Results';
import { SearchFilters, Destination } from '@/types';
import { destinations } from '@/data/mockData';
import styles from './page.module.scss';

const initialFilters: SearchFilters = {
  regions: [],
  tripTypes: [],
  adults: 2,
  children: 0,
  infants: 0,
  maxBudget: null,
  dateMode: 'flexible',
  startDate: null,
  endDate: null,
  flexibleMonth: null,
  flexibleDuration: null,
};

function filterDestinations(filters: SearchFilters): Destination[] {
  return destinations.filter((dest) => {
    // Filter by region
    if (filters.regions.length > 0 && !filters.regions.includes(dest.region)) {
      return false;
    }

    // Filter by trip type
    if (
      filters.tripTypes.length > 0 &&
      !filters.tripTypes.some((type) => dest.tripTypes.includes(type))
    ) {
      return false;
    }

    // Filter by budget
    if (filters.maxBudget !== null && dest.priceFrom > filters.maxBudget) {
      return false;
    }

    return true;
  });
}

export default function Home() {
  const [filters, setFilters] = useState<SearchFilters>(initialFilters);
  const [results, setResults] = useState<Destination[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const resultsRef = useRef<HTMLDivElement>(null);

  const handleSearch = () => {
    setIsSearching(true);
    setHasSearched(true);

    // Simulate API delay
    setTimeout(() => {
      const filtered = filterDestinations(filters);
      setResults(filtered);
      setIsSearching(false);

      // Scroll to results
      setTimeout(() => {
        resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }, 800);
  };

  return (
    <main className={styles.main}>
      <Header />

      <section className={styles.hero}>
        <div className="container">
          <h1 className={styles.title}>Where will your next adventure take you?</h1>
          <p className={styles.subtitle}>
            Tell us what you're looking for and we'll find the perfect destinations for your holiday
          </p>
        </div>
      </section>

      <section className={styles.searchSection}>
        <div className="container">
          <div className={styles.formWrapper}>
            <SearchForm
              filters={filters}
              onFiltersChange={setFilters}
              onSearch={handleSearch}
              isSearching={isSearching}
            />
          </div>
        </div>
      </section>

      <section className={styles.resultsSection} ref={resultsRef}>
        <div className="container">
          <ResultsGrid
            destinations={results}
            isLoading={isSearching}
            hasSearched={hasSearched}
          />
        </div>
      </section>

      <footer className={styles.footer}>
        <div className="container">
          <p>AI Flight Inspiration - Prototype</p>
        </div>
      </footer>
    </main>
  );
}
