import type { IndustryProps } from '../../types';

export default function IndustryCard({
  id,
  description,
  image,
  imageAlt,
}: IndustryProps) {
  return (
    <div className='flex flex-col gap-5'>
      <p className='text-size-sm md:text-size-md lg:text-size-lg font-medium'>
        {description}
      </p>
      <div className='rounded-4xl overflow-hidden max-w-210 ml-auto'>
        <img
          key={id}
          src={image}
          alt={imageAlt}
          className='w-full object-cover transition-opacity duration-300'
        />
      </div>
    </div>
  );
}
