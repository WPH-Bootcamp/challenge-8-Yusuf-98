import type { Stat } from '../../types';

function StatCard({ value, label }: Stat) {
  return (
    <div className='flex flex-col items-center justify-center w-68.75 h-68.75 rounded-full p-4 border border-neutral-300 dark:border-neutral-900 dark:bg-neutral-950 bg-neutral-50 gap-1.5'>
      <h1 className='font-bold text-size-display-2xl text-center text-primary-200'>
        {value}
      </h1>
      <p className='font-semibold text-size-xl text-center dark:text-neutral-25'>
        {label}
      </p>
    </div>
  );
}

export default StatCard;
