'use client';

import { useState } from 'react';
import { DayPicker, DateRange } from 'react-day-picker';
import { format, addMonths } from 'date-fns';
import { flexibleMonths, flexibleDurations } from '@/data/mockData';
import styles from './DateRangeSelector.module.scss';
import 'react-day-picker/dist/style.css';

interface DateRangeSelectorProps {
  dateMode: 'precise' | 'flexible';
  onDateModeChange: (mode: 'precise' | 'flexible') => void;
  startDate: Date | null;
  endDate: Date | null;
  onDatesChange: (start: Date | null, end: Date | null) => void;
  flexibleMonth: string | null;
  onFlexibleMonthChange: (month: string | null) => void;
  flexibleDuration: string | null;
  onFlexibleDurationChange: (duration: string | null) => void;
}

export function DateRangeSelector({
  dateMode,
  onDateModeChange,
  startDate,
  endDate,
  onDatesChange,
  flexibleMonth,
  onFlexibleMonthChange,
  flexibleDuration,
  onFlexibleDurationChange,
}: DateRangeSelectorProps) {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const dateRange: DateRange | undefined =
    startDate || endDate
      ? { from: startDate || undefined, to: endDate || undefined }
      : undefined;

  const handleRangeSelect = (range: DateRange | undefined) => {
    onDatesChange(range?.from || null, range?.to || null);
  };

  const formatDateRange = () => {
    if (!startDate && !endDate) return 'Select dates';
    if (startDate && endDate) {
      return `${format(startDate, 'dd MMM')} - ${format(endDate, 'dd MMM yyyy')}`;
    }
    if (startDate) {
      return `${format(startDate, 'dd MMM yyyy')} - Select end date`;
    }
    return 'Select dates';
  };

  return (
    <div className={styles.dateSelector}>
      <label className={styles.label}>When do you want to travel?</label>

      <div className={styles.modeToggle}>
        <button
          type="button"
          className={`${styles.modeButton} ${dateMode === 'precise' ? styles.active : ''}`}
          onClick={() => onDateModeChange('precise')}
        >
          Specific dates
        </button>
        <button
          type="button"
          className={`${styles.modeButton} ${dateMode === 'flexible' ? styles.active : ''}`}
          onClick={() => onDateModeChange('flexible')}
        >
          I'm flexible
        </button>
      </div>

      {dateMode === 'precise' ? (
        <div className={styles.preciseDates}>
          <button
            type="button"
            className={styles.dateButton}
            onClick={() => setIsCalendarOpen(!isCalendarOpen)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            <span>{formatDateRange()}</span>
          </button>

          {isCalendarOpen && (
            <div className={styles.calendarWrapper}>
              <DayPicker
                mode="range"
                selected={dateRange}
                onSelect={handleRangeSelect}
                numberOfMonths={2}
                defaultMonth={new Date()}
                fromDate={new Date()}
                toDate={addMonths(new Date(), 12)}
                classNames={{
                  months: styles.months,
                  month: styles.month,
                  caption: styles.caption,
                  caption_label: styles.captionLabel,
                  nav: styles.nav,
                  nav_button: styles.navButton,
                  table: styles.table,
                  head_row: styles.headRow,
                  head_cell: styles.headCell,
                  row: styles.row,
                  cell: styles.cell,
                  day: styles.day,
                  day_selected: styles.daySelected,
                  day_today: styles.dayToday,
                  day_range_middle: styles.dayRangeMiddle,
                  day_range_start: styles.dayRangeStart,
                  day_range_end: styles.dayRangeEnd,
                  day_disabled: styles.dayDisabled,
                }}
              />
              <button
                type="button"
                className={styles.closeCalendar}
                onClick={() => setIsCalendarOpen(false)}
              >
                Done
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className={styles.flexibleDates}>
          <div className={styles.selectGroup}>
            <label htmlFor="flexMonth" className={styles.selectLabel}>Month</label>
            <select
              id="flexMonth"
              className={styles.select}
              value={flexibleMonth || ''}
              onChange={(e) => onFlexibleMonthChange(e.target.value || null)}
            >
              <option value="">Any month</option>
              {flexibleMonths.map((month) => (
                <option key={month.value} value={month.value}>
                  {month.label}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.selectGroup}>
            <label htmlFor="flexDuration" className={styles.selectLabel}>Duration</label>
            <select
              id="flexDuration"
              className={styles.select}
              value={flexibleDuration || ''}
              onChange={(e) => onFlexibleDurationChange(e.target.value || null)}
            >
              <option value="">Any duration</option>
              {flexibleDurations.map((duration) => (
                <option key={duration.value} value={duration.value}>
                  {duration.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}
    </div>
  );
}
