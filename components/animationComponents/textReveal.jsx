'use client'

import React, { useEffect, useState } from 'react'
import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'
import Image from 'next/image'

export default function TextReveal() {
  // --- Controls (replacing Leva) ---
  const [revealBy, setRevealBy] = useState('words')
  const [duration, setDuration] = useState(0.5)
  const [stagger, setStagger] = useState(0.25)

  // --- GSAP animation ---
  useEffect(() => {
    gsap.registerPlugin(SplitText)

    const split = new SplitText('.SimulatorPage-text', {
      type: revealBy, // 'chars' | 'words' | 'lines'
    })

    gsap.set(split[revealBy], { opacity: 0 })

    const tl = gsap.to(split[revealBy], {
      opacity: 1,
      duration,
      stagger,
      ease: 'none',
    })

    return () => {
      tl.kill()
      split.revert()
    }
  }, [revealBy, duration, stagger])

  return (
    <div className="flex flex-col items-center justify-center h-full gap-8 max-w-4xl mx-auto">

      {/* ================= Controls ================= */}
      

      {/* ================= Content ================= */}
      <div className="bg-[#37373a] relative  max-w-4xl h-full text-[#696969]">
        <Image
          src="/Texture.png"
          fill
          alt="Overlay texture"
          className="absolute inset-0 w-full h-full mix-blend-overlay pointer-events-none"
        />
        <div className="max-w-100 p-4 rounded-md   text-white  flex flex-col gap-4 ">
        {/* Reveal mode */}
        <label className="flex flex-col gap-1">
          <span className="text-sm opacity-70 b-">Reveal by</span>
          <select
            value={revealBy}
            onChange={(e) => setRevealBy(e.target.value)}
            className="bg-[#4e4e4e] focus:outline-none focus:ring-0 border border-[#b2b2b2] rounded px-2 py-1"
          >
            <option value="chars">Characters</option>
            <option value="words">Words</option>
            <option value="lines">Lines</option>
          </select>
        </label>

        {/* Duration */}
        <label className="flex flex-col gap-1">
          <span className="text-sm ">
            Duration ({duration}s)
          </span>
          <input
            type="range"
            min={0.01}
            max={2}
            step={0.1}
            value={duration}
            onChange={(e) => setDuration(Number(e.target.value))}
            className="accent-neutral-200 border"
          />
        </label>

        {/* Stagger */}
        <label className="flex flex-col gap-1">
          <span className="text-sm opacity-70">
            Stagger ({stagger}s)
          </span>
          <input
            type="range"
            min={0.01}
            max={1}
            step={0.05}
            value={stagger}
            onChange={(e) => setStagger(Number(e.target.value))}
            className="accent-neutral-200"
          />
        </label>
      </div>

        <div className="text-[#d8d8d8] p-4 relative">
          <div className="SimulatorPage-card">
            <h1 className="SimulatorPage-title">(PH) Title</h1>

            <div className="SimulatorPage-text">
              <p>
                (PH) Welcome to the Ecchymotic Historical Extract: a monument to the
                heroes—both Orokin and mortal—of our greatest recorded struggle for
                survival and expeditionary independence.
              </p>
              <p>
                (PH) This simulator will allow you to experience firsthand the
                travails and triumphs experienced during this great war, so easily
                forgotten in the flames of victory.
              </p>
            </div>

            <div className="SimulatorPage-text">
              <p>
                (PH) Welcome to the Ecchymotic Historical Extract: a monument to the
                heroes—both Orokin and mortal—of our greatest recorded struggle for
                survival and expeditionary independence.
              </p>
              <p>
                (PH) This simulator will allow you to experience firsthand the
                travails and triumphs experienced during this great war, so easily
                forgotten in the flames of victory.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
