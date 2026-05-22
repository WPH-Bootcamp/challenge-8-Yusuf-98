import type { TestimonialCardProps } from "../../types";

const TestimonialCard = ({icon,rating,description,name,role,image,className=''}:TestimonialCardProps) => {

  return (
    <div className={'flex flex-col justify-center items-center rounded-2xl border bg-neutral-950 border-neutral-900 pt-4 pb-12 px-4 gap-4 lg:pt-6 lg:px-6 lg:gap-6 relative transition-all duration-200 hover:border-primary-200'}>
      <img src={icon} alt="Quote sign" className="w-16 h-16 lg:w-20 lg:h-20 object-contain absolute -top-6 left-4 lg:-top-7.5"/>
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-3">
          <div className="flex gap-1">
            <img src={rating} alt="Rating Star" />
            <img src={rating} alt="Rating Star" />
            <img src={rating} alt="Rating Star" />
            <img src={rating} alt="Rating Star" />
            <img src={rating} alt="Rating Star" />
          </div>
          <p className="font-semibold text-size-sm text-center text-neutral-25 lg:text-size-lg">{description}</p>
        </div>
        <p className="font-semibold text-size-sm text-center text-neutral-25 lg:text-size-lg">{name}</p>
        <p className="font-semibold text-size-sm text-center text-primary-200 lg:text-size-lg">{role}</p>
      </div>
      <img src={image} alt={name} className="w-15 h-15 lg:w-19 lg:h-19 object-contain absolute top-45 lg:top-50" />
    </div>

  )
}

export default TestimonialCard