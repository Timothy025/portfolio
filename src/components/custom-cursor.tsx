"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export function CustomCursor() {
  const [clicked, setClicked] = useState(false)
  const [isHoveringClickable, setIsHoveringClickable] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  // Motion values for ultra-smooth raw mouse positioning
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  // Spring physics for a luxurious organic lag follow-through
  const springConfig = { damping: 30, stiffness: 350, mass: 0.5 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    // Enable only for devices with a precision pointer (mouse)
    const mediaQuery = window.matchMedia("(pointer: fine)")
    if (!mediaQuery.matches) return

    setIsVisible(true)

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 6) // Center the 12px dot on the cursor
      cursorY.set(e.clientY - 6)

      // Detect hover on links, buttons, and interactive elements
      const target = e.target as HTMLElement | null
      if (target) {
        const isClickable = 
          target.tagName === "A" || 
          target.tagName === "BUTTON" || 
          target.closest("a") || 
          target.closest("button") || 
          target.closest(".cursor-pointer") ||
          target.getAttribute("role") === "button"
        
        setIsHoveringClickable(!!isClickable)
      }
    }

    const handleMouseDown = () => setClicked(true)
    const handleMouseUp = () => setClicked(false)

    window.addEventListener("mousemove", moveCursor)
    window.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mouseup", handleMouseUp)

    return () => {
      window.removeEventListener("mousemove", moveCursor)
      window.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseup", handleMouseUp)
    }
  }, [cursorX, cursorY])

  if (!isVisible) return null

  // Calculate dynamic scale based on interaction state
  let scale = 1
  if (clicked) {
    scale = 2.4
  } else if (isHoveringClickable) {
    scale = 1.6
  }

  return (
    <motion.div
      className="fixed top-0 left-0 w-3 h-3 rounded-full pointer-events-none z-[99999] bg-black dark:bg-white shadow-[0_0_12px_rgba(0,0,0,0.12)] dark:shadow-[0_0_12px_rgba(255,255,255,0.18)]"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        scale,
        willChange: "transform",
      }}
      transition={{
        scale: { type: "spring", stiffness: 350, damping: 20 }
      }}
    />
  )
}
