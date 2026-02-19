import React from 'react'
import TypingAnimation from './TypingAnimation'
import CountUpNumber from './CountUpNumber'

export default function Hero({ isDark }) {
  return (
    <section id="home" className={`max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-40 text-center ${isDark ? 'text-white' : ''}`}>
      <div className="mb-8" data-aos="zoom-in">
        <div className="w-20 h-20 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-pink-200 to-purple-200 mx-auto mb-6 sm:mb-8 shadow-lg border-4 border-white flex items-center justify-center text-4xl sm:text-6xl hover:scale-110 transition">
          👩‍💻
        </div>
      </div>
      <h2 className={`text-4xl sm:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight ${isDark ? 'text-white' : 'text-gray-800'}`} data-aos="fade-up">
        Frontend <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          <TypingAnimation text="Developer" />
        </span>
      </h2>
      <p className={`text-base sm:text-lg lg:text-2xl mb-4 sm:mb-6 max-w-3xl mx-auto leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`} data-aos="fade-up" data-aos-delay="100">
        Crafting beautiful, responsive web applications using React.js, Tailwind CSS, and JavaScript. Building scalable solutions with seamless API integration.
      </p>
      <p className={`text-sm sm:text-base lg:text-lg mb-8 sm:mb-10 font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'}`} data-aos="fade-up" data-aos-delay="200">Based in Pilkhuwa, Uttar Pradesh | Available for Opportunities</p>
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
        <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition shadow-lg hover:shadow-xl text-sm sm:text-base lg:text-lg hover:scale-105 active:scale-95 duration-200">
          View My Work 🚀
        </button>
        <a href="mailto:divichauhan0808@gmail.com" className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition text-sm sm:text-base lg:text-lg hover:scale-105 active:scale-95 duration-200">
          Contact Me 💬
        </a>
      </div>
      <div className="mt-12 sm:mt-16 flex flex-col sm:flex-row justify-center gap-6 sm:gap-12">
        <div data-aos="flip-left" data-aos-delay="300" className="hover:scale-110 transition">
          <p className="text-4xl font-bold text-purple-600"><CountUpNumber target={3} duration={2000} /></p>
          <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>Major Projects</p>
        </div>
        <div data-aos="flip-left" data-aos-delay="400" className="hover:scale-110 transition">
          <p className="text-4xl font-bold text-pink-600">1<span className="text-2xl">+</span></p>
          <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>Years Exp.</p>
        </div>
        <div data-aos="flip-left" data-aos-delay="500" className="hover:scale-110 transition">
          <p className="text-4xl font-bold text-purple-600"><CountUpNumber target={78} duration={2000} /><span className="text-2xl">/100</span></p>
          <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>CGPA</p>
        </div>
      </div>
    </section>
  )
}
