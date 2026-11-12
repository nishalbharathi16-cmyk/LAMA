import { Check, Info } from 'lucide-react';
import { OUTCOME_ITEMS, PARTNER_ANNOUNCEMENT } from '../data/academyData';
import { Reveal } from './Reveal';
import { SectionHeader } from './SectionHeader';

export function OutcomesSection() {
  return (
    <section
      id="outcomes"
      className="border-b border-[#20201E]/10 bg-[#FFFFFF] py-14 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <Reveal>
            <SectionHeader
              eyebrow="Expected Programme Learning Outcomes"
              title="Prepare for the Responsibilities Ahead."
              description="LAMA builds durable managerial judgement and workplace readiness—preparing graduates to contribute credibly in their first leadership and cross-functional roles."
            />
          </Reveal>

          <Reveal delay={0.05}>
            <p className="max-w-sm border-l-2 border-[#78806D] pl-4 text-xs leading-relaxed text-[#3D3D39]">
              <strong className="font-semibold text-[#20201E]">
                Outcomes Distinction:{' '}
              </strong>
              The capabilities below describe intended learning outcomes of the
              curriculum and are not claimed as verified placement statistics.
            </p>
          </Reveal>
        </div>

        {/* Clean 2x2 Hairline Matrix (replaces repetitive identical cards) */}
        <div className="mt-12 grid grid-cols-1 border-t border-l border-[#20201E]/12 md:grid-cols-2">
          {OUTCOME_ITEMS.map((item, idx) => (
            <Reveal key={item.title} delay={idx * 0.05}>
              <article className="flex h-full flex-col justify-between border-r border-b border-[#20201E]/12 bg-[#FFFFFF] p-7 sm:p-9">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#C87549]">
                    Expected Outcome 0{idx + 1}
                  </span>
                  <h3 className="mt-2 font-serif text-2xl font-semibold leading-snug text-[#20201E]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#3D3D39] sm:text-base">
                    {item.summary}
                  </p>
                </div>

                <ul className="mt-6 space-y-2.5 border-t border-[#20201E]/10 pt-5">
                  {item.capabilities.map((cap) => (
                    <li
                      key={cap}
                      className="flex items-start gap-2.5 text-sm leading-relaxed text-[#20201E]"
                    >
                      <Check
                        className="mt-1 h-4 w-4 shrink-0 text-[#78806D]"
                        aria-hidden="true"
                      />
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Industry & Placement Partners — Single Clean Editorial Announcement */}
        <Reveal delay={0.08}>
          <div className="mt-14 border border-[#20201E]/12 bg-[#F6F2E9] p-7 sm:p-10">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-8">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#78806D]">
                    Ecosystem &amp; Collaborations
                  </span>
                  <span className="border border-[#C87549]/40 bg-[#FFFFFF] px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#C87549]">
                    {PARTNER_ANNOUNCEMENT.status}
                  </span>
                </div>
                <h3 className="mt-2 font-serif text-2xl font-semibold text-[#20201E] sm:text-3xl">
                  {PARTNER_ANNOUNCEMENT.title}
                </h3>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#3D3D39] sm:text-base">
                  {PARTNER_ANNOUNCEMENT.description}
                </p>
              </div>

              <div className="lg:col-span-4 flex items-start gap-3 border border-[#78806D]/30 bg-[#FFFFFF] p-5 text-xs leading-relaxed text-[#20201E]">
                <Info
                  className="mt-0.5 h-4 w-4 shrink-0 text-[#C87549]"
                  aria-hidden="true"
                />
                <span>
                  LAMA focuses on practical leadership and managerial readiness and does
                  not promise guaranteed employment or placements.
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
