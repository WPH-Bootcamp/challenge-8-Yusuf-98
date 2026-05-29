import { useState, useRef, useEffect } from 'react';
import { processHeader, steps } from '../../data/processData';
import { StepCard } from '../ui/ProcessStepCard';
import { BUBBLE_SIZE, BUBBLE_CENTER } from '../ui/ProcessStepCard';

export default function ProcessTimeline() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const lineTrackRef = useRef<HTMLDivElement>(null);
  const [fillPct, setFillPct] = useState(0);
  const [activeSteps, setActiveSteps] = useState<boolean[]>(
    Array(steps.length).fill(false)
  );
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 640);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  useEffect(() => {
    const TRIGGER = 0.65;

    function onScroll() {
      const tl = timelineRef.current;
      const lt = lineTrackRef.current;
      if (!tl || !lt) return;

      const ltRect = lt.getBoundingClientRect();
      const viewH = window.innerHeight;

      const scrolled = viewH * TRIGGER - ltRect.top;
      const pct = Math.min(100, Math.max(0, (scrolled / ltRect.height) * 100));
      setFillPct(pct);

      const stepEls = tl.querySelectorAll<HTMLDivElement>('[data-step]');
      const active = Array.from(stepEls).map((el) => {
        const sr = el.getBoundingClientRect();
        return sr.top + BUBBLE_CENTER < viewH * TRIGGER;
      });
      setActiveSteps(active);
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Line dari tengah bubble #1 ke tengah bubble #6
  const lineStyle: React.CSSProperties = isMobile
    ? {
        position: 'absolute',
        left: `${BUBBLE_SIZE / 1.5}px`,
        top: `${BUBBLE_CENTER}px`,
        bottom: `${BUBBLE_CENTER}px`,
        width: '1px',
        transform: 'translateX(-50%)',
        zIndex: 0,
      }
    : {
        position: 'absolute',
        left: '50%',
        top: `${BUBBLE_CENTER}px`,
        bottom: `${BUBBLE_CENTER}px`,
        width: '1px',
        transform: 'translateX(-50%)',
        zIndex: 0,
      };

  return (
    <section className='w-full dark:bg-base-black min-h-screen py-10 md:py-20 px-4 md:px-10xl lg:px-11xl'>
      {/* Header */}
      <div className='flex flex-col gap-3 md:gap-3.5 mb-16'>
        <h2 className='dark:text-neutral-25 text-center text-size-display-sm md:text-size-display-lg lg:text-size-display-xl font-bold'>
          {processHeader.title}
        </h2>
        <p className='text-neutral-400 text-center text-size-sm md:text-size-lg mx-auto'>
          {processHeader.description}
        </p>
      </div>

      {/* Timeline */}
      <div ref={timelineRef} className='relative mx-auto'>
        {/* Vertical line */}
        <div style={lineStyle} ref={lineTrackRef}>
          <div className='absolute inset-0 bg-neutral-200' />
          <div
            className='absolute left-0 top-0 w-full bg-primary-200 transition-[height] duration-100 ease-linear'
            style={{ height: `${fillPct}%` }}
          />
        </div>

        {/* Steps */}
        {steps.map((step, i) => (
          <div key={step.id} data-step>
            <StepCard
              step={step}
              active={activeSteps[i] ?? false}
              isMobile={isMobile}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
