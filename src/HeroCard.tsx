    "use client"
    import React, {useRef, useState} from "react"
import BadgeShine from './BadgeShine'
import SocialIcons from './components/SocialIcons'


    const CardSpotlight = () => {
    const divRef = useRef<HTMLDivElement>(null)
    const [isFocused, setIsFocused] = useState(false)
    const [position, setPosition] = useState({x: 0, y: 0})
    const [opacity, setOpacity] = useState(0)

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!divRef.current || isFocused) return

        const div = divRef.current
        const rect = div.getBoundingClientRect()

        setPosition({x: e.clientX - rect.left, y: e.clientY - rect.top})
    }

    const handleFocus = () => {
        setIsFocused(true)
        setOpacity(1)
    }

    const handleBlur = () => {
        setIsFocused(false)
        setOpacity(0)
    }

    const handleMouseEnter = () => {
        setOpacity(1)
    }

    const handleMouseLeave = () => {
        setOpacity(0)
    }

        return (
            <div>
                <div
                ref={divRef}
                onMouseMove={handleMouseMove}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="relative flex flex-col overflow-hidden rounded-xl border border-gray-800 bg-gradient-to-r from-black to-gray-950 px-20 py-16 shadow-2xl ">
                <div
                    className="pointer-events-none absolute -inset-px opacity-0 transition duration-300  "
                    style={{
                    opacity,
                    background: ` radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,182,255,.1), transparent 40%)`
                    }}
                />

                <BadgeShine />
                <div className="underline decoration-3 decoration-solid underline-offset-8 md:mt-2 mt-2 ml-4 md:ml-3 ">
                    {" "}
                    <span className="md:text-4xl  bg-gradient-to-t from-[#c7d2fe74] to-[#8678f9] bg-clip-text text-sm text-transparent ">
                    FullStack-Developer
                    </span>
                    <div className="relative mt-3">
                        <div className='blur-lg'>
                        <SocialIcons />
                        </div>
                    <div className="absolute top-0 md:left-24 left-4 ">
                        <SocialIcons />
                    </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }

export default CardSpotlight
