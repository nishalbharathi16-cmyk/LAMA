import { useRef, useState } from 'react';
import { Play, Volume2 } from 'lucide-react';

interface AcademyVideoPlayerProps {
  src: string;
  posterSrc?: string;
  title: string;
  subtitle?: string;
  badge?: string;
  aspectClassName?: string;
  className?: string;
}

export function AcademyVideoPlayer({
  src,
  posterSrc = '/images/classroom-learning.jpg',
  title,
  subtitle,
  badge = 'Live Academy Session',
  aspectClassName = 'aspect-video',
  className = '',
}: AcademyVideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current
        .play()
        .then(() => {
          setHasStarted(true);
        })
        .catch(() => {
          // Fallback if browser blocks unmuted playback
          if (videoRef.current) {
            videoRef.current.muted = true;
            videoRef.current.play();
            setHasStarted(true);
          }
        });
    } else {
      videoRef.current.pause();
    }
  };

  return (
    <div
      className={`group relative overflow-hidden border border-[#20201E]/15 bg-[#1B1B19] shadow-[0_12px_36px_rgba(32,32,30,0.08)] ${className}`}
    >
      <div className={`relative w-full ${aspectClassName}`}>
        <video
          ref={videoRef}
          src={src}
          poster={posterSrc}
          controls={hasStarted}
          playsInline
          preload="metadata"
          className="h-full w-full object-cover"
        />

        {/* Custom Executive Overlay before playback */}
        {!hasStarted && (
          <div
            onClick={togglePlay}
            className="absolute inset-0 flex cursor-pointer flex-col justify-between bg-gradient-to-t from-[#20201E]/90 via-[#20201E]/30 to-transparent p-5 sm:p-7 transition-opacity hover:from-[#20201E]/95"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                togglePlay();
              }
            }}
            aria-label={`Play video: ${title}`}
          >
            {/* Top Badge */}
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 border border-[#F6F2E9]/20 bg-[#20201E]/80 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#F6F2E9] backdrop-blur-xs">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C87549]" />
                {badge}
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] font-medium text-[#F6F2E9]/75">
                <Volume2 className="h-3.5 w-3.5 text-[#C87549]" />
                Audio Enabled
              </span>
            </div>

            {/* Center Play Button */}
            <div className="flex items-center justify-center">
              <span className="flex h-16 w-16 sm:h-18 sm:w-18 items-center justify-center rounded-full bg-[#C87549] text-[#FFFFFF] shadow-[0_0_30px_rgba(200,117,73,0.45)] transition-transform duration-300 group-hover:scale-110 active:scale-95">
                <Play className="ml-1 h-7 w-7 fill-current sm:h-8 sm:w-8" aria-hidden="true" />
              </span>
            </div>

            {/* Bottom Caption */}
            <div>
              <p className="font-serif text-lg font-semibold text-[#FFFFFF] sm:text-xl">
                {title}
              </p>
              {subtitle && (
                <p className="mt-1 text-xs text-[#F6F2E9]/80 sm:text-sm">
                  {subtitle}
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
