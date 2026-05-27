import type { StatProps } from '../../types';

function StatCard({ value, label }: StatProps) {
  return (
    <div className='flex flex-col items-center justify-center w-43 h-43 md:w-56 md:h-56 lg:w-68.75 lg:h-68.75 rounded-full p-4 border border-neutral-300 dark:border-neutral-900 dark:bg-neutral-950 bg-neutral-50 gap-1.5'>
      <h1 className='font-bold text-size-display-lg lg:text-size-display-2xl text-center text-primary-200'>
        {value}
      </h1>
      <p className='font-semibold text-size-sm lg:text-size-xl text-center dark:text-neutral-25'>
        {label}
      </p>
    </div>
  );
}

export default StatCard;
