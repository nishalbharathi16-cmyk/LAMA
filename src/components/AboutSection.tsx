import { AcademyImage } from './AcademyImage';
import { Reveal } from './Reveal';
import { SectionHeader } from './SectionHeader';

export function AboutSection() {
  return (
    <section
      id="about"
      className="border-b border-[#20201E]/10 bg-[#FFFFFF] py-14 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Photography Column */}
          <div className="lg:col-span-5">
            <Reveal>
              <AcademyImage
                src="/images/classroom-learning.jpg"
                alt="Academy instructor engaging seated students across seminar tables during a leadership workshop"
                slotTitle="Classroom Learning & Seminar Discussion"
                aspectClassName="aspect-[4/4.3]"
                objectPositionClassName="object-[center_20%]"
              />
              <div className="mt-5 border-l-2 border-[#78806D] pl-4">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#78806D]">
                  Executive Readiness Philosophy
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-[#3D3D39]">
                  Transitioning from individual academic assessment to organisational
                  ownership requires applied business judgement, financial fluency, and
                  composed people leadership.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Editorial Narrative Column */}
          <div className="lg:col-span-7">
            <Reveal delay={0.08}>
              <SectionHeader
                eyebrow="About the Academy"
                title="Building Tomorrow's Business Leaders."
              />

              <div className="mt-10 grid grid-cols-1 gap-8 border-t border-b border-[#20201E]/12 py-8 sm:grid-cols-2 sm:gap-10">
                <div className="border-l-2 border-[#C87549] pl-5">
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#C87549]">
                    Vision
                  </span>
                  <p className="mt-2.5 font-serif text-lg leading-relaxed text-[#20201E]">
                    To develop a generation of responsible, confident and capable
                    professionals ready to lead businesses and teams.
                  </p>
                </div>

                <div className="border-l-2 border-[#78806D] pl-5">
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#78806D]">
                    Mission
                  </span>
                  <p className="mt-2.5 font-serif text-lg leading-relaxed text-[#20201E]">
                    To bridge the gap between academic education and real-world
                    management through practical business learning, leadership development
                    and AI-enabled decision-making.
                  </p>
                </div>
              </div>

              {/* Industry Gap */}
              <div className="mt-8">
                <h3 className="font-serif text-2xl font-semibold text-[#20201E]">
                  Why Managerial Skills Matter for Engineering and MBA Graduates
                </h3>
                <div className="mt-4 space-y-4 text-base leading-relaxed text-[#3D3D39]">
                  <p>
                    Universities excel at teaching foundational engineering principles and
                    theoretical management frameworks. Yet the moment a graduate steps
                    into a first-time managerial or cross-functional role, the demands
                    of daily execution change fundamentally.
                  </p>
                  <p>
                    Instead of isolated assignments with fixed answers, new managers face
                    ambiguous trade-offs: aligning engineering delivery with commercial
                    commitments, reading financial statements and operating budgets,
                    resolving cross-team friction, governing AI-assisted workflows, and
                    leading calmly when client or product issues arise.
                  </p>
                  <p>
                    LAMA &ndash; Leadership &amp; Managerial Skills Academy exists to
                    close this transition gap before day one on the job&mdash;building
                    structured operational habits, financial clarity, and executive
                    communication.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

