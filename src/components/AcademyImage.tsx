import { useState } from 'react';

interface AcademyImageProps {
  src: string;
  alt: string;
  slotTitle: string;
  aspectClassName?: string;
  objectPositionClassName?: string;
  className?: string;
  priority?: boolean;
}

export function AcademyImage({
  src,
  alt,
  slotTitle,
  aspectClassName = 'aspect-[4/3]',
  objectPositionClassName = 'object-[center_25%]',
  className = '',
  priority = false,
}: AcademyImageProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <div
      className={`relative overflow-hidden bg-[#ECE5D6] border border-[#20201E]/10 ${aspectClassName} ${className}`}
    >
      {!hasError ? (
        <img
          src={src}
          alt={alt}
          loading="eager"
          fetchPriority={priority ? 'high' : 'low'}
          decoding="async"
          onError={() => setHasError(true)}
          className={`h-full w-full object-cover ${objectPositionClassName} transition-transform duration-700 ease-out`}
        />
      ) : (
        <div
          role="img"
          aria-label={alt}
          className="relative flex h-full w-full items-center justify-center bg-[#EDE6D6] p-6 text-center text-[#20201E]"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-4 border border-[#78806D]/25"
          />
          <p className="relative z-10 font-serif text-lg font-medium text-[#3D3D39]">
            {slotTitle}
          </p>
        </div>
      )}
    </div>
  );
}
