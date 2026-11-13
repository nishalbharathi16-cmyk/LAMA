import { useEffect, useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { NAV_ITEMS } from '../data/academyData';
import { LamaLogo } from './LamaLogo';

interface HeaderProps {
  onApplyClick: () => void;
}

export function Header({ onApplyClick }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState('#home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = NAV_ITEMS.map((item) => item.href.replace('#', ''));
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveHref(`#${visible[0].target.id}`);
        }
      },
      {
        rootMargin: '-25% 0px -55% 0px',
        threshold: [0.1, 0.25, 0.5],
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const handleNavClick = (href: string) => {
    setActiveHref(href);
    setMobileOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#F6F2E9]/98 border-b border-[#20201E]/14 shadow-[0_4px_20px_rgba(32,32,30,0.05)]'
          : 'bg-[#F6F2E9] border-b border-[#20201E]/10'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6 lg:px-8">
        {/* Brand */}
        <a
          href="#home"
          onClick={() => handleNavClick('#home')}
          className="group flex items-center shrink-0 transition-opacity hover:opacity-95"
          aria-label="LAMA – Leadership & Managerial Skills Academy Home"
        >
          <LamaLogo variant="horizontal" theme="light" />
        </a>

        {/* Desktop Navigation */}
        <nav aria-label="Primary Navigation" className="hidden xl:flex items-center gap-4 2xl:gap-5">
          {NAV_ITEMS.map((item) => {
            const isActive = activeHref === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={() => handleNavClick(item.href)}
                aria-current={isActive ? 'location' : undefined}
                className={`relative whitespace-nowrap py-1 text-[13px] font-medium tracking-wide transition-colors ${
                  isActive
                    ? 'text-[#C87549] font-semibold'
                    : 'text-[#20201E]/80 hover:text-[#C87549]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span
                    aria-hidden="true"
                    className="absolute right-0 -bottom-0.5 left-0 h-[2px] bg-[#C87549]"
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              setMobileOpen(false);
              onApplyClick();
            }}
            className="hidden sm:inline-flex items-center gap-1.5 bg-[#C87549] px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-[#FFFFFF] transition-colors hover:bg-[#AD5E34] active:translate-y-px"
          >
            Enquire Now
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="inline-flex xl:hidden items-center justify-center border border-[#20201E]/20 bg-[#FFFFFF] p-2.5 text-[#20201E] transition-colors hover:border-[#C87549] hover:text-[#C87549]"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Responsive Mobile & Tablet Navigation Drawer */}
      {mobileOpen && (
        <div
          id="mobile-navigation"
          className="xl:hidden border-t border-[#20201E]/10 bg-[#F6F2E9] shadow-[0_12px_28px_rgba(32,32,30,0.08)]"
        >
          <nav
            aria-label="Mobile Navigation"
            className="mx-auto flex max-w-7xl flex-col px-4 py-4 sm:px-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
              {NAV_ITEMS.map((item) => {
                const isActive = activeHref === item.href;
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => handleNavClick(item.href)}
                    aria-current={isActive ? 'location' : undefined}
                    className={`border-b border-[#20201E]/8 py-3 px-3 text-sm font-medium transition-colors ${
                      isActive
                        ? 'border-l-2 border-l-[#C87549] bg-[#EFE9DC]/60 text-[#C87549] font-semibold'
                        : 'text-[#20201E] hover:text-[#C87549]'
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>
            <div className="pt-4">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  setMobileOpen(false);
                  onApplyClick();
                }}
                className="flex w-full items-center justify-center gap-2 bg-[#C87549] px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#FFFFFF] transition-colors hover:bg-[#AD5E34]"
              >
                Enquire Now
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
