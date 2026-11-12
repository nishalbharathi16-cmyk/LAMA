import { useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle2, RotateCcw, AlertCircle } from 'lucide-react';
import { ASSESSMENT_STEPS, RATING_SCALE } from '../data/academyData';
import { Reveal } from './Reveal';
import { SectionHeader } from './SectionHeader';

interface ReadinessAssessmentProps {
  onEnquireWithAssessment: (summaryNote: string) => void;
}

interface PillarBreakdown {
  pillar: string;
  score: number;
  maxScore: number;
  percent: number;
}

export function ReadinessAssessment({ onEnquireWithAssessment }: ReadinessAssessmentProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [stepError, setStepError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const cardTopRef = useRef<HTMLDivElement>(null);

  const activeStep = ASSESSMENT_STEPS[currentStep];

  const scrollCardIntoView = () => {
    cardTopRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  };

  const handleSelect = (questionId: string, value: number) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
    setStepError(null);
  };

  const isCurrentStepComplete = activeStep.questions.every(
    (q) => typeof answers[q.id] === 'number',
  );

  const handleNext = () => {
    if (!isCurrentStepComplete) {
      setStepError('Please select a response for each statement in this step before continuing.');
      return;
    }

    if (currentStep < ASSESSMENT_STEPS.length - 1) {
      setCurrentStep((prev) => prev + 1);
      setStepError(null);
      scrollCardIntoView();
    } else {
      setSubmitted(true);
      setStepError(null);
      scrollCardIntoView();
    }
  };

  const handleBack = () => {
    setStepError(null);
    setCurrentStep((prev) => Math.max(0, prev - 1));
    scrollCardIntoView();
  };

  const handleReset = () => {
    setAnswers({});
    setCurrentStep(0);
    setStepError(null);
    setSubmitted(false);
    scrollCardIntoView();
  };

  const computeResult = () => {
    const breakdowns: PillarBreakdown[] = ASSESSMENT_STEPS.map((step) => {
      const score = step.questions.reduce((acc, q) => acc + (answers[q.id] ?? 0), 0);
      const maxScore = step.questions.length * 5;
      const percent = Math.round((score / maxScore) * 100);
      return {
        pillar: step.pillar,
        score,
        maxScore,
        percent,
      };
    });

    const totalScore = breakdowns.reduce((acc, item) => acc + item.score, 0);
    const totalMax = breakdowns.reduce((acc, item) => acc + item.maxScore, 0);
    const overallPercent = Math.round((totalScore / totalMax) * 100);

    const lowestPillar = [...breakdowns].sort((a, b) => a.percent - b.percent)[0];
    const highestPillar = [...breakdowns].sort((a, b) => b.percent - a.percent)[0];

    let bandTitle = 'Emerging Leadership Foundation';
    let guidance =
      'You are at an ideal stage to build structured business, financial, and AI-enabled managerial habits before stepping into your first management role.';

    if (overallPercent >= 78) {
      bandTitle = 'Strong Management Trajectory';
      guidance =
        'You already bring solid instincts toward leadership responsibility. Applied war room simulations, P&L trade-offs, and cross-functional crisis exercises can help sharpen executive polish under pressure.';
    } else if (overallPercent >= 56) {
      bandTitle = 'Developing Transition Readiness';
      guidance =
        'You have a healthy baseline across core areas and will benefit from translating academic knowledge into structured financial, stakeholder, and AI governance practice.';
    }

    return {
      totalScore,
      totalMax,
      overallPercent,
      bandTitle,
      guidance,
      breakdowns,
      lowestPillar,
      highestPillar,
    };
  };

  const result = submitted ? computeResult() : null;

  return (
    <section
      id="readiness-assessment"
      className="border-b border-[#20201E]/10 bg-[#FFFFFF] py-14 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader
            eyebrow="Self-Reflection Tool"
            title="Assess Your Leadership Readiness"
            description="Complete this brief three-step reflection across decision-making, team communication, and business & AI readiness to see where you stand as you prepare for first-time management."
          />
        </Reveal>

        <Reveal delay={0.08}>
          <div
            ref={cardTopRef}
            className="mt-10 scroll-mt-24 border border-[#20201E]/14 bg-[#F6F2E9] p-5 sm:p-10"
          >
            {!submitted ? (
              <div>
                {/* Step Progress Bar */}
                <div className="flex flex-col gap-4 border-b border-[#20201E]/12 pb-6 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                    {ASSESSMENT_STEPS.map((step, idx) => {
                      const isActive = idx === currentStep;
                      const isDone = idx < currentStep;
                      return (
                        <div
                          key={step.stepNumber}
                          className={`flex items-center gap-2 border px-3 py-1.5 text-xs font-semibold tracking-wide ${
                            isActive
                              ? 'border-[#C87549] bg-[#C87549] text-[#FFFFFF]'
                              : isDone
                                ? 'border-[#78806D] bg-[#78806D] text-[#FFFFFF]'
                                : 'border-[#20201E]/15 bg-[#FFFFFF] text-[#3D3D39]'
                          }`}
                        >
                          <span>0{step.stepNumber}</span>
                          <span className="hidden md:inline">{step.pillar}</span>
                        </div>
                      );
                    })}
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#78806D]">
                    Step {activeStep.stepNumber} of {ASSESSMENT_STEPS.length}
                  </span>
                </div>

                {/* Active Step Content */}
                <div className="mt-7">
                  <h3 className="font-serif text-2xl font-semibold text-[#20201E]">
                    {activeStep.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#3D3D39]">
                    {activeStep.description}
                  </p>

                  <div className="mt-7 space-y-6">
                    {activeStep.questions.map((question, qIdx) => (
                      <fieldset
                        key={question.id}
                        className="border border-[#20201E]/10 bg-[#FFFFFF] p-5 sm:p-6"
                      >
                        <legend className="sr-only">{question.prompt}</legend>
                        <p className="text-sm font-medium leading-relaxed text-[#20201E] sm:text-base">
                          <span className="mr-2 font-serif font-semibold text-[#C87549]">
                            {currentStep * 3 + qIdx + 1}.
                          </span>
                          {question.prompt}
                        </p>

                        <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-5">
                          {RATING_SCALE.map((option) => {
                            const selected = answers[question.id] === option.value;
                            return (
                              <label
                                key={option.value}
                                className={`flex cursor-pointer items-center justify-center border px-3 py-2.5 text-center text-xs font-medium transition-colors focus-within:ring-2 focus-within:ring-[#C87549] focus-within:ring-offset-1 ${
                                  selected
                                    ? 'border-[#20201E] bg-[#20201E] text-[#FFFFFF]'
                                    : 'border-[#20201E]/15 bg-[#F6F2E9]/70 text-[#20201E] hover:border-[#C87549]'
                                }`}
                              >
                                <input
                                  type="radio"
                                  name={question.id}
                                  value={option.value}
                                  checked={selected}
                                  onChange={() => handleSelect(question.id, option.value)}
                                  className="sr-only"
                                />
                                <span>{option.label}</span>
                              </label>
                            );
                          })}
                        </div>
                      </fieldset>
                    ))}
                  </div>
                </div>

                {stepError && (
                  <div
                    role="alert"
                    className="mt-6 flex items-center gap-2.5 border border-[#C87549] bg-[#FFFFFF] px-4 py-3 text-sm text-[#20201E]"
                  >
                    <AlertCircle className="h-4 w-4 shrink-0 text-[#C87549]" aria-hidden="true" />
                    <span>{stepError}</span>
                  </div>
                )}

                {/* Navigation Controls */}
                <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <button
                    type="button"
                    onClick={handleBack}
                    disabled={currentStep === 0}
                    className="inline-flex items-center justify-center gap-2 border border-[#20201E]/25 bg-[#FFFFFF] px-5 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#20201E] transition-colors hover:border-[#20201E] disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                    Previous Step
                  </button>

                  <button
                    type="button"
                    onClick={handleNext}
                    className="inline-flex items-center justify-center gap-2 bg-[#C87549] px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#FFFFFF] transition-colors hover:bg-[#AD5E34]"
                  >
                    {currentStep === ASSESSMENT_STEPS.length - 1
                      ? 'View Indicative Result'
                      : 'Continue to Next Step'}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              </div>
            ) : (
              result && (
                <div>
                  <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
                    {/* Score Summary Card */}
                    <div className="lg:col-span-5 border border-[#20201E]/12 bg-[#20201E] p-7 text-[#F6F2E9] sm:p-8">
                      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C87549]">
                        Indicative Readiness Summary
                      </span>
                      <div className="mt-4 flex items-baseline gap-3">
                        <span className="font-serif text-5xl font-semibold text-[#FFFFFF]">
                          {result.overallPercent}%
                        </span>
                        <span className="text-sm text-[#F6F2E9]/70">
                          ({result.totalScore} / {result.totalMax} self-rated points)
                        </span>
                      </div>

                      <h3 className="mt-4 font-serif text-2xl font-semibold text-[#FFFFFF]">
                        {result.bandTitle}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-[#F6F2E9]/85">
                        {result.guidance}
                      </p>

                      <div className="mt-6 border-t border-[#F6F2E9]/15 pt-5 text-xs leading-relaxed text-[#F6F2E9]/80">
                        <strong className="font-semibold text-[#FFFFFF]">
                          Important Note:{' '}
                        </strong>
                        This self-assessment score is purely indicative for personal
                        reflection and is <strong className="underline">not</strong> an
                        admission decision or formal selection evaluation.
                      </div>
                    </div>

                    {/* Domain Breakdown */}
                    <div className="lg:col-span-7 flex flex-col justify-between border border-[#20201E]/12 bg-[#FFFFFF] p-7 sm:p-8">
                      <div>
                        <h4 className="font-serif text-xl font-semibold text-[#20201E]">
                          Pillar-by-Pillar Breakdown
                        </h4>

                        <div className="mt-6 space-y-5">
                          {result.breakdowns.map((item) => (
                            <div key={item.pillar}>
                              <div className="flex items-center justify-between text-sm">
                                <span className="font-medium text-[#20201E]">
                                  {item.pillar}
                                </span>
                                <span className="font-semibold text-[#C87549]">
                                  {item.percent}%
                                </span>
                              </div>
                              <div className="mt-2 h-2.5 w-full bg-[#ECE5D6]">
                                <div
                                  className="h-full bg-[#78806D] transition-all duration-500"
                                  style={{ width: `${item.percent}%` }}
                                />
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="mt-7 grid grid-cols-1 gap-4 border-t border-[#20201E]/10 pt-5 sm:grid-cols-2">
                          <div className="bg-[#F6F2E9] p-4">
                            <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#78806D]">
                              Relative Strength
                            </span>
                            <p className="mt-1 text-sm font-semibold text-[#20201E]">
                              {result.highestPillar.pillar}
                            </p>
                          </div>
                          <div className="bg-[#F6F2E9] p-4">
                            <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#C87549]">
                              Primary Growth Focus
                            </span>
                            <p className="mt-1 text-sm font-semibold text-[#20201E]">
                              {result.lowestPillar.pillar}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <button
                          type="button"
                          onClick={handleReset}
                          className="inline-flex items-center justify-center gap-2 border border-[#20201E]/25 bg-[#F6F2E9] px-5 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#20201E] transition-colors hover:border-[#20201E]"
                        >
                          <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
                          Retake Assessment
                        </button>

                        <button
                          type="button"
                          onClick={() =>
                            onEnquireWithAssessment(
                              `Indicative Readiness Self-Assessment: ${result.overallPercent}% (${result.bandTitle}; Focus area: ${result.lowestPillar.pillar})`,
                            )
                          }
                          className="inline-flex items-center justify-center gap-2 bg-[#C87549] px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#FFFFFF] transition-colors hover:bg-[#AD5E34]"
                        >
                          <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                          Enquire About the Programme
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

