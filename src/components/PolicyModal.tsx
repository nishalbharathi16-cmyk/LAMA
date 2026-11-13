import { useEffect } from 'react';
import { X } from 'lucide-react';

export type PolicyType = 'privacy' | 'terms' | null;

interface PolicyModalProps {
  activePolicy: PolicyType;
  onClose: () => void;
}

export function PolicyModal({ activePolicy, onClose }: PolicyModalProps) {
  useEffect(() => {
    if (!activePolicy) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activePolicy, onClose]);

  if (!activePolicy) return null;

  const isPrivacy = activePolicy === 'privacy';

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="policy-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#20201E]/70 p-4"
      onClick={onClose}
    >
      <div
        className="max-h-[85vh] w-full max-w-2xl overflow-y-auto border border-[#20201E]/15 bg-[#F6F2E9] p-6 sm:p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 border-b border-[#20201E]/12 pb-4">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#C87549]">
              LAMA Academy Governance
            </span>
            <h2
              id="policy-modal-title"
              className="mt-1 font-serif text-2xl font-semibold text-[#20201E]"
            >
              {isPrivacy ? 'Privacy Policy' : 'Terms and Conditions'}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            className="border border-[#20201E]/20 bg-[#FFFFFF] p-2 text-[#20201E] transition-colors hover:border-[#C87549] hover:text-[#C87549]"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        <div className="mt-5 space-y-4 text-sm leading-relaxed text-[#3D3D39]">
          {isPrivacy ? (
            <>
              <div>
                <h4 className="font-serif text-base font-semibold text-[#20201E]">
                  1. Information We Collect
                </h4>
                <p className="mt-1.5">
                  LAMA &ndash; Leadership &amp; Managerial Skills Academy collects information
                  voluntarily submitted by prospective candidates through our enquiry forms,
                  including full name, email address, telephone number, current academic
                  qualification (final-year or graduating B.Tech/B.E. or MBA student), expected
                  graduation year, programme track interest, and any optional self-assessment notes.
                </p>
              </div>

              <div>
                <h4 className="font-serif text-base font-semibold text-[#20201E]">
                  2. Why We Collect This Information
                </h4>
                <p className="mt-1.5">
                  We use your details strictly to respond to your programme enquiries, provide
                  upcoming cohort briefing schedules, verify academic eligibility, and share
                  official admission announcements once dates and fees are finalised.
                </p>
              </div>

              <div>
                <h4 className="font-serif text-base font-semibold text-[#20201E]">
                  3. Data Storage &amp; Protection
                </h4>
                <p className="mt-1.5">
                  Candidate information is handled responsibly and reviewed only by authorised
                  admissions staff. We do not sell, rent, or distribute personal information to
                  third-party marketers or commercial databases.
                </p>
              </div>

              <div>
                <h4 className="font-serif text-base font-semibold text-[#20201E]">
                  4. Consent &amp; Your Choices
                </h4>
                <p className="mt-1.5">
                  Submitting an enquiry requires your affirmative consent. You may withdraw consent
                  or request the deletion of your enquiry details at any time by contacting our
                  admissions desk. Furthermore, any personalised communication analysis within
                  planned modules (such as AI Co-Pilot Coaching) is strictly opt-in and consent-governed.
                </p>
              </div>
            </>
          ) : (
            <>
              <div>
                <h4 className="font-serif text-base font-semibold text-[#20201E]">
                  1. Academic Information Purpose
                </h4>
                <p className="mt-1.5">
                  The material published on this website introduces the educational philosophy,
                  curriculum domains, and learning pedagogy of LAMA &ndash; Leadership &amp;
                  Managerial Skills Academy. It is provided for informational and preparatory
                  guidance.
                </p>
              </div>

              <div>
                <h4 className="font-serif text-base font-semibold text-[#20201E]">
                  2. Indicative Self-Assessment
                </h4>
                <p className="mt-1.5">
                  The Leadership Readiness Assessment is an indicative self-reflection exercise
                  intended to help learners evaluate their current managerial confidence. Assessment
                  scores do not guarantee admission or constitute a formal evaluation.
                </p>
              </div>

              <div>
                <h4 className="font-serif text-base font-semibold text-[#20201E]">
                  3. Programme Scope &amp; Career Outcomes
                </h4>
                <p className="mt-1.5">
                  LAMA develops applied managerial capabilities, business understanding, and leadership
                  readiness. The academy does not guarantee job placement, employment offers, salary
                  increases, or specific corporate roles upon completion.
                </p>
              </div>

              <div>
                <h4 className="font-serif text-base font-semibold text-[#20201E]">
                  4. Cohort Dates &amp; Fee Details
                </h4>
                <p className="mt-1.5">
                  Admissions criteria, tuition fee structures, batch schedules, and partner details
                  marked &ldquo;Coming Soon&rdquo; will be officially confirmed and published prior
                  to live cohort enrolment.
                </p>
              </div>
            </>
          )}
        </div>

        <div className="mt-7 flex justify-end border-t border-[#20201E]/12 pt-4">
          <button
            type="button"
            onClick={onClose}
            className="bg-[#20201E] px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-[#FFFFFF] transition-colors hover:bg-[#C87549]"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

