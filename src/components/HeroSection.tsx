import { ArrowRight, Compass, CheckCircle2 } from 'lucide-react';
import { ACADEMY_TAGLINE, HERO_INFO_STRIP } from '../data/academyData';
import { AcademyImage } from './AcademyImage';
import { Reveal } from './Reveal';

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-[#20201E]/10 bg-[#F6F2E9] pt-8 pb-12 sm:pt-12 sm:pb-16 lg:pt-16 lg:pb-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Editorial Copy Column */}
          <div className="lg:col-span-6">
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#C87549]" aria-hidden="true" />
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#78806D]">
                  LAMA &mdash; Leadership &amp; Managerial Skills Academy
                </span>
              </div>

              <h1 className="mt-5 font-serif text-4xl font-semibold leading-[1.08] tracking-tight text-[#20201E] sm:text-5xl lg:text-[3.4rem]">
                From Graduate to First-Time Manager
              </h1>

              <p className="mt-5 border-l-2 border-[#C87549] pl-4 font-serif text-lg italic leading-relaxed text-[#20201E]/90 sm:text-xl">
                {ACADEMY_TAGLINE}
              </p>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-[#3D3D39] sm:text-lg">
                LAMA is an applied finishing academy designed to help final-year engineering
                and MBA students bridge the gap between academic knowledge and real-world
                managerial responsibilities through practical learning, business simulations
                and leadership development.
              </p>

              <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center">
                <a
                  href="#curriculum"
                  className="inline-flex items-center justify-center gap-2.5 bg-[#20201E] px-7 py-3.5 text-sm font-semibold tracking-wide text-[#FFFFFF] transition-colors hover:bg-[#C87549]"
                >
                  Explore the Programme
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>

                <a
                  href="#readiness-assessment"
                  className="inline-flex items-center justify-center gap-2.5 border border-[#20201E]/30 bg-[#FFFFFF] px-6 py-3.5 text-sm font-semibold tracking-wide text-[#20201E] transition-colors hover:border-[#C87549] hover:text-[#C87549]"
                >
                  <Compass className="h-4 w-4 text-[#C87549]" aria-hidden="true" />
                  Assess Your Leadership Readiness
                </a>
              </div>
            </Reveal>
          </div>

          {/* Hero Visual Column */}
          <div className="lg:col-span-6">
            <Reveal delay={0.1}>
              <div className="relative">
                <div
                  aria-hidden="true"
                  className="hidden sm:block absolute -right-4 -bottom-4 h-full w-full border border-[#C87549]/35"
                />
                <AcademyImage
                  src="/images/hero-training.jpg"
                  alt="LAMA cohort participants in formal business attire alongside their mentor in front of a presentation slide and workshop boards"
                  slotTitle="Executive Training & Cohort Learning"
                  aspectClassName="aspect-[4/3]"
                  objectPositionClassName="object-[center_20%]"
                  className="relative z-10 shadow-[0_18px_45px_rgba(32,32,30,0.08)]"
                  priority
                />
              </div>
            </Reveal>
          </div>
        </div>

        {/* Information Strip */}
        <Reveal delay={0.15}>
          <div className="mt-14 border-t border-b border-[#20201E]/12 bg-[#FFFFFF] px-6 py-5 sm:px-8">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:divide-x md:divide-[#20201E]/12">
              {HERO_INFO_STRIP.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 md:px-6 first:md:pl-0 last:md:pr-0"
                >
                  <CheckCircle2
                    className="h-4 w-4 shrink-0 text-[#C87549]"
                    aria-hidden="true"
                  />
                  <span className="text-sm font-medium tracking-wide text-[#20201E]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

