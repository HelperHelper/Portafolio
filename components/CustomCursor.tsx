'use client'

import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let mouseX = 0, mouseY = 0
    let ringX = 0, ringY = 0
    let raf: number

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY

      if (dotRef.current) {
        dotRef.current.style.left = `${mouseX - 4}px`
        dotRef.current.style.top = `${mouseY - 4}px`
      }
    }

    const animate = () => {
      ringX += (mouseX - ringX) * 0.12
      ringY += (mouseY - ringY) * 0.12

      if (ringRef.current) {
        ringRef.current.style.left = `${ringX - 18}px`
        ringRef.current.style.top = `${ringY - 18}px`
      }

      raf = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', onMove)
    raf = requestAnimationFrame(animate)

    // Scale on interactive elements
    const onEnter = () => {
      if (ringRef.current) ringRef.current.style.transform = 'scale(1.8)'
      if (dotRef.current) dotRef.current.style.transform = 'scale(0)'
    }
    const onLeave = () => {
      if (ringRef.current) ringRef.current.style.transform = 'scale(1)'
      if (dotRef.current) dotRef.current.style.transform = 'scale(1)'
    }

    const interactives = document.querySelectorAll('a, button, [role="button"]')
    interactives.forEach(el => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  // Only show on desktop
  if (typeof window !== 'undefined' && window.innerWidth < 768) return null

  return (
    <>
      <div ref={dotRef} className="cursor-dot hidden md:block" />
      <div ref={ringRef} className="cursor-ring hidden md:block" />
    </>
  )
}
