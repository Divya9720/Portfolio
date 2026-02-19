import React, { useState, useEffect } from 'react'

export default function TypingAnimation({ text, className }) {
  const [displayedText, setDisplayedText] = useState('')
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[index])
        setIndex(prev => prev + 1)
      }, 50)
      return () => clearTimeout(timeout)
    }
  }, [index, text])

  return <span className={className}>{displayedText}</span>
}
