import type { HeroProps } from "../../types";
import Button from "./Button";


const Hero = ({title, titleSpan, description, className=''}:HeroProps) => {

  return (
    <div className={`mt-30 ml-20 max-w-163 flex flex-col items-start justify-center gap-10 ${className}`}>
      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-size-display-hero text-neutral-800 dark:text-neutral-25">
          {title} 
          <span className="font-bold text-size-display-hero text-primary-200">
            {titleSpan}
          </span>
        </h1>
        <p className="font-semibold text-size-xl text-neutral-800 dark:text-neutral-25">
          {description}
        </p>
      </div>
      <Button size="md" type="button" children="Let's Talk" className="w-50"/>
    </div>
  )
}

export default Hero;