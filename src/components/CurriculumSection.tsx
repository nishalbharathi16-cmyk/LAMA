import { useState } from 'react';
import { ChevronDown, Cpu, LineChart, Users } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { CURRICULUM_DOMAINS } from '../data/academyData';
import { SectionHeader } from './SectionHeader';
import { Reveal } from './Reveal';

const DOMAIN_ICONS = [Cpu, LineChart, Users];

export function CurriculumSection() {
  const [openDomains, setOpenDomains] = useState<string[]>(['domain-01']);
  const prefersReducedMotion = useReducedMotion();

  const toggleDomain = (id: string) => {
    setOpenDomains((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const allExpanded = openDomains.length === CURRICULUM_DOMAINS.length;

  const handleToggleAll = () => {
    if (allExpanded) {
      setOpenDomains([]);
    } else {
      setOpenDomains(CURRICULUM_DOMAINS.map((d) => d.id));
    }
  };

  return (
    <section
      id="curriculum"
      className="border-b border-[#20201E]/10 bg-[#FFFFFF] py-14 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <Reveal>
            <SectionHeader
              eyebrow="Three Core Learning Domains"
              title="Develop the Capabilities That Modern Managers Need."
              description="Three integrated learning domains uniting AI-powered operational leadership, financial and Profit & Loss (P&L) fluency, and high-trust people management."
            />
          </Reveal>

          <Reveal delay={0.05}>
            <button
              type="button"
              onClick={handleToggleAll}
              className="self-start md:self-auto border border-[#20201E]/25 bg-[#F6F2E9] px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#20201E] transition-colors hover:border-[#C87549] hover:text-[#C87549]"
            >
              {allExpanded ? 'Collapse All Domains' : 'Expand All Domains'}
            </button>
          </Reveal>
        </div>

        <div className="mt-12 space-y-6">
          {CURRICULUM_DOMAINS.map((domain, index) => {
            const isOpen = openDomains.includes(domain.id);
            const Icon = DOMAIN_ICONS[index] ?? Cpu;
            const panelId = `${domain.id}-panel`;
            const buttonId = `${domain.id}-button`;

            return (
              <Reveal key={domain.id} delay={index * 0.05}>
                <div className="border border-[#20201E]/12 bg-[#F6F2E9]">
                  <h3>
                    <button
                      id={buttonId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => toggleDomain(domain.id)}
                      className="flex w-full items-start justify-between gap-4 p-6 text-left transition-colors hover:bg-[#EFE9DC] sm:p-8"
                    >
                      <div className="flex items-start gap-4 sm:gap-6">
                        <div className="hidden sm:flex h-12 w-12 shrink-0 items-center justify-center border border-[#C87549]/35 bg-[#FFFFFF] text-[#C87549]">
                          <Icon className="h-5 w-5" aria-hidden="true" />
                        </div>

                        <div>
                          <div className="flex flex-wrap items-center gap-3">
                            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C87549]">
                              {domain.code}
                            </span>
                            <span className="text-xs font-medium text-[#78806D]">
                              &bull; {domain.topics.length} Core Modules
                            </span>
                          </div>
                          <span className="mt-1.5 block font-serif text-xl font-semibold text-[#20201E] sm:text-2xl">
                            {domain.title}
                          </span>
                          <span className="mt-1.5 block text-sm text-[#3D3D39]">
                            {domain.subtitle}
                          </span>
                        </div>
                      </div>

                      <span
                        className={`mt-1 flex h-9 w-9 shrink-0 items-center justify-center border border-[#20201E]/15 bg-[#FFFFFF] transition-transform duration-300 ${
                          isOpen ? 'rotate-180 border-[#C87549] text-[#C87549]' : 'text-[#20201E]'
                        }`}
                      >
                        <ChevronDown className="h-4 w-4" aria-hidden="true" />
                      </span>
                    </button>
                  </h3>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={panelId}
                        role="region"
                        aria-labelledby={buttonId}
                        initial={prefersReducedMotion ? false : { height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={prefersReducedMotion ? undefined : { height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden border-t border-[#20201E]/10 bg-[#FFFFFF]"
                      >
                        <div className="p-6 sm:p-8">
                          <div className="border-l-2 border-[#C87549] pl-4">
                            <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#78806D]">
                              Learning Objective
                            </span>
                            <p className="mt-1 max-w-3xl text-sm leading-relaxed text-[#3D3D39] sm:text-base">
                              {domain.summary}
                            </p>
                          </div>

                          <div className="mt-7 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                            {domain.topics.map((topic, topicIdx) => (
                              <div
                                key={topic.title}
                                className="flex flex-col justify-between border border-[#20201E]/10 bg-[#F6F2E9]/70 p-5"
                              >
                                <div>
                                  <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#78806D]">
                                    Topic {String(topicIdx + 1).padStart(2, '0')}
                                  </span>
                                  <h4 className="mt-2 font-serif text-lg font-semibold leading-snug text-[#20201E]">
                                    {topic.title}
                                  </h4>
                                  <p className="mt-2.5 text-sm leading-relaxed text-[#3D3D39]">
                                    {topic.description}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

