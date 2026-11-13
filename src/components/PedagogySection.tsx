import { ShieldAlert, Sparkles, Briefcase, Compass, Lock, ArrowRight } from 'lucide-react';
import { GALLERY_SLOTS } from '../data/academyData';
import { AcademyImage } from './AcademyImage';
import { Reveal } from './Reveal';
import { SectionHeader } from './SectionHeader';

export function PedagogySection() {
  return (
    <section
      id="learning-experience"
      className="border-b border-[#20201E]/10 bg-[#F6F2E9] py-14 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader
            eyebrow="Four Complementary Learning Pillars"
            title="Practical Learning Beyond the Classroom."
            description="Our three core learning domains are delivered through four complementary learning pillars designed to develop practical leadership, decision-making, and workplace execution."
          />
        </Reveal>

        {/* A. Featured War Room Simulation Showcase */}
        <Reveal delay={0.05}>
          <div
            id="war-room"
            className="mt-12 scroll-mt-24 border border-[#20201E]/14 bg-[#20201E] text-[#F6F2E9]"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="p-7 sm:p-10 lg:col-span-7 lg:border-r lg:border-[#F6F2E9]/12">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center bg-[#C87549] font-serif text-sm font-semibold text-[#FFFFFF]">
                    A
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C87549]">
                    Pillar A &bull; Practical Decision Environment
                  </span>
                </div>

                <h3 className="mt-5 font-serif text-2xl font-semibold text-[#FFFFFF] sm:text-3xl">
                  War Room Simulations
                </h3>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#F6F2E9]/85">
                  Live four-hour simulated business crises where students respond to
                  product failures, operational challenges, and PR issues using
                  simulated dashboard briefings and structured management roles.
                </p>

                <p className="mt-4 text-xs leading-relaxed text-[#F6F2E9]/65">
                  Delivered as a facilitated cohort exercise in class rather than an
                  automated self-serve online game.
                </p>

                <div className="mt-7">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 bg-[#C87549] px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#FFFFFF] transition-colors hover:bg-[#AD5E34]"
                  >
                    Register Your Interest
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </div>

              <div className="border-t border-[#F6F2E9]/12 bg-[#2A2A27] p-7 sm:p-10 lg:col-span-5 lg:border-t-0">
                <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#F6F2E9]/80">
                  <ShieldAlert className="h-4 w-4 text-[#C87549]" aria-hidden="true" />
                  <span>Simulation Format &amp; Focus</span>
                </div>
                <ul className="mt-5 divide-y divide-[#F6F2E9]/12 text-sm">
                  <li className="py-3.5 first:pt-0">
                    <p className="font-semibold text-[#FFFFFF]">
                      1. Operational &amp; Product Escalations
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-[#F6F2E9]/75">
                      Assess simulated service metrics, diagnose root causes, and allocate
                      cross-functional ownership under time pressure.
                    </p>
                  </li>
                  <li className="py-3.5">
                    <p className="font-semibold text-[#FFFFFF]">
                      2. Financial &amp; Client Trade-Offs
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-[#F6F2E9]/75">
                      Weigh SLA commitments, operating costs, and stakeholder trust before
                      committing to a turnaround plan.
                    </p>
                  </li>
                  <li className="py-3.5 last:pb-0">
                    <p className="font-semibold text-[#FFFFFF]">
                      3. Executive &amp; PR Briefings
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-[#F6F2E9]/75">
                      Deliver concise internal updates and external response statements
                      reviewed by faculty facilitators.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Reveal>

        {/* B. AI Co-Pilot Coaching — Clean Business-Oriented Editorial Split */}
        <Reveal delay={0.07}>
          <div
            id="ai-copilot"
            className="mt-8 scroll-mt-24 border border-[#20201E]/12 bg-[#FFFFFF] p-7 sm:p-10"
          >
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center border border-[#20201E] bg-[#F6F2E9] font-serif text-sm font-semibold text-[#20201E]">
                    B
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#78806D]">
                    Pillar B &bull; Communication &amp; AI-Enabled Practice
                  </span>
                </div>

                <h3 className="mt-4 font-serif text-2xl font-semibold text-[#20201E]">
                  AI Co-Pilot Coaching
                </h3>
                <p className="mt-3 text-base leading-relaxed text-[#3D3D39]">
                  Designed to support personalised feedback on executive communication,
                  presentation clarity, speech pacing, and structured negotiation
                  rehearsals&mdash;reinforcing human faculty coaching rather than
                  replacing managerial judgement.
                </p>
              </div>

              <div className="lg:col-span-5 border-t border-[#20201E]/10 pt-6 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#C87549]">
                  <Sparkles className="h-4 w-4" aria-hidden="true" />
                  <span>Scope &amp; Consent Governance</span>
                </div>
                <p className="mt-2.5 text-sm leading-relaxed text-[#3D3D39]">
                  The AI Co-Pilot Coaching workflow is a planned programme component
                  integrated into guided cohort workshops. It is not active on this
                  public information site.
                </p>
                <div className="mt-4 flex items-start gap-2.5 bg-[#F6F2E9] px-4 py-3 text-xs leading-relaxed text-[#20201E]">
                  <Lock
                    className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#78806D]"
                    aria-hidden="true"
                  />
                  <span>
                    Any audio or video-based communication analysis within the academy is
                    strictly consent-based and opt-in.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* C & D. Supporting Practice Pillars (Asymmetric Editorial Row) */}
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
          <Reveal delay={0.08}>
            <article className="flex h-full flex-col justify-between border-t-2 border-[#C87549] bg-[#FFFFFF] p-7 sm:p-8 shadow-[0_1px_0_rgba(32,32,30,0.08)]">
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#78806D]">
                      Pillar C &bull; Applied Practice
                    </span>
                    <span className="border border-[#C87549]/40 bg-[#C87549]/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#C87549]">
                      Coming Soon
                    </span>
                  </div>
                  <Briefcase className="h-5 w-5 text-[#C87549]" aria-hidden="true" />
                </div>
                <h3 className="mt-4 font-serif text-2xl font-semibold text-[#20201E]">
                  Industry Capstone Projects
                </h3>
                <p className="mt-3 text-base leading-relaxed text-[#3D3D39]">
                  Planned applied capstone projects will enable learners to tackle real-world
                  business operations, financial framing, and cross-functional problem-solving
                  under practitioner guidance. Official project specifications and collaborators
                  will be announced ahead of cohort launches.
                </p>
              </div>
            </article>
          </Reveal>

          <Reveal delay={0.1}>
            <article className="flex h-full flex-col justify-between border-t-2 border-[#78806D] bg-[#FFFFFF] p-7 sm:p-8 shadow-[0_1px_0_rgba(32,32,30,0.08)]">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#78806D]">
                    Pillar D &bull; Cohort Method
                  </span>
                  <Compass className="h-5 w-5 text-[#78806D]" aria-hidden="true" />
                </div>
                <h3 className="mt-4 font-serif text-2xl font-semibold text-[#20201E]">
                  Experiential Learning
                </h3>
                <p className="mt-3 text-base leading-relaxed text-[#3D3D39]">
                  Structured case discussions, stakeholder role-playing, team-based negotiation
                  exercises, and live debriefs designed to translate business and management
                  concepts into repeatable professional instincts.
                </p>
              </div>
            </article>
          </Reveal>
        </div>

        {/* Academy Training & Workshop Gallery */}
        <div className="mt-14 border-t border-[#20201E]/12 pt-12">
          <Reveal>
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#78806D]">
                  Inside the Academy
                </span>
                <h3 className="mt-2 font-serif text-2xl font-semibold text-[#20201E] sm:text-3xl">
                  Workshops, Team Activities &amp; Cohort Gallery
                </h3>
              </div>
              <p className="max-w-md text-sm text-[#3D3D39]">
                Visual documentation from workshops, plenary briefings, and cohort
                learning discussions.
              </p>
            </div>
          </Reveal>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {GALLERY_SLOTS.map((slot, idx) => (
              <Reveal key={slot.id} delay={idx * 0.05}>
                <figure className="flex h-full flex-col border border-[#20201E]/10 bg-[#FFFFFF]">
                  <AcademyImage
                    src={slot.src}
                    alt={slot.alt}
                    slotTitle={slot.title}
                    aspectClassName="aspect-[4/3]"
                    objectPositionClassName="object-[center_20%]"
                    className="border-0 border-b border-[#20201E]/10"
                  />
                  <figcaption className="flex flex-1 flex-col p-5">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#C87549]">
                      {slot.category}
                    </span>
                    <p className="mt-1 font-serif text-base font-semibold text-[#20201E]">
                      {slot.title}
                    </p>
                    <p className="mt-1.5 text-xs leading-relaxed text-[#3D3D39]">
                      {slot.caption}
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
