import { useState } from 'react';
import { ACADEMY_TAGLINE } from '../data/academyData';
import { PolicyModal, type PolicyType } from './PolicyModal';
import { LamaLogo } from './LamaLogo';

const QUICK_NAV = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Mentors', href: '#mentors' },
  { label: 'Outcomes', href: '#outcomes' },
  { label: 'Contact', href: '#contact' },
];

const PROGRAMME_LINKS = [
  { label: 'Who Is This Programme For', href: '#programme' },
  { label: 'Programme Curriculum', href: '#curriculum' },
  { label: 'Learning Experience', href: '#learning-experience' },
  { label: 'Admissions & Details', href: '#admissions' },
  { label: 'Leadership Readiness Tool', href: '#readiness-assessment' },
];

export function Footer() {
  const [activePolicy, setActivePolicy] = useState<PolicyType>(null);
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#20201E] text-[#F6F2E9]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <a
              href="#home"
              className="group inline-block transition-transform hover:opacity-95"
              aria-label="LAMA Back to Top"
            >
              <LamaLogo variant="horizontal" theme="dark" />
            </a>

            <p className="mt-5 text-sm leading-relaxed text-[#F6F2E9]/80">
              {ACADEMY_TAGLINE}
            </p>
            <p className="mt-3 text-xs leading-relaxed text-[#F6F2E9]/65">
              Preparing final-year and graduating B.Tech/B.E. engineering and MBA
              students for first-time managerial responsibilities.
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-2">
            <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-[#C87549]">
              Quick Navigation
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {QUICK_NAV.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[#F6F2E9]/80 transition-colors hover:text-[#FFFFFF]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programme Links */}
          <div className="lg:col-span-3">
            <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-[#C87549]">
              Programme
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {PROGRAMME_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[#F6F2E9]/80 transition-colors hover:text-[#FFFFFF]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social Placeholders */}
          <div className="lg:col-span-3">
            <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-[#C87549]">
              Connect With LAMA
            </h3>
            <div className="mt-4 space-y-2.5 text-xs leading-relaxed text-[#F6F2E9]/75">
              <p>
                <span className="font-semibold text-[#F6F2E9]">Admissions Email: </span>
                Coming Soon
              </p>
              <p>
                <span className="font-semibold text-[#F6F2E9]">Phone Line: </span>
                Coming Soon
              </p>
              <p>
                <span className="font-semibold text-[#F6F2E9]">Campus Address: </span>
                Coming Soon
              </p>
            </div>

            <div className="mt-5 border-t border-[#F6F2E9]/12 pt-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#F6F2E9]/65">
                Official Social Channels
              </p>
              <p className="mt-2 text-xs text-[#F6F2E9]/75">
                Official LinkedIn and YouTube links: Coming Soon.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Legal Row */}
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-[#F6F2E9]/14 pt-7 text-xs text-[#F6F2E9]/65 sm:flex-row sm:items-center">
          <p>
            &copy; {currentYear} LAMA &ndash; Leadership &amp; Managerial Skills Academy.
            All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => setActivePolicy('privacy')}
              className="underline-offset-4 transition-colors hover:text-[#FFFFFF] hover:underline"
            >
              Privacy Policy
            </button>
            <button
              type="button"
              onClick={() => setActivePolicy('terms')}
              className="underline-offset-4 transition-colors hover:text-[#FFFFFF] hover:underline"
            >
              Terms and Conditions
            </button>
          </div>
        </div>
      </div>

      <PolicyModal activePolicy={activePolicy} onClose={() => setActivePolicy(null)} />
    </footer>
  );
}

