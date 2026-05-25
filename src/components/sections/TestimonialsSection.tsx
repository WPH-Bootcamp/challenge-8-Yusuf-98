import React, { useRef, useState } from 'react';
import TestimonialCard from '../ui/TestimonialCard';
import Pagination from '../ui/Pagination';
import { testimonials } from '../../data/testimonials';

function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Fungsi untuk mendeteksi indeks berdasarkan posisi scroll

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      // Gunakan pembagi yang sama dengan lebar kartu + margin (594 + 20)
      const index = Math.round(scrollLeft / (594 + 20));
      setActiveIndex(index);
    }
  };

  const handleDotClick = (index: number) => {
    if (scrollRef.current) {
      // Kita cukup beri tahu browser elemen mana yang ingin kita tuju
      const children = scrollRef.current.children;
      if (children[index]) {
        children[index].scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center', // Ini kunci agar kartu otomatis ke tengah
        });
      }
    }
  };

  return (
    <div className='flex flex-col py-2 gap-10 w-full'>
      {/* Header Section */}
      <div className='w-full flex flex-col items-center gap-4'>
        <h1 className='font-bold text-size-display-xl dark:text-neutral-25 text-neutral-950 text-center'>
          {testimonials.title}
        </h1>
        <p className='font-medium text-size-lg text-neutral-400 text-center'>
          {testimonials.description}
        </p>
      </div>

      {/* Cards Section */}
      <div className='w-full relative overflow-hidden'>
        {/* Blur Kiri */}
        <div className='absolute left-0 top-0 h-full w-130 z-60 bg-gradient-to-r from-neutral-25 via-neutral-25/90 to-transparent dark:from-black dark:via-neutral-950/80 dark:to-transparent pointer-events-none' />

        {/* Container Scroll */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className='flex overflow-x-auto scrollbar-none w-full snap-x snap-mandatory'
        >
          {testimonials.list.map((testimonial) => (
            <div
              key={testimonial.id}
              className='shrink-0 snap-center w-[594px] mx-[10px] first:ml-[calc(50%-297px)] last:mr-[calc(50%-297px)]'
            >
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>

        {/* Blur Kanan */}
        <div className='absolute right-0 top-0 h-full w-130 z-60 bg-gradient-to-l from-neutral-25 via-neutral-25/90 to-transparent dark:from-black dark:via-neutral-950/80 dark:to-transparent pointer-events-none' />
      </div>

      {/* Pagination Section */}
      <Pagination
        total={testimonials.list.length}
        activeIndex={activeIndex}
        onClick={handleDotClick}
        className='-mt-2'
      />
    </div>
  );
}

export default TestimonialsSection;
