import React from 'react'

export default function Footer({ isDark }) {
  return (
    <footer className={`py-8 sm:py-12 border-t transition ${isDark ? 'bg-gray-900 text-gray-300 border-gray-800' : 'bg-white text-gray-800 border-gray-200'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div>
            <h3 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
              Divya Chauhan
            </h3>
            <p className={`text-xs sm:text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Frontend Developer crafting beautiful, responsive web experiences with React & Tailwind CSS</p>
          </div>
          <div>
            <h4 className={`font-semibold mb-3 sm:mb-4 text-sm sm:text-base ${isDark ? 'text-white' : 'text-gray-900'}`}>Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className={`text-xs sm:text-sm transition hover:scale-105 inline-block ${isDark ? 'text-gray-400 hover:text-purple-400' : 'text-gray-700 hover:text-purple-600'}`}>Home</a></li>
              <li><a href="#projects" className={`text-xs sm:text-sm transition hover:scale-105 inline-block ${isDark ? 'text-gray-400 hover:text-purple-400' : 'text-gray-700 hover:text-purple-600'}`}>Projects</a></li>
              <li><a href="#skills" className={`text-xs sm:text-sm transition hover:scale-105 inline-block ${isDark ? 'text-gray-400 hover:text-purple-400' : 'text-gray-700 hover:text-purple-600'}`}>Skills</a></li>
              <li><a href="#contact" className={`text-xs sm:text-sm transition hover:scale-105 inline-block ${isDark ? 'text-gray-400 hover:text-purple-400' : 'text-gray-700 hover:text-purple-600'}`}>Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className={`font-semibold mb-3 sm:mb-4 text-sm sm:text-base ${isDark ? 'text-white' : 'text-gray-900'}`}>Follow</h4>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <a href="https://github.com/Divya9720" target="_blank" rel="noopener noreferrer" className={`text-xs sm:text-sm transition ${isDark ? 'text-gray-400 hover:text-purple-400' : 'text-gray-700 hover:text-purple-600'}`}>GitHub</a>
              <a href="https://linkedin.com/in/divyachauhan2001" target="_blank" rel="noopener noreferrer" className={`text-xs sm:text-sm transition ${isDark ? 'text-gray-400 hover:text-purple-400' : 'text-gray-700 hover:text-purple-600'}`}>LinkedIn</a>
              <a href="mailto:divichauhan0808@gmail.com" className={`text-xs sm:text-sm transition ${isDark ? 'text-gray-400 hover:text-purple-400' : 'text-gray-700 hover:text-purple-600'}`}>Email</a>
            </div>
          </div>
        </div>
        <div className={`border-t pt-6 sm:pt-8 text-center ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
          <p className={`text-xs sm:text-sm ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>&copy; 2025 Divya Chauhan. All rights reserved. Built with React & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}
