import type { FAQRowProps } from '../../types';
import PlusIcon from '../../assets/icons/plus.png';
import MinusIcon from '../../assets/icons/minus.png';

function FAQRow({ item, isOpen, onToggle }: FAQRowProps) {
  return (
    <div className='flex flex-col gap-4 mb-4'>
      <button
        onClick={onToggle}
        className='w-full flex justify-between text-left group cursor-pointer'
        aria-expanded={isOpen}
      >
        <span className='dark:text-neutral-25 font-bold text-size-lg md:text-size-xl lg:text-size-display-xs text-left'>
          {item.question}
        </span>
        <span className='dark:text-neutral-25 w-6 h-6 shrink-0 select-none'>
          <img
            src={isOpen ? MinusIcon : PlusIcon}
            alt={isOpen ? 'Collapse' : 'Expand'}
            className='w-full h-full object-contain'
          />
        </span>
      </button>

      <div
        className='overflow-hidden transition-all duration-300 ease-in-out'
        style={{ maxHeight: isOpen ? '200px' : '0px', opacity: isOpen ? 1 : 0 }}
      >
        <p className='text-neutral-400 font-medium text-size-sm md:text-size-md lg:text-size-xl'>
          {item.answer}
        </p>
      </div>
    </div>
  );
}

export default FAQRow;
