import React, { useState } from 'react'

export default function Navbar({ isDark, setIsDark }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className={`sticky top-0 ${isDark ? 'bg-gray-900' : 'bg-white'} bg-opacity-90 backdrop-blur-md px-4 sm:px-6 py-4 shadow-sm ${isDark ? 'border-b border-gray-700' : 'border-b border-purple-100'} z-50 transition`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent truncate">
          Divya Chauhan
        </h1>
        
        <ul className={`hidden lg:flex gap-4 xl:gap-8 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
          <li><a href="#home" className={`text-sm xl:text-base ${isDark ? 'hover:text-purple-400' : 'hover:text-purple-600'} transition font-medium`}>Home</a></li>
          <li><a href="#projects" className={`text-sm xl:text-base ${isDark ? 'hover:text-purple-400' : 'hover:text-purple-600'} transition font-medium`}>Projects</a></li>
          <li><a href="#skills" className={`text-sm xl:text-base ${isDark ? 'hover:text-purple-400' : 'hover:text-purple-600'} transition font-medium`}>Skills</a></li>
          <li><a href="#experience" className={`text-sm xl:text-base ${isDark ? 'hover:text-purple-400' : 'hover:text-purple-600'} transition font-medium`}>Experience</a></li>
          <li><a href="#contact" className={`text-sm xl:text-base ${isDark ? 'hover:text-purple-400' : 'hover:text-purple-600'} transition font-medium`}>Contact</a></li>
        </ul>

        <div className="flex gap-2 sm:gap-4 items-center">
          <button 
            onClick={() => setIsDark(!isDark)}
            className={`px-3 sm:px-4 py-2 rounded-full font-medium transition text-lg sm:text-xl ${isDark ? 'bg-gray-800 text-yellow-400' : 'bg-gray-100 text-gray-700'}`}
            title="Toggle Dark Mode"
          >
            {isDark ? '☀️' : '🌙'}
          </button>
          <a 
            href="https://github.com/Divya9720/resume" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden sm:block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 sm:px-6 py-2 rounded-full text-sm sm:text-base font-medium hover:shadow-lg transition"
          >
            CV
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg ${isDark ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-800'}`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className={`lg:hidden mt-4 pb-4 ${isDark ? 'border-t border-gray-700' : 'border-t border-purple-100'}`}>
          <ul className={`flex flex-col gap-3 pt-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            <li><a href="#home" onClick={() => setIsOpen(false)} className={`${isDark ? 'hover:text-purple-400' : 'hover:text-purple-600'} transition font-medium`}>Home</a></li>
            <li><a href="#projects" onClick={() => setIsOpen(false)} className={`${isDark ? 'hover:text-purple-400' : 'hover:text-purple-600'} transition font-medium`}>Projects</a></li>
            <li><a href="#skills" onClick={() => setIsOpen(false)} className={`${isDark ? 'hover:text-purple-400' : 'hover:text-purple-600'} transition font-medium`}>Skills</a></li>
            <li><a href="#experience" onClick={() => setIsOpen(false)} className={`${isDark ? 'hover:text-purple-400' : 'hover:text-purple-600'} transition font-medium`}>Experience</a></li>
            <li><a href="#contact" onClick={() => setIsOpen(false)} className={`${isDark ? 'hover:text-purple-400' : 'hover:text-purple-600'} transition font-medium`}>Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  )
}
