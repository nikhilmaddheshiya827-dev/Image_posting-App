import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { useLocation } from 'react-router-dom'

const Stairs = () => {
  const location = useLocation()
  const stairRef = useRef(null)

  const runAnimation = () => {
    const tl = gsap.timeline()

    gsap.set(stairRef.current, { autoAlpha: 1 })
    gsap.set('.stair', { left: '-100%' })

    tl.to('.stair', {
      left: '0%',
      stagger: 0.1,
      ease: "power4.inOut"
    })

    tl.to('.stair', {
      left: '100%',
      stagger: 0.1,
      ease: "power4.inOut"
    })

    tl.set(stairRef.current, { autoAlpha: 0 })
  }

  // 🔥 page load (reload)
  useEffect(() => {
    runAnimation()
  }, [])

  // 🔥 route change
  useEffect(() => {
    runAnimation()
  }, [location.pathname])

  return (
    <div
      ref={stairRef}
      className="fixed top-0 left-0 w-screen h-screen z-50 pointer-events-none opacity-0"
    >
      {[...Array(5)].map((_, i) => (
        <div key={i} className="stair w-full h-1/5 bg-black relative"></div>
      ))}
    </div>
  )
}

export default Stairs