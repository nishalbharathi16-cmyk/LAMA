interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'left',
  light = false,
}: SectionHeaderProps) {
  const alignClasses = align === 'center' ? 'mx-auto text-center items-center' : 'text-left items-start';
  const titleColor = light ? 'text-[#FFFFFF]' : 'text-[#20201E]';
  const descColor = light ? 'text-[#F6F2E9]/85' : 'text-[#3D3D39]';
  const eyebrowColor = light ? 'text-[#C87549]' : 'text-[#C87549]';

  return (
    <div className={`flex flex-col max-w-3xl ${alignClasses}`}>
      <span
        className={`text-xs font-semibold uppercase tracking-[0.2em] ${eyebrowColor}`}
      >
        {eyebrow}
      </span>
      <h2
        className={`mt-3 font-serif text-3xl font-semibold leading-[1.16] tracking-tight sm:text-4xl lg:text-[2.65rem] ${titleColor}`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base leading-relaxed sm:text-lg ${descColor}`}>
          {description}
        </p>
      )}
    </div>
  );
}

