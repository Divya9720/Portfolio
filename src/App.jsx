import React, { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './global.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Experience from './components/Experience'

import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingShapes from './components/FloatingShapes'

function App() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    })
  }, [])

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDark 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white' 
        : 'bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 text-gray-900'
    }`}>
      <FloatingShapes />
      <Navbar isDark={isDark} setIsDark={setIsDark} />
      <Hero isDark={isDark} />
      <Projects isDark={isDark} />
      <Skills isDark={isDark} />
      <Experience isDark={isDark} />

      <Contact isDark={isDark} />
      <Footer isDark={isDark} />
    </div>
  )
}

export default App
