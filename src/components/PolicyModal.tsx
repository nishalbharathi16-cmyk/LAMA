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
              <p>
                LAMA &ndash; Leadership &amp; Managerial Skills Academy respects applicant
                and student privacy. This website currently validates enquiry inputs
                locally in your browser and does not transmit personal data to external
                servers until a verified backend service is connected.
              </p>
              <p>
                All audio or video-based executive communication coaching within the AI
                Co-Pilot Coaching module is strictly consent-based and governed by
                participant opt-in policies.
              </p>
              <p>
                Formal data protection disclosures and institutional privacy contact
                details will be published here prior to live cohort enrolment.
              </p>
            </>
          ) : (
            <>
              <p>
                Content on this website introduces the curriculum domains, experiential
                pedagogy, and admissions framework of LAMA &ndash; Leadership &amp;
                Managerial Skills Academy.
              </p>
              <p>
                Any self-assessment output from the Leadership Readiness Assessment is
                strictly indicative for personal reflection and does not represent an
                admission offer or selection decision.
              </p>
              <p>
                Programme schedules, tuition fees, cohort dates, and partner rosters
                marked &ldquo;Coming Soon&rdquo; are subject to official publication by
                the academy. Participation in the programme develops professional
                readiness and does not constitute a guarantee of employment.
              </p>
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

