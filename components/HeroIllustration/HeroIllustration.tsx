'use client';

import styles from './HeroIllustration.module.scss';

export function HeroIllustration() {
  return (
    <div className={styles.illustration}>
      <svg
        viewBox="0 0 800 300"
        className={styles.svg}
        aria-hidden="true"
      >
        {/* Background gradient sky */}
        <defs>
          <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#e8f5e9" />
            <stop offset="100%" stopColor="#ffffff" />
          </linearGradient>
          <linearGradient id="greenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00AB61" />
            <stop offset="100%" stopColor="#05CE78" />
          </linearGradient>
        </defs>

        {/* Sky background */}
        <rect x="0" y="0" width="800" height="300" fill="url(#skyGradient)" />

        {/* Clouds */}
        <g className={styles.cloud} style={{ animationDelay: '0s' }}>
          <ellipse cx="120" cy="60" rx="40" ry="20" fill="white" opacity="0.8" />
          <ellipse cx="145" cy="55" rx="30" ry="18" fill="white" opacity="0.8" />
          <ellipse cx="100" cy="55" rx="25" ry="15" fill="white" opacity="0.8" />
        </g>
        <g className={styles.cloud} style={{ animationDelay: '2s' }}>
          <ellipse cx="600" cy="80" rx="35" ry="18" fill="white" opacity="0.8" />
          <ellipse cx="625" cy="75" rx="28" ry="15" fill="white" opacity="0.8" />
          <ellipse cx="580" cy="75" rx="22" ry="12" fill="white" opacity="0.8" />
        </g>
        <g className={styles.cloud} style={{ animationDelay: '4s' }}>
          <ellipse cx="350" cy="45" rx="30" ry="15" fill="white" opacity="0.7" />
          <ellipse cx="370" cy="40" rx="25" ry="13" fill="white" opacity="0.7" />
        </g>

        {/* Left side: Eiffel Tower silhouette */}
        <g transform="translate(80, 120)">
          <path
            d="M40 180 L45 120 L35 120 L30 80 L45 80 L50 40 L40 40 L45 0 L55 0 L60 40 L50 40 L55 80 L70 80 L65 120 L55 120 L60 180 Z"
            fill="#00AB61"
            opacity="0.15"
          />
        </g>

        {/* Right side: Colosseum silhouette */}
        <g transform="translate(620, 160)">
          <path
            d="M0 140 L0 60 C0 30 30 20 60 20 C90 20 120 30 120 60 L120 140
               M10 60 L10 130
               M30 50 L30 130
               M50 45 L50 130
               M70 45 L70 130
               M90 50 L90 130
               M110 60 L110 130"
            fill="none"
            stroke="#E20076"
            strokeWidth="3"
            opacity="0.15"
          />
        </g>

        {/* Center: Airplane */}
        <g className={styles.airplane} transform="translate(320, 100)">
          {/* Airplane body */}
          <ellipse cx="80" cy="50" rx="70" ry="18" fill="#00AB61" />
          {/* Cockpit */}
          <ellipse cx="145" cy="50" rx="15" ry="12" fill="#05CE78" />
          {/* Tail */}
          <path d="M15 50 L-5 20 L20 35 Z" fill="#00AB61" />
          <path d="M15 50 L-5 80 L20 65 Z" fill="#00AB61" />
          {/* Wings */}
          <path d="M60 50 L40 110 L100 110 L90 50 Z" fill="#E20076" />
          <path d="M60 50 L40 -10 L100 -10 L90 50 Z" fill="#E20076" />
          {/* Engine */}
          <ellipse cx="70" cy="95" rx="10" ry="6" fill="#05CE78" />
          <ellipse cx="70" cy="5" rx="10" ry="6" fill="#05CE78" />
          {/* Windows */}
          <circle cx="100" cy="50" r="4" fill="white" />
          <circle cx="115" cy="50" r="4" fill="white" />
          <circle cx="130" cy="50" r="4" fill="white" />
        </g>

        {/* Flight path dotted line */}
        <path
          d="M50 220 Q 200 100 400 150 Q 600 200 750 120"
          fill="none"
          stroke="#00AB61"
          strokeWidth="2"
          strokeDasharray="8 6"
          opacity="0.4"
        />

        {/* Left: Suitcase */}
        <g transform="translate(150, 200)">
          <rect x="0" y="10" width="50" height="60" rx="5" fill="#E20076" opacity="0.8" />
          <rect x="15" y="0" width="20" height="15" rx="3" fill="#E20076" opacity="0.8" />
          <line x1="10" y1="30" x2="40" y2="30" stroke="white" strokeWidth="2" />
          <line x1="10" y1="45" x2="40" y2="45" stroke="white" strokeWidth="2" />
        </g>

        {/* Right: Passport */}
        <g transform="translate(600, 210)">
          <rect x="0" y="0" width="40" height="55" rx="3" fill="#00AB61" opacity="0.8" />
          <circle cx="20" cy="22" r="10" fill="none" stroke="white" strokeWidth="1.5" />
          <rect x="8" y="38" width="24" height="2" fill="white" opacity="0.6" />
          <rect x="8" y="44" width="18" height="2" fill="white" opacity="0.6" />
        </g>

        {/* Bottom decoration: wave pattern */}
        <path
          d="M0 280 Q 100 260 200 280 Q 300 300 400 280 Q 500 260 600 280 Q 700 300 800 280 L800 300 L0 300 Z"
          fill="#00AB61"
          opacity="0.08"
        />

        {/* Sun */}
        <g className={styles.sun}>
          <circle cx="700" cy="50" r="30" fill="#FFB800" opacity="0.3" />
          <circle cx="700" cy="50" r="20" fill="#FFB800" opacity="0.5" />
        </g>

        {/* Location pin - left */}
        <g transform="translate(100, 240)">
          <path
            d="M15 0 C6.7 0 0 6.7 0 15 C0 26.25 15 40 15 40 C15 40 30 26.25 30 15 C30 6.7 23.3 0 15 0 Z"
            fill="#E20076"
            opacity="0.7"
          />
          <circle cx="15" cy="14" r="6" fill="white" />
        </g>

        {/* Location pin - right */}
        <g transform="translate(670, 230)">
          <path
            d="M12 0 C5.4 0 0 5.4 0 12 C0 21 12 32 12 32 C12 32 24 21 24 12 C24 5.4 18.6 0 12 0 Z"
            fill="#00AB61"
            opacity="0.7"
          />
          <circle cx="12" cy="11" r="5" fill="white" />
        </g>
      </svg>
    </div>
  );
}
