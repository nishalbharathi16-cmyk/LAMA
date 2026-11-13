interface LamaLogoProps {
  variant?: 'horizontal' | 'stacked' | 'monogram';
  theme?: 'light' | 'dark';
  className?: string;
  showTagline?: boolean;
}

export function LamaLogo({
  variant = 'horizontal',
  theme = 'light',
  className = '',
  showTagline = true,
}: LamaLogoProps) {
  const isDark = theme === 'dark';
  const frameColor = isDark ? '#F2EDE3' : '#252421';
  const step1Color = isDark ? '#9AA08F' : '#78806D';
  const step2Color = '#B96543'; // Burnt Terracotta
  const step3Color = '#B69A6A'; // Muted Gold
  const goldAccent = '#B69A6A';
  const textColor = isDark ? '#F2EDE3' : '#252421';
  const taglineColor = isDark ? '#C8BFB0' : '#78806D';

  // Standalone Monogram Mark
  const Monogram = ({ size = 44 }: { size?: number }) => (
    <svg
      viewBox="0 0 80 80"
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
      aria-hidden="true"
    >
      {/* Crown Capstone */}
      <rect x="14" y="10" width="12" height="3.5" fill={goldAccent} />
      {/* Vertical Spine */}
      <rect x="14" y="14.5" width="12" height="48.5" fill={frameColor} />
      {/* Horizontal Plinth */}
      <rect x="14" y="64" width="53" height="7" fill={frameColor} />
      {/* Step 1: Entry / Foundation */}
      <rect x="28.5" y="47" width="10.5" height="16" fill={step1Color} />
      {/* Step 2: Managerial Acceleration */}
      <rect x="41.5" y="35" width="10.5" height="28" fill={step2Color} />
      {/* Step 3: Executive Summit */}
      <rect x="54.5" y="23" width="10.5" height="40" fill={step3Color} />
    </svg>
  );

  if (variant === 'monogram') {
    return (
      <span className={`inline-flex items-center justify-center ${className}`}>
        <Monogram size={40} />
      </span>
    );
  }

  if (variant === 'stacked') {
    return (
      <div className={`flex flex-col items-center text-center ${className}`}>
        <Monogram size={56} />
        <span
          className="mt-3 font-serif text-3xl font-bold tracking-[0.22em] leading-none"
          style={{ color: textColor }}
        >
          LAMA
        </span>
        <span
          className="mt-2.5 h-[2px] w-12"
          style={{ backgroundColor: step2Color }}
          aria-hidden="true"
        />
        {showTagline && (
          <span
            className="mt-2 text-[9px] font-semibold uppercase tracking-[0.24em]"
            style={{ color: taglineColor }}
          >
            Leadership &amp; Managerial Skills Academy
          </span>
        )}
      </div>
    );
  }

  // Default: Horizontal Logo
  return (
    <div className={`flex items-center gap-3.5 ${className}`}>
      {/* Monogram Symbol in refined frame container */}
      <span
        className={`flex h-11 w-11 shrink-0 items-center justify-center border transition-colors ${
          isDark
            ? 'border-[#F6F2E9]/20 bg-[#1B1B19] group-hover:border-[#B96543]'
            : 'border-[#20201E]/20 bg-[#FFFFFF] shadow-xs group-hover:border-[#B96543]'
        }`}
      >
        <Monogram size={34} />
      </span>

      {/* Brand Typography */}
      <div className="flex flex-col leading-none">
        <span
          className="font-serif text-2xl font-bold tracking-[0.16em]"
          style={{ color: textColor }}
        >
          LAMA
        </span>
        {showTagline && (
          <span
            className="mt-1 text-[9.5px] font-semibold uppercase tracking-[0.16em] sm:text-[10px] sm:tracking-[0.19em]"
            style={{ color: taglineColor }}
          >
            Leadership &amp; Managerial Skills Academy
          </span>
        )}
      </div>
    </div>
  );
}
