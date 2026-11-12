import { useEffect, useState, type FormEvent } from 'react';
import {
  AlertCircle,
  Building,
  Calendar,
  Check,
  Copy,
  Info,
  Laptop,
  Loader2,
  ShieldCheck,
} from 'lucide-react';
import { Reveal } from './Reveal';
import { SectionHeader } from './SectionHeader';

export interface EnquiryFormData {
  name: string;
  email: string;
  phone: string;
  qualification: string;
  graduationYear: string;
  programmeInterest: string;
  readinessContext: string;
  consent: boolean;
}

interface ContactSectionProps {
  prefillReadinessNote?: string;
}

type FormErrors = Partial<Record<keyof EnquiryFormData, string>>;

type SubmissionMode = 'idle' | 'local-prepared' | 'remote-delivered' | 'remote-error';

const INITIAL_FORM: EnquiryFormData = {
  name: '',
  email: '',
  phone: '',
  qualification: '',
  graduationYear: '',
  programmeInterest: '',
  readinessContext: '',
  consent: false,
};

const FIELD_INPUT_IDS: Partial<Record<keyof EnquiryFormData, string>> = {
  name: 'enquiry-name',
  email: 'enquiry-email',
  phone: 'enquiry-phone',
  qualification: 'enquiry-qualification',
  graduationYear: 'enquiry-year',
  programmeInterest: 'enquiry-interest',
  consent: 'enquiry-consent',
};

const QUALIFICATIONS = [
  'Final-Year B.Tech / B.E. Engineering',
  'Graduating / Recent B.Tech / B.E. Engineering',
  'Current MBA Student',
  'Graduating / Recent MBA Graduate',
  'Other Undergraduate / Postgraduate Degree',
];

const GRADUATION_YEARS = ['2025', '2026', '2027', '2028', 'Earlier'];

const PROGRAMME_INTERESTS = [
  'Engineering Graduates Leadership Track',
  'MBA Graduates Management Track',
  'General Programme & Curriculum Enquiry',
  'Campus / Institutional Collaboration',
];

