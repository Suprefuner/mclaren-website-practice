import { animate } from "framer-motion"
import React, { useEffect, useRef } from "react"

export default function CountNumber({ from, to, start }) {
  const ref = useRef()

  useEffect(() => {
    if (!start) return
    const controls = animate(from, to, {
      duration: 1.5,
      onUpdate(value) {
        ref.current.textContent = value.toFixed(to % 1 ? 1 : 0)
      },
    })
    return () => controls.stop()
  }, [from, to, start])

  return <p ref={ref} />
}
