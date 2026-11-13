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
                  Bridging Academic Knowledge to Executive Execution
                </h3>
                <div className="mt-4 space-y-4 text-base leading-relaxed text-[#3D3D39]">
                  <p>
                    LAMA &ndash; Leadership &amp; Managerial Skills Academy is an applied
                    finishing academy established to prepare final-year engineering (B.Tech/B.E.)
                    and MBA students for the genuine challenges of first-time management.
                  </p>
                  <p>
                    Higher education provides invaluable theoretical foundations, technical
                    mastery, and strategic frameworks. However, stepping into an organisational
                    role introduces an immediate shift: problems no longer have single correct
                    answers, timelines compete with resource constraints, and success depends on
                    mobilising cross-functional teams rather than individual performance alone.
                  </p>
                  <p>
                    LAMA bridges this transition gap through an intensive, practice-based learning
                    model. Across three core domains and four complementary learning pillars,
                    learners master practical decision-making under ambiguity, Profit &amp; Loss
                    (P&amp;L) literacy, responsible AI-enabled team operations, and composed
                    stakeholder communication.
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

