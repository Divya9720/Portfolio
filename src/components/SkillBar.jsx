import React, { useEffect, useState } from 'react'

export default function SkillBar({ skill, percentage, isDark }) {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setWidth(percentage), 200)
    return () => clearTimeout(timer)
  }, [percentage])

  return (
    <div className="mb-4">
      <div className="flex justify-between mb-2">
        <span className={`font-medium text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
          {skill}
        </span>
        <span className={`text-sm font-semibold ${isDark ? 'text-purple-400' : 'text-purple-600'}`}>
          {percentage}%
        </span>
      </div>
      <div className={`h-2 rounded-full overflow-hidden ${isDark ? 'bg-gray-700' : 'bg-gray-200'}`}>
        <div
          className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        ></div>
      </div>
    </div>
  )
}
