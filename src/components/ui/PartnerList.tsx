import { partnerList } from '../../data/partnerList';

function PartnerList() {
  return (
    <div className='flex flex-col items-center justify-center overflow-hidden mb-3'>
      <h1 className='font-bold text-center text-size-md -tracking-1 text-size-display-xs dark:text-neutral-25 mb-6'>
        {partnerList.title}
      </h1>

      {/* Marquee wrapper */}
      <div className='relative w-full overflow-hidden h-20 flex items-center [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]'>
        <div className='flex gap-12 animate-marquee whitespace-nowrap'>
          {/* Render dua kali supaya seamless / tidak terputus */}
          {[...partnerList.partners, ...partnerList.partners].map(
            (partner, index) => (
              <img
                key={`${partner.id}-${index}`}
                src={partner.logo}
                alt={partner.label}
                className='h-10 w-auto object-contain shrink-0'
              />
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default PartnerList;
