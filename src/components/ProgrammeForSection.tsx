import { ArrowRight } from 'lucide-react';
import { AcademyImage } from './AcademyImage';
import { Reveal } from './Reveal';

const TRACKS = [
  {
    id: 'engineering-graduates',
    title: 'Final-Year & Graduating B.Tech / B.E. Students',
    audience: 'Engineering Leadership Pathway',
    description:
      'Designed for final-year and graduating B.Tech/B.E. students who want to translate deep technical competence into commercial fluency, disciplined operational execution, and cross-functional team leadership.',
    highlights: [
      'Technical-to-executive communication',
      'Profit & Loss (P&L), unit economics & operating budgets',
      'Agile delivery cadences & cross-functional alignment',
    ],
    imageSrc: '/images/engineering-graduates.jpg',
    imageAlt: 'Engineering and management students discussing strategy with a faculty facilitator in an interactive workshop room',
    slotTitle: 'Engineering Cohort',
  },
  {
    id: 'mba-graduates',
    title: 'Current & Graduating MBA Students',
    audience: 'Business Management Pathway',
    description:
      'Designed for current and graduating MBA students who want to bridge academic business frameworks into practical execution, high-stakes negotiation, crisis control, and people management.',
    highlights: [
      'AI-powered leadership & governance guardrails',
      'Principled negotiation & enterprise client dynamics',
      'Crisis response & operational friction control',
    ],
    imageSrc: '/images/mba-graduates.jpg',
    imageAlt: 'Executive trainer guiding an interactive business seminar with presentation slides and participant discussion',
    slotTitle: 'MBA Cohort',
  },
];

export function ProgrammeForSection() {
  return (
    <section
      id="programme"
      className="border-b border-[#20201E]/10 bg-[#F6F2E9] py-14 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-12">
          {/* Left Sticky Editorial Column (ILSS-inspired composition) */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C87549]">
                Cohort Eligibility &amp; Pathways
              </span>
              <h2 className="mt-3 font-serif text-3xl font-semibold leading-[1.14] text-[#20201E] sm:text-4xl">
                Who Is This Programme For?
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[#3D3D39]">
                The shift from university lecture halls to managerial responsibility is
                one of the steepest transitions in a professional career. Whether your
                foundation is engineering or business administration, stepping into
                leadership requires learning how organisations actually make decisions,
                allocate capital, and align people under pressure.
              </p>
              <p className="mt-4 text-base leading-relaxed text-[#3D3D39]">
                LAMA brings both cohorts together so engineering students build commercial
                command and MBA students sharpen technical and operational execution.
              </p>

              <div className="mt-8">
                <a
                  href="#admissions"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#20201E] border-b border-[#C87549] pb-1 transition-colors hover:text-[#C87549]"
                >
                  View Eligibility &amp; Admissions Overview
                  <ArrowRight className="h-4 w-4 text-[#C87549]" aria-hidden="true" />
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right Two Large Warm-Beige Photographic Cards */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {TRACKS.map((track, idx) => (
                <Reveal key={track.id} delay={idx * 0.08}>
                  <article className="flex h-full flex-col border border-[#20201E]/12 bg-[#EFE9DC] transition-shadow duration-300 hover:shadow-[0_14px_34px_rgba(32,32,30,0.07)]">
                    <AcademyImage
                      src={track.imageSrc}
                      alt={track.imageAlt}
                      slotTitle={track.slotTitle}
                      aspectClassName="aspect-[16/11]"
                      objectPositionClassName="object-[center_22%]"
                      className="border-0 border-b border-[#20201E]/10"
                    />

                    <div className="flex flex-1 flex-col justify-between p-7 sm:p-8">
                      <div>
                        <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#78806D]">
                          {track.audience}
                        </span>
                        <h3 className="mt-2 font-serif text-2xl font-semibold text-[#C87549] sm:text-[1.7rem]">
                          {track.title}
                        </h3>
                        <p className="mt-4 text-base leading-relaxed text-[#20201E]/90">
                          {track.description}
                        </p>
                      </div>

                      <ul className="mt-6 space-y-2 border-t border-[#20201E]/10 pt-5">
                        {track.highlights.map((point) => (
                          <li
                            key={point}
                            className="flex items-start gap-2.5 text-sm text-[#3D3D39]"
                          >
                            <span
                              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C87549]"
                              aria-hidden="true"
                            />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