export function ContactSection({ prefillReadinessNote }: ContactSectionProps) {
  const [form, setForm] = useState<EnquiryFormData>(INITIAL_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionMode, setSubmissionMode] = useState<SubmissionMode>('idle');
  const [submissionErrorMsg, setSubmissionErrorMsg] = useState<string>('');
  const [validatedRecord, setValidatedRecord] = useState<EnquiryFormData | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (prefillReadinessNote) {
      setForm((prev) => ({
        ...prev,
        readinessContext: prefillReadinessNote,
      }));
      setValidatedRecord(null);
      setSubmissionMode('idle');
    }
  }, [prefillReadinessNote]);

  const validate = (data: EnquiryFormData): FormErrors => {
    const nextErrors: FormErrors = {};

    if (!data.name.trim() || data.name.trim().length < 2) {
      nextErrors.name = 'Please enter your full name (at least 2 characters).';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email.trim() || !emailRegex.test(data.email.trim())) {
      nextErrors.email = 'Please enter a valid email address.';
    }

    const digitsOnly = data.phone.replace(/[^\d]/g, '');
    if (!data.phone.trim() || digitsOnly.length < 7 || digitsOnly.length > 15) {
      nextErrors.phone = 'Please enter a valid phone number (7 to 15 digits).';
    }

    if (!data.qualification) {
      nextErrors.qualification = 'Please select your current qualification.';
    }

    if (!data.graduationYear) {
      nextErrors.graduationYear = 'Please select your graduation year.';
    }

    if (!data.programmeInterest) {
      nextErrors.programmeInterest = 'Please select your area of programme interest.';
    }

    if (!data.consent) {
      nextErrors.consent =
        'Please confirm consent so your enquiry details can be reviewed once connected.';
    }

    return nextErrors;
  };

  const handleFieldChange = <K extends keyof EnquiryFormData>(
    field: K,
    value: EnquiryFormData[K],
  ) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[field];
        return updated;
      });
    }
  };

  const focusFirstInvalidField = (validationErrors: FormErrors) => {
    const orderedKeys: (keyof EnquiryFormData)[] = [
      'name',
      'email',
      'phone',
      'qualification',
      'graduationYear',
      'programmeInterest',
      'consent',
    ];
    for (const key of orderedKeys) {
      if (validationErrors[key]) {
        const targetId = FIELD_INPUT_IDS[key];
        if (targetId) {
          document.getElementById(targetId)?.focus();
        }
        break;
      }
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      focusFirstInvalidField(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);
    setSubmissionErrorMsg('');

    const endpoint = import.meta.env.VITE_ENQUIRY_ENDPOINT as string | undefined;

    try {
      if (endpoint && endpoint.trim().length > 0) {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        });
        if (!response.ok) {
          throw new Error(`Server responded with status ${response.status}`);
        }
        setValidatedRecord({ ...form });
        setSubmissionMode('remote-delivered');
      } else {
        await new Promise((resolve) => window.setTimeout(resolve, 250));
        setValidatedRecord({ ...form });
        setSubmissionMode('local-prepared');
      }
      setCopied(false);
    } catch {
      setSubmissionMode('remote-error');
      setSubmissionErrorMsg(
        'We could not reach the enquiry submission service. Please try again or copy your validated summary below.',
      );
      setValidatedRecord({ ...form });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopySummary = async () => {
    if (!validatedRecord) return;
    const lines = [
      'LAMA – Leadership & Managerial Skills Academy (Validated Enquiry Record)',
      `Name: ${validatedRecord.name}`,
      `Email: ${validatedRecord.email}`,
      `Phone: ${validatedRecord.phone}`,
      `Qualification: ${validatedRecord.qualification}`,
      `Graduation Year: ${validatedRecord.graduationYear}`,
      `Programme Interest: ${validatedRecord.programmeInterest}`,
      validatedRecord.readinessContext
        ? `Assessment Context: ${validatedRecord.readinessContext}`
        : null,
      `Consent Confirmed: ${validatedRecord.consent ? 'Yes' : 'No'}`,
    ]
      .filter(Boolean)
      .join('\n');

    try {
      await navigator.clipboard.writeText(lines);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  const handleResetForm = () => {
    setForm(INITIAL_FORM);
    setErrors({});
    setValidatedRecord(null);
    setSubmissionMode('idle');
    setSubmissionErrorMsg('');
    setCopied(false);
  };

  return (
    <section
      id="contact"
      className="border-b border-[#20201E]/10 bg-[#F6F2E9] py-14 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader
            eyebrow="Contact &amp; Registration"
            title="Begin a Conversation With LAMA"
            description="Complete the student enquiry form below to record your interest in upcoming cohorts, curriculum briefings, and admissions announcements."
          />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Student Enquiry Form */}
          <div className="lg:col-span-7">
            <Reveal>
              <div className="border border-[#20201E]/12 bg-[#FFFFFF] p-6 sm:p-9">
                <div className="border-b border-[#20201E]/10 pb-5">
                  <h3 className="font-serif text-2xl font-semibold text-[#20201E]">
                    Student Enquiry Form
                  </h3>
                  <p className="mt-1.5 text-sm text-[#3D3D39]">
                    All fields marked with <span className="text-[#C87549]">*</span> are
                    required.
                  </p>
                </div>

                {validatedRecord ? (
                  <div className="mt-6 space-y-5">
                    {submissionMode === 'remote-delivered' ? (
                      <div
                        role="status"
                        className="border border-[#78806D] bg-[#F6F2E9] p-5"
                      >
                        <div className="flex items-start gap-3">
                          <Check
                            className="mt-0.5 h-5 w-5 shrink-0 text-[#78806D]"
                            aria-hidden="true"
                          />
                          <div>
                            <h4 className="font-serif text-lg font-semibold text-[#20201E]">
                              Enquiry Submitted Successfully
                            </h4>
                            <p className="mt-1.5 text-sm leading-relaxed text-[#3D3D39]">
                              Thank you. Your enquiry details have been received by the
                              configured admissions endpoint.
                            </p>
                          </div>
                        </div>
                      </div>
                    ) : submissionMode === 'remote-error' ? (
                      <div
                        role="alert"
                        className="border border-[#C87549] bg-[#F6F2E9] p-5"
                      >
                        <div className="flex items-start gap-3">
                          <AlertCircle
                            className="mt-0.5 h-5 w-5 shrink-0 text-[#C87549]"
                            aria-hidden="true"
                          />
                          <div>
                            <h4 className="font-serif text-lg font-semibold text-[#20201E]">
                              Submission Service Unavailable
                            </h4>
                            <p className="mt-1.5 text-sm leading-relaxed text-[#3D3D39]">
                              {submissionErrorMsg}
                            </p>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div
                        role="status"
                        className="border border-[#C87549]/40 bg-[#F6F2E9] p-5"
                      >
                        <div className="flex items-start gap-3">
                          <Info
                            className="mt-0.5 h-5 w-5 shrink-0 text-[#C87549]"
                            aria-hidden="true"
                          />
                          <div>
                            <h4 className="font-serif text-lg font-semibold text-[#20201E]">
                              Validation Complete &mdash; Backend Delivery Not Connected
                            </h4>
                            <p className="mt-1.5 text-sm leading-relaxed text-[#3D3D39]">
                              Your enquiry details passed frontend validation and are
                              prepared below. Because an official backend endpoint (
                              <code className="text-xs">VITE_ENQUIRY_ENDPOINT</code>) is
                              not yet connected, this enquiry has not been transmitted
                              externally.
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="border border-[#20201E]/10 bg-[#F6F2E9]/50 p-5 text-sm">
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#78806D]">
                        Prepared Enquiry Summary
                      </p>
                      <dl className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
                        <div>
                          <dt className="text-xs text-[#78806D]">Full Name</dt>
                          <dd className="font-medium text-[#20201E]">
                            {validatedRecord.name}
                          </dd>
                        </div>
                        <div>
                          <dt className="text-xs text-[#78806D]">Email Address</dt>
                          <dd className="break-all font-medium text-[#20201E]">
                            {validatedRecord.email}
                          </dd>
                        </div>
                        <div>
                          <dt className="text-xs text-[#78806D]">Phone Number</dt>
                          <dd className="font-medium text-[#20201E]">
                            {validatedRecord.phone}
                          </dd>
                        </div>
                        <div>
                          <dt className="text-xs text-[#78806D]">Qualification</dt>
                          <dd className="font-medium text-[#20201E]">
                            {validatedRecord.qualification}
                          </dd>
                        </div>
                        <div>
                          <dt className="text-xs text-[#78806D]">Graduation Year</dt>
                          <dd className="font-medium text-[#20201E]">
                            {validatedRecord.graduationYear}
                          </dd>
                        </div>
                        <div>
                          <dt className="text-xs text-[#78806D]">Programme Interest</dt>
                          <dd className="font-medium text-[#20201E]">
                            {validatedRecord.programmeInterest}
                          </dd>
                        </div>
                      </dl>
                      {validatedRecord.readinessContext && (
                        <div className="mt-3 border-t border-[#20201E]/10 pt-3">
                          <dt className="text-xs text-[#78806D]">
                            Readiness Self-Assessment Note
                          </dt>
                          <dd className="mt-0.5 font-medium text-[#20201E]">
                            {validatedRecord.readinessContext}
                          </dd>
                        </div>
                      )}
                    </div>

                    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                      <button
                        type="button"
                        onClick={handleCopySummary}
                        className="inline-flex items-center justify-center gap-2 border border-[#20201E] bg-[#20201E] px-5 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#FFFFFF] transition-colors hover:bg-[#C87549] hover:border-[#C87549]"
                      >
                        {copied ? (
                          <>
                            <Check className="h-4 w-4" aria-hidden="true" />
                            Summary Copied
                          </>
                        ) : (
                          <>
                            <Copy className="h-4 w-4" aria-hidden="true" />
                            Copy Enquiry Summary
                          </>
                        )}
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          setValidatedRecord(null);
                          setSubmissionMode('idle');
                        }}
                        className="inline-flex items-center justify-center border border-[#20201E]/25 bg-[#F6F2E9] px-5 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#20201E] transition-colors hover:border-[#20201E]"
                      >
                        Edit Details
                      </button>

                      <button
                        type="button"
                        onClick={handleResetForm}
                        className="inline-flex items-center justify-center border border-transparent px-4 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#78806D] transition-colors hover:text-[#20201E]"
                      >
                        Clear Form
                      </button>
                    </div>
                    <span className="sr-only" aria-live="polite">
                      {copied ? 'Enquiry summary copied to clipboard.' : ''}
                    </span>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-5">
                    {form.readinessContext && (
                      <div className="border border-[#78806D]/35 bg-[#F6F2E9] px-4 py-3 text-xs text-[#20201E]">
                        <span className="font-semibold text-[#78806D]">
                          Included from Readiness Tool:{' '}
                        </span>
                        {form.readinessContext}
                      </div>
                    )}

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      {/* Name */}
                      <div className="sm:col-span-2">
                        <label
                          htmlFor="enquiry-name"
                          className="block text-xs font-semibold uppercase tracking-[0.12em] text-[#20201E]"
                        >
                          Full Name <span className="text-[#C87549]">*</span>
                        </label>
                        <input
                          id="enquiry-name"
                          type="text"
                          autoComplete="name"
                          required
                          value={form.name}
                          onChange={(e) => handleFieldChange('name', e.target.value)}
                          aria-invalid={Boolean(errors.name)}
                          aria-describedby={errors.name ? 'error-name' : undefined}
                          placeholder="Enter your full name"
                          className="mt-2 w-full border border-[#20201E]/20 bg-[#F6F2E9]/45 px-4 py-3 text-sm text-[#20201E] placeholder:text-[#78806D]/80 focus:border-[#C87549] focus:bg-[#FFFFFF] focus:outline-none"
                        />
                        {errors.name && (
                          <p
                            id="error-name"
                            className="mt-1.5 flex items-center gap-1.5 text-xs text-[#AD5E34]"
                          >
                            <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                            {errors.name}
                          </p>
                        )}
                      </div>

                      {/* Email */}
                      <div>
                        <label
                          htmlFor="enquiry-email"
                          className="block text-xs font-semibold uppercase tracking-[0.12em] text-[#20201E]"
                        >
                          Email Address <span className="text-[#C87549]">*</span>
                        </label>
                        <input
                          id="enquiry-email"
                          type="email"
                          autoComplete="email"
                          required
                          value={form.email}
                          onChange={(e) => handleFieldChange('email', e.target.value)}
                          aria-invalid={Boolean(errors.email)}
                          aria-describedby={errors.email ? 'error-email' : undefined}
                          placeholder="you@example.com"
                          className="mt-2 w-full border border-[#20201E]/20 bg-[#F6F2E9]/45 px-4 py-3 text-sm text-[#20201E] placeholder:text-[#78806D]/80 focus:border-[#C87549] focus:bg-[#FFFFFF] focus:outline-none"
                        />
                        {errors.email && (
                          <p
                            id="error-email"
                            className="mt-1.5 flex items-center gap-1.5 text-xs text-[#AD5E34]"
                          >
                            <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                            {errors.email}
                          </p>
                        )}
                      </div>

                      {/* Phone */}
                      <div>
                        <label
                          htmlFor="enquiry-phone"
                          className="block text-xs font-semibold uppercase tracking-[0.12em] text-[#20201E]"
                        >
                          Phone Number <span className="text-[#C87549]">*</span>
                        </label>
                        <input
                          id="enquiry-phone"
                          type="tel"
                          autoComplete="tel"
                          required
                          value={form.phone}
                          onChange={(e) => handleFieldChange('phone', e.target.value)}
                          aria-invalid={Boolean(errors.phone)}
                          aria-describedby={errors.phone ? 'error-phone' : undefined}
                          placeholder="Include country/area code"
                          className="mt-2 w-full border border-[#20201E]/20 bg-[#F6F2E9]/45 px-4 py-3 text-sm text-[#20201E] placeholder:text-[#78806D]/80 focus:border-[#C87549] focus:bg-[#FFFFFF] focus:outline-none"
                        />
                        {errors.phone && (
                          <p
                            id="error-phone"
                            className="mt-1.5 flex items-center gap-1.5 text-xs text-[#AD5E34]"
                          >
                            <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                            {errors.phone}
                          </p>
                        )}
                      </div>

                      {/* Qualification */}
                      <div>
                        <label
                          htmlFor="enquiry-qualification"
                          className="block text-xs font-semibold uppercase tracking-[0.12em] text-[#20201E]"
                        >
                          Qualification <span className="text-[#C87549]">*</span>
                        </label>
                        <select
                          id="enquiry-qualification"
                          required
                          value={form.qualification}
                          onChange={(e) =>
                            handleFieldChange('qualification', e.target.value)
                          }
                          aria-invalid={Boolean(errors.qualification)}
                          aria-describedby={
                            errors.qualification ? 'error-qualification' : undefined
                          }
                          className="mt-2 w-full border border-[#20201E]/20 bg-[#F6F2E9]/45 px-4 py-3 text-sm text-[#20201E] focus:border-[#C87549] focus:bg-[#FFFFFF] focus:outline-none"
                        >
                          <option value="">Select qualification</option>
                          {QUALIFICATIONS.map((item) => (
                            <option key={item} value={item}>
                              {item}
                            </option>
                          ))}
                        </select>
                        {errors.qualification && (
                          <p
                            id="error-qualification"
                            className="mt-1.5 flex items-center gap-1.5 text-xs text-[#AD5E34]"
                          >
                            <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                            {errors.qualification}
                          </p>
                        )}
                      </div>

                      {/* Graduation Year */}
                      <div>
                        <label
                          htmlFor="enquiry-year"
                          className="block text-xs font-semibold uppercase tracking-[0.12em] text-[#20201E]"
                        >
                          Graduation Year <span className="text-[#C87549]">*</span>
                        </label>
                        <select
                          id="enquiry-year"
                          required
                          value={form.graduationYear}
                          onChange={(e) =>
                            handleFieldChange('graduationYear', e.target.value)
                          }
                          aria-invalid={Boolean(errors.graduationYear)}
                          aria-describedby={errors.graduationYear ? 'error-year' : undefined}
                          className="mt-2 w-full border border-[#20201E]/20 bg-[#F6F2E9]/45 px-4 py-3 text-sm text-[#20201E] focus:border-[#C87549] focus:bg-[#FFFFFF] focus:outline-none"
                        >
                          <option value="">Select year</option>
                          {GRADUATION_YEARS.map((yr) => (
                            <option key={yr} value={yr}>
                              {yr}
                            </option>
                          ))}
                        </select>
                        {errors.graduationYear && (
                          <p
                            id="error-year"
                            className="mt-1.5 flex items-center gap-1.5 text-xs text-[#AD5E34]"
                          >
                            <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                            {errors.graduationYear}
                          </p>
                        )}
                      </div>

                      {/* Programme Interest */}
                      <div className="sm:col-span-2">
                        <label
                          htmlFor="enquiry-interest"
                          className="block text-xs font-semibold uppercase tracking-[0.12em] text-[#20201E]"
                        >
                          Programme Interest <span className="text-[#C87549]">*</span>
                        </label>
                        <select
                          id="enquiry-interest"
                          required
                          value={form.programmeInterest}
                          onChange={(e) =>
                            handleFieldChange('programmeInterest', e.target.value)
                          }
                          aria-invalid={Boolean(errors.programmeInterest)}
                          aria-describedby={
                            errors.programmeInterest ? 'error-interest' : undefined
                          }
                          className="mt-2 w-full border border-[#20201E]/20 bg-[#F6F2E9]/45 px-4 py-3 text-sm text-[#20201E] focus:border-[#C87549] focus:bg-[#FFFFFF] focus:outline-none"
                        >
                          <option value="">Select programme interest</option>
                          {PROGRAMME_INTERESTS.map((item) => (
                            <option key={item} value={item}>
                              {item}
                            </option>
                          ))}
                        </select>
                        {errors.programmeInterest && (
                          <p
                            id="error-interest"
                            className="mt-1.5 flex items-center gap-1.5 text-xs text-[#AD5E34]"
                          >
                            <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                            {errors.programmeInterest}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Consent Checkbox */}
                    <div className="pt-1">
                      <label className="flex cursor-pointer items-start gap-3">
                        <input
                          id="enquiry-consent"
                          type="checkbox"
                          checked={form.consent}
                          onChange={(e) => handleFieldChange('consent', e.target.checked)}
                          aria-invalid={Boolean(errors.consent)}
                          aria-describedby={errors.consent ? 'error-consent' : undefined}
                          className="mt-1 h-4 w-4 shrink-0 accent-[#C87549]"
                        />
                        <span className="text-xs leading-relaxed text-[#3D3D39]">
                          I consent to LAMA &ndash; Leadership &amp; Managerial Skills
                          Academy collecting and reviewing these enquiry details to share
                          programme and admissions updates once official contact channels
                          are connected. <span className="text-[#C87549]">*</span>
                        </span>
                      </label>
                      {errors.consent && (
                        <p
                          id="error-consent"
                          className="mt-1.5 flex items-center gap-1.5 text-xs text-[#AD5E34]"
                        >
                          <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                          {errors.consent}
                        </p>
                      )}
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="inline-flex w-full sm:w-auto items-center justify-center gap-2 bg-[#C87549] px-8 py-3.5 text-sm font-semibold tracking-wide text-[#FFFFFF] transition-colors hover:bg-[#AD5E34] disabled:cursor-not-allowed disabled:opacity-70"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                            Validating Enquiry...
                          </>
                        ) : (
                          <>
                            <ShieldCheck className="h-4 w-4" aria-hidden="true" />
                            Submit Enquiry
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </Reveal>
          </div>

          {/* Right Column: Booking & Learning Format Placeholders */}
          <div className="lg:col-span-5 space-y-6">
            <Reveal delay={0.08}>
              {/* Booking Calendar Integration Placeholder */}
              <div className="border border-[#20201E]/12 bg-[#FFFFFF] p-6 sm:p-7">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#C87549]/35 bg-[#F6F2E9] text-[#C87549]">
                    <Calendar className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#78806D]">
                      1-on-1 Guidance
                    </span>
                    <h3 className="font-serif text-xl font-semibold text-[#20201E]">
                      Admissions Counselling Calendar
                    </h3>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-[#3D3D39]">
                  Direct session booking for engineering and MBA applicants will appear
                  here once the academy&rsquo;s verified scheduling system is connected.
                </p>

                <div className="mt-5 border border-dashed border-[#78806D]/45 bg-[#F6F2E9] p-4 text-xs leading-relaxed text-[#3D3D39]">
                  <p className="font-semibold uppercase tracking-[0.12em] text-[#20201E]">
                    Counselling Calendar &mdash; Coming Soon
                  </p>
                  <p className="mt-1">
                    Scheduling calendar link and counsellor availability will be published
                    here once active.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              {/* Campus & Virtual Learning Information Placeholders */}
              <div className="border border-[#20201E]/12 bg-[#FFFFFF] p-6 sm:p-7 space-y-6">
                <div className="flex items-start gap-3.5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#20201E]/12 bg-[#F6F2E9] text-[#78806D]">
                    <Building className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#78806D]">
                      In-Person Immersion
                    </span>
                    <h4 className="mt-0.5 font-serif text-lg font-semibold text-[#20201E]">
                      Campus Learning Location
                    </h4>
                    <p className="mt-1.5 text-sm leading-relaxed text-[#3D3D39]">
                      Campus address, city, and physical classroom schedules: Coming Soon.
                    </p>
                  </div>
                </div>

                <div className="border-t border-[#20201E]/10 pt-6 flex items-start gap-3.5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#20201E]/12 bg-[#F6F2E9] text-[#C87549]">
                    <Laptop className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#78806D]">
                      Digital Delivery
                    </span>
                    <h4 className="mt-0.5 font-serif text-lg font-semibold text-[#20201E]">
                      Virtual Learning Environment
                    </h4>
                    <p className="mt-1.5 text-sm leading-relaxed text-[#3D3D39]">
                      Live virtual cohort format, War Room briefing access, and
                      consent-based AI Co-Pilot coaching details: Coming Soon.
                    </p>
                  </div>
                </div>

                <div className="border-t border-[#20201E]/10 pt-5 text-xs leading-relaxed text-[#78806D]">
                  Official academy email address and admissions phone line: Coming Soon.
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
