'use client'
import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";

export default function Parallax() {
    const layer1 = useRef(null);
    const layer2 = useRef(null);
    const layer3 = useRef(null);
    
    function manageMouseMove(e) {
        const { innerWidth, innerHeight } = window
        const { clientX, clientY } = e

        // mapping x coordinates to be on the range of [-1,1]
        const normX = (clientX / innerWidth) * 2 - 1
        const normY = (clientY / innerHeight) * 2 - 1

        gsap.to(layer1.current, {
            x: normX * 20, // image will have a 20px offset
            y: normY * 25, // image will have a 25px offset
            duration: 1.5, 
            ease: "power2.out"
        })

        gsap.to(layer2.current, {
            x: normX * 10, 
            y: normY * 20,
            duration: 1.5, 
            ease: "power2.out"
        })

        gsap.to(layer3.current, {
            x: normX * 20, 
            y: normY * 20,
            duration: 1.5, 
            ease: "power2.out"
        })

    }

  return (
    <div onMouseMove={manageMouseMove} className="relative max-w-4xl h-[400px] bg-[#101014] overflow-hidden">
        {/* <div className='element fixed w-[500px] h-[500px] border-1 border-red-700'>
            </div> */}
        <Image
            ref={layer1}
            src="/images/battle-A-background.png"
            width={500}
            height={500}
            className='w-[120%] h-[120%] object-contain absolute scale-[1.15]'
            alt="Picture of the author"
        />
        <Image
            ref={layer2}
            src="/images/battle-A-bullets.png"
            width={500}
            height={500}
            className='w-[110%] h-[110%] object-contain absolute mix-blend-screen brightness-250 scale-[1.15]'
            alt="Picture of the author"
        />
        <Image
            ref={layer3}
            src="/images/battle-A-sparks.png"
            width={500}
            height={500}
            className='w-[110%] h-[110%] object-contain absolute mix-blend-screen brightness-250 scale-[1.15]'
            alt="Picture of the author"
        />
        <Image
            ref={layer2}
            src="/images/battle-A-excalibur.png"
            width={500}
            height={500}
            className='w-[110%] h-[110%] object-contain absolute scale-[1.15]'
            alt="Picture of the author"
        /> 
    </div>
  )
}
