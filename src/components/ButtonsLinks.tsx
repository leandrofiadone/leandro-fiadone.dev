import React from "react"

interface ButtonLinkProps {
  text: string
}

const ButtonsLinks: React.FC = () => {
  const ButtonLink: React.FC<ButtonLinkProps> = ({text}) => (
    <div>
      <button className="group border-gray-700 md:border-gray-900 relative inline-flex h-8 md:h-10 items-center justify-center overflow-hidden rounded-md bg-neutral-950 px-2 md:px-6 font-medium text-neutral-200 transition hover:scale-110">
        <span>{text}</span>
        <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
          <div className="relative h-full w-8 bg-white/20"></div>
        </div>
      </button>
    </div>
  )

  return (
    <div className="flex space-x-3 mt-2 md:mt-1 md:space-x-4 text-xs md:text-sm">
      <ButtonLink text="About me" />
      <ButtonLink text="Projects/Work Xp" />
      <ButtonLink text="Skills" />
    </div>
  )
}

export default ButtonsLinks
