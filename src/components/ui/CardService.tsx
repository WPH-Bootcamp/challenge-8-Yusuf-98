import type { ServiceCardProps } from "../../types";

const CardService = ({title,description,icon,onClick,className=''}:ServiceCardProps) => {

  return (
    <div
      onClick={onClick}
      className={`bg-neutral-950 rounded-2xl border border-neutral-900 flex flex-col pt-12 pb-5 px-5 gap-4 lg:pt-16 cursor-pointer ${className} transition-all duration-200 ease-in-out relative`}>
      <img
        src={icon}
        alt={title}
        className="w-16 h-16 lg:w-20 lg:h-20 object-contain absolute -top-5 lg:-top-6.5"
      />
      <div className="flex flex-col gap-1">
        <h3 className="text-neutral-25 font-bold text-md lg:text-xl">
          {title}
        </h3>
        <p className="text-neutral-400 font-medium text-sm lg:text-md">
          {description}
        </p>
      </div>
    </div>
  )
}

export default CardService