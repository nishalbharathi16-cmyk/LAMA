import { ArrowRight, CalendarClock, FileText, GraduationCap, IndianRupee, Layers } from 'lucide-react';
import { ADMISSIONS_DETAILS } from '../data/academyData';
import { Reveal } from './Reveal';
import { SectionHeader } from './SectionHeader';

const ITEM_ICONS = [GraduationCap, Layers, CalendarClock, FileText, IndianRupee];

interface AdmissionsSectionProps {
  onEnquireClick: () => void;
}

export function AdmissionsSection({ onEnquireClick }: AdmissionsSectionProps) {
  return (
    <section
      id="admissions"
      className="border-b border-[#20201E]/10 bg-[#F6F2E9] py-14 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionHeader
                eyebrow="Admissions &amp; Programme Details"
                title="Your Leadership Journey Starts Here."
                description="Cohort schedules, tuition details, and formal selection guidelines are published ahead of each academic intake. Prospective engineering and MBA candidates can register interest below."
              />

              <div className="mt-8 border border-[#20201E]/12 bg-[#FFFFFF] p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#78806D]">
                  How Admissions Work
                </p>
                <ol className="mt-4 space-y-2.5 text-sm text-[#3D3D39]">
                  <li>
                    <strong className="font-semibold text-[#20201E]">1. Review Pathways:</strong>{' '}
                    Explore the Engineering or MBA track and complete the self-assessment.
                  </li>
                  <li>
                    <strong className="font-semibold text-[#20201E]">2. Register Interest:</strong>{' '}
                    Record your details in the student enquiry form below.
                  </li>
                  <li>
                    <strong className="font-semibold text-[#20201E]">3. Cohort Confirmation:</strong>{' '}
                    Cohort dates, fee schedules, and selection steps are marked{' '}
                    <strong className="font-semibold text-[#20201E]">Coming Soon</strong>{' '}
                    until formally published.
                  </li>
                </ol>

                <button
                  type="button"
                  onClick={onEnquireClick}
                  className="mt-6 inline-flex w-full sm:w-auto items-center justify-center gap-2.5 bg-[#C87549] px-6 py-3.5 text-sm font-semibold tracking-wide text-[#FFFFFF] transition-colors hover:bg-[#AD5E34]"
                >
                  Register Your Interest
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <div className="divide-y divide-[#20201E]/12 border border-[#20201E]/12 bg-[#FFFFFF]">
              {ADMISSIONS_DETAILS.map((item, idx) => {
                const Icon = ITEM_ICONS[idx] ?? FileText;
                return (
                  <Reveal key={item.label} delay={idx * 0.05}>
                    <div className="flex flex-col gap-3 p-6 sm:flex-row sm:items-start sm:gap-6 sm:p-7">
                      <div className="flex items-center gap-3 sm:w-52 sm:shrink-0">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-[#20201E]/12 bg-[#F6F2E9] text-[#C87549]">
                          <Icon className="h-4 w-4" aria-hidden="true" />
                        </span>
                        <h3 className="font-serif text-lg font-semibold text-[#20201E]">
                          {item.label}
                        </h3>
                      </div>
                      <p className="text-sm leading-relaxed text-[#3D3D39] sm:text-base">
                        {item.value}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

