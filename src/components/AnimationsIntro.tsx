import {useRef} from "react"
import gsap from "gsap"
import {useGSAP} from "@gsap/react"


const Nested = () =>{

    const container = useRef(null)

        useGSAP(
        () => {
            gsap.from(container.current,{
                rotation: "+=360",
                x: 160,
                duration: 1,
                scale: 0,
                ease: "power2.inOut"
            })

            gsap.to(container.current, {
                x: 0,
                duration: 1,
                scale: 1,
                ease: "power2.inOut"
            })
        },
        {scope: container}
    )

    return (
        <div ref={container}>

            <p>Hello</p>

        </div>
    )
}

export default Nested