import React, { useState, useEffect } from 'react'

export default function CountUpNumber({ target, duration = 2000 }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let current = 0
    const increment = target / (duration / 16)
    const interval = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(interval)
      } else {
        setCount(Math.floor(current))
      }
    }, 16)
    return () => clearInterval(interval)
  }, [target, duration])

  return <span>{count}</span>
}
