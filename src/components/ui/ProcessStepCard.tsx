import { useState } from 'react';
import type { StepCardProps } from '../../types';
import UpArrow from '../../assets/icons/chevron-up.png';
import DownArrow from '../../assets/icons/chevron-down.png';

// Distance from top of step row to vertical center of bubble
// bubble top offset = 18px padding, bubble height = 36px → center = 18 + 18 = 36px
export const BUBBLE_TOP = 18; // top: 18px (matches py-[18px] card padding)
export const BUBBLE_SIZE = 36; // w-9 h-9
export const BUBBLE_CENTER = BUBBLE_TOP + BUBBLE_SIZE / 2; // 36px

export function StepCard({ step, active, isMobile }: StepCardProps) {
  const [open, setOpen] = useState(true);

  if (isMobile) {
    return (
      <div className='relative flex items-start mb-5 pl-13'>
        {/* Bubble */}
        <div
          className={[
            'absolute left-0 z-10 shrink-0',
            'w-12 h-12 p-2 rounded-full flex items-center justify-center',
            'dark:text-neutral-25 text-size-xs md:text-size-md text-center font-bold transition-colors duration-300',
            active ? 'bg-primary-200' : 'bg-neutral-400',
          ].join(' ')}
          style={{ top: `${BUBBLE_TOP}px` }}
        >
          {step.id}
        </div>

        {/* Card */}
        <div
          className='flex-1 dark:bg-neutral-950 border dark:border-neutral-900 rounded-2xl p-6 cursor-pointer select-none'
          onClick={() => setOpen((v) => !v)}
        >
          <div className='flex items-center justify-between gap-3'>
            <span className='dark:text-neutral-25 font-bold text-size-md md:text-size-xl leading-snug'>
              {step.title}
            </span>
            <img
              src={open ? UpArrow : DownArrow}
              alt={open ? 'collapse' : 'expand'}
              className='w-6 h-6 shrink-0 opacity-60'
            />
          </div>
          {open && (
            <p className='text-neutral-400 text-size-sm md:text-size-md mt-1 leading-relaxed'>
              {step.subtitle}
            </p>
          )}
        </div>
      </div>
    );
  }

  // Desktop zigzag
  return (
    <div
      className={[
        'w-full relative flex items-start mb-10',
        step.side === 'left'
          ? 'flex-row pr-[calc(50%+2.5rem)]'
          : 'flex-row-reverse pl-[calc(50%+2.5rem)]',
      ].join(' ')}
    >
      {/* Card */}
      <div
        className='flex-1 dark:bg-neutral-950 border dark:border-neutral-900 rounded-2xl p-6 cursor-pointer select-none'
        onClick={() => setOpen((v) => !v)}
      >
        <div className='flex items-center justify-between gap-1'>
          <span className='dark:text-neutral-25 font-bold text-size-md -tracking-1 md:text-size-xl'>
            {step.title}
          </span>
          <img
            src={open ? UpArrow : DownArrow}
            alt={open ? 'collapse' : 'expand'}
            className='w-6 h-6 shrink-0 opacity-60'
          />
        </div>
        {open && (
          <p className='text-neutral-400 text-size-sm md:text-size-md mt-1'>
            {step.subtitle}
          </p>
        )}
      </div>

      {/* Bubble */}
      <div
        className={[
          'absolute left-1/2 -translate-x-1/2 z-10',
          'w-12 h-12 p-2 rounded-full border dark:border-neutral-900 flex items-center justify-center',
          'dark:text-neutral-25 text-size-xs md:text-size-md text-center font-bold transition-colors duration-300',
          active ? 'bg-primary-200' : 'bg-neutral-400',
        ].join(' ')}
        style={{ top: `${BUBBLE_TOP}px` }}
      >
        {step.id}
      </div>
    </div>
  );
}
