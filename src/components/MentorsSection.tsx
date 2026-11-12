import { ArrowRight } from 'lucide-react';
import { MENTOR_SLOTS } from '../data/academyData';
import { AcademyImage } from './AcademyImage';
import { Reveal } from './Reveal';
import { SectionHeader } from './SectionHeader';

export function MentorsSection() {
  return (
    <section
      id="mentors"
      className="border-b border-[#20201E]/10 bg-[#20201E] py-14 text-[#F6F2E9] sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
          {/* Editorial Announcement Column */}
          <div className="lg:col-span-6">
            <Reveal>
              <SectionHeader
                eyebrow="Mentors &amp; Industry Executive Coaches"
                title="Learn From Industry Experience."
                light
              />

              <div className="mt-7 border-l-2 border-[#C87549] pl-5">
                <p className="font-serif text-xl font-medium leading-snug text-[#FFFFFF] sm:text-2xl">
                  Meet Our Leadership Mentors &ndash; Mentor profiles will be announced
                  soon.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[#F6F2E9]/80 sm:text-base">
                  LAMA &ndash; Leadership &amp; Managerial Skills Academy brings
                  practitioner-led perspectives into the classroom across AI-enabled
                  technology operations, strategic P&amp;L execution, and cross-functional
                  people leadership. Official mentor biographies and designations will be
                  published once cohort rosters are confirmed.
                </p>
              </div>

              <div className="mt-8">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 border border-[#F6F2E9]/30 px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#FFFFFF] transition-colors hover:border-[#C87549] hover:bg-[#C87549]"
                >
                  Register for Cohort Announcements
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </Reveal>
          </div>

          {/* Curated Executive Seminar Photography Strip (No repetitive placeholder cards) */}
          <div className="lg:col-span-6">
            <Reveal delay={0.08}>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <AcademyImage
                  src={MENTOR_SLOTS[0].imageSrc}
                  alt={MENTOR_SLOTS[0].imageAlt}
                  slotTitle="Executive Seminar Session"
                  aspectClassName="aspect-[16/10] sm:col-span-2"
                  objectPositionClassName="object-[center_22%]"
                  className="border-[#F6F2E9]/16"
                />
                <AcademyImage
                  src={MENTOR_SLOTS[1].imageSrc}
                  alt={MENTOR_SLOTS[1].imageAlt}
                  slotTitle="Leadership Coaching Dialogue"
                  aspectClassName="aspect-[4/3]"
                  objectPositionClassName="object-[center_20%]"
                  className="border-[#F6F2E9]/16"
                />
                <AcademyImage
                  src={MENTOR_SLOTS[2].imageSrc}
                  alt={MENTOR_SLOTS[2].imageAlt}
                  slotTitle="Practitioner Discussion"
                  aspectClassName="aspect-[4/3]"
                  objectPositionClassName="object-[center_20%]"
                  className="border-[#F6F2E9]/16"
                />
              </div>
              <p className="mt-3 text-xs text-[#F6F2E9]/65">
                Representative executive seminar and mentoring discussions; individual
                faculty profiles will be published upon official confirmation.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
