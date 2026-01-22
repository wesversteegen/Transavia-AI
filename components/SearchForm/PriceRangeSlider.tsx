'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import styles from './PriceRangeSlider.module.scss';

interface PriceRangeSliderProps {
  minValue: number;
  maxValue: number;
  min?: number;
  max?: number;
  onChange: (min: number, max: number) => void;
}

// Simulated price distribution data (histogram bars)
const priceDistribution = [
  2, 4, 6, 8, 12, 18, 25, 35, 48, 62, 75, 85, 92, 95, 90, 82, 70, 58, 45, 35,
  28, 22, 18, 15, 12, 10, 8, 6, 5, 4, 3, 2, 2, 1, 1, 1
];

const MIN_PRICE = 20;
const MAX_PRICE = 1000;
const STEP = 10;

export function PriceRangeSlider({
  minValue,
  maxValue,
  min = MIN_PRICE,
  max = MAX_PRICE,
  onChange,
}: PriceRangeSliderProps) {
  const [localMin, setLocalMin] = useState(minValue);
  const [localMax, setLocalMax] = useState(maxValue);
  const [isDraggingMin, setIsDraggingMin] = useState(false);
  const [isDraggingMax, setIsDraggingMax] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  const getPercentage = (value: number) => {
    return ((value - min) / (max - min)) * 100;
  };

  const getValueFromPosition = useCallback(
    (clientX: number) => {
      if (!trackRef.current) return min;
      const rect = trackRef.current.getBoundingClientRect();
      const percentage = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
      const rawValue = min + percentage * (max - min);
      return Math.round(rawValue / STEP) * STEP;
    },
    [min, max]
  );

  const handleMinChange = useCallback(
    (newMin: number) => {
      const clampedMin = Math.max(min, Math.min(newMin, localMax - STEP));
      setLocalMin(clampedMin);
      onChange(clampedMin, localMax);
    },
    [min, localMax, onChange]
  );

  const handleMaxChange = useCallback(
    (newMax: number) => {
      const clampedMax = Math.min(max, Math.max(newMax, localMin + STEP));
      setLocalMax(clampedMax);
      onChange(localMin, clampedMax);
    },
    [max, localMin, onChange]
  );

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      const value = getValueFromPosition(e.clientX);
      if (isDraggingMin) {
        handleMinChange(value);
      } else if (isDraggingMax) {
        handleMaxChange(value);
      }
    },
    [isDraggingMin, isDraggingMax, getValueFromPosition, handleMinChange, handleMaxChange]
  );

  const handleMouseUp = useCallback(() => {
    setIsDraggingMin(false);
    setIsDraggingMax(false);
  }, []);

  useEffect(() => {
    if (isDraggingMin || isDraggingMax) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove as EventListener);
      window.addEventListener('touchend', handleMouseUp);
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
        window.removeEventListener('touchmove', handleTouchMove as EventListener);
        window.removeEventListener('touchend', handleMouseUp);
      };
    }
  }, [isDraggingMin, isDraggingMax, handleMouseMove, handleMouseUp]);

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      const touch = e.touches[0];
      const value = getValueFromPosition(touch.clientX);
      if (isDraggingMin) {
        handleMinChange(value);
      } else if (isDraggingMax) {
        handleMaxChange(value);
      }
    },
    [isDraggingMin, isDraggingMax, getValueFromPosition, handleMinChange, handleMaxChange]
  );

  const handleInputChange = (type: 'min' | 'max', value: string) => {
    const numValue = parseInt(value, 10);
    if (isNaN(numValue)) return;

    if (type === 'min') {
      handleMinChange(numValue);
    } else {
      handleMaxChange(numValue);
    }
  };

  // Update local state when props change
  useEffect(() => {
    setLocalMin(minValue);
    setLocalMax(maxValue);
  }, [minValue, maxValue]);

  const minPercent = getPercentage(localMin);
  const maxPercent = getPercentage(localMax);

  return (
    <div className={styles.priceRange}>
      <div className={styles.header}>
        <label className={styles.label}>Price range</label>
        <span className={styles.subtitle}>Price per person, including all costs</span>
      </div>

      {/* Histogram */}
      <div className={styles.histogram}>
        {priceDistribution.map((height, index) => {
          const barPercent = (index / (priceDistribution.length - 1)) * 100;
          const isInRange = barPercent >= minPercent && barPercent <= maxPercent;
          return (
            <div
              key={index}
              className={`${styles.bar} ${isInRange ? styles.inRange : ''}`}
              style={{ height: `${height}%` }}
            />
          );
        })}
      </div>

      {/* Slider Track */}
      <div className={styles.sliderContainer}>
        <div className={styles.track} ref={trackRef}>
          <div
            className={styles.range}
            style={{
              left: `${minPercent}%`,
              width: `${maxPercent - minPercent}%`,
            }}
          />
        </div>

        {/* Min Thumb */}
        <div
          className={`${styles.thumb} ${isDraggingMin ? styles.active : ''}`}
          style={{ left: `${minPercent}%` }}
          onMouseDown={() => setIsDraggingMin(true)}
          onTouchStart={() => setIsDraggingMin(true)}
          role="slider"
          aria-label="Minimum price"
          aria-valuenow={localMin}
          aria-valuemin={min}
          aria-valuemax={max}
          tabIndex={0}
        />

        {/* Max Thumb */}
        <div
          className={`${styles.thumb} ${isDraggingMax ? styles.active : ''}`}
          style={{ left: `${maxPercent}%` }}
          onMouseDown={() => setIsDraggingMax(true)}
          onTouchStart={() => setIsDraggingMax(true)}
          role="slider"
          aria-label="Maximum price"
          aria-valuenow={localMax}
          aria-valuemin={min}
          aria-valuemax={max}
          tabIndex={0}
        />
      </div>

      {/* Input Fields */}
      <div className={styles.inputs}>
        <div className={styles.inputGroup}>
          <span className={styles.inputLabel}>Minimum</span>
          <div className={styles.inputWrapper}>
            <span className={styles.currency}>€</span>
            <input
              type="text"
              className={styles.input}
              value={localMin}
              onChange={(e) => handleInputChange('min', e.target.value)}
              aria-label="Minimum price"
            />
          </div>
        </div>

        <div className={styles.inputGroup}>
          <span className={styles.inputLabel}>Maximum</span>
          <div className={styles.inputWrapper}>
            <span className={styles.currency}>€</span>
            <input
              type="text"
              className={styles.input}
              value={localMax >= max ? `${max}+` : localMax}
              onChange={(e) => handleInputChange('max', e.target.value.replace('+', ''))}
              aria-label="Maximum price"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
