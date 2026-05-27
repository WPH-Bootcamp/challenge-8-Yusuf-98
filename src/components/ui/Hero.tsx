import type { HeroProps } from '../../types';
import Button from './Button';

const Hero = ({ title, titleSpan, description }: HeroProps) => {
  return (
    <div>
      <div className='flex flex-col items-start justify-center gap-10'>
        <div className='flex flex-col gap-2'>
          <h1 className='font-bold text-[clamp(2.25rem,4vw,3.5rem)] leading-11 lg:leading-17 -tracking-1 text-neutral-800 dark:text-neutral-25'>
            {title}
            <span className='font-bold text-[clamp(2.25rem,4vw,3.5rem)] -tracking-1 leading-11 lg:leading-17 text-primary-200'>
              {titleSpan}
            </span>
          </h1>
          <p className='font-semibold text-[clamp(1rem,2vw,1.25rem)] leading-7.5 lg:leading-8.5 text-neutral-800 dark:text-neutral-25'>
            {description}
          </p>
        </div>
        <Button
          size='md'
          type='button'
          children="Let's Talk"
          className='w-full md:w-50'
        />
      </div>
    </div>
  );
};

export default Hero;
