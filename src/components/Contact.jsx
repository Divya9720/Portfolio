import React, { useState } from 'react'

export default function Contact({ isDark }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className={`max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20 ${isDark ? 'text-white' : ''}`}>
      <div className="text-center mb-10 sm:mb-16">
        <h3 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 ${isDark ? 'text-white' : 'text-gray-800'}`} data-aos="fade-down">Let's Connect</h3>
        <p className={`text-sm sm:text-base lg:text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'}`} data-aos="fade-up">Have a project in mind? I'd love to hear from you</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12">
        <div className={`rounded-2xl p-4 sm:p-8 shadow-sm border ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-purple-100'}`} data-aos="fade-right">
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div>
              <label className={`block font-semibold mb-2 ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-100 ${
                  isDark
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                    : 'border-gray-300 text-gray-900'
                }`}
                required
              />
            </div>
            <div>
              <label className={`block font-semibold mb-2 ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-100 ${
                  isDark
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                    : 'border-gray-300 text-gray-900'
                }`}
                required
              />
            </div>
            <div>
              <label className={`block font-semibold mb-2 ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message..."
                rows="5"
                className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-100 resize-none ${
                  isDark
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                    : 'border-gray-300 text-gray-900'
                }`}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 rounded-lg transition shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
            >
              Send Message ✉️
            </button>
          </form>
        </div>

        <div className="space-y-6 sm:space-y-8" data-aos="fade-left">
          <div>
            <h4 className={`text-xl sm:text-2xl font-bold mb-4 sm:mb-8 ${isDark ? 'text-white' : 'text-gray-800'}`}>Get In Touch</h4>
            <div className="space-y-4 sm:space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg flex items-center justify-center flex-shrink-0 hover:scale-110 transition shadow-md">
                    <span className="text-2xl">📧</span>
                  </div>
                <div>
                  <p className={`font-semibold ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>Email</p>
                  <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>divichauhan0808@gmail.com</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg flex items-center justify-center flex-shrink-0 hover:scale-110 transition shadow-md">
                    <span className="text-2xl">📱</span>
                  </div>
                <div>
                  <p className={`font-semibold ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>Phone</p>
                  <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>+91-9720682682</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg flex items-center justify-center flex-shrink-0 hover:scale-110 transition shadow-md">
                    <span className="text-2xl">📍</span>
                  </div>
                <div>
                  <p className={`font-semibold ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>Location</p>
                  <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>Pilkhuwa (Hapur), Uttar Pradesh</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className={`text-xl sm:text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-800'}`}>Follow Me</h4>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <a
                href="https://linkedin.com/in/divyachauhan2001"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center hover:shadow-xl transition hover:scale-125 hover:-translate-y-1"
                title="LinkedIn"
              >
                <span className="text-xl">💼</span>
              </a>
              <a
                href="https://github.com/Divya9720"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg flex items-center justify-center hover:shadow-xl transition hover:scale-125 hover:-translate-y-1"
                title="GitHub"
              >
                <span className="text-xl">💻</span>
              </a>
              <a
                href="mailto:divichauhan0808@gmail.com"
                className="w-12 h-12 bg-gradient-to-br from-red-400 to-pink-600 rounded-lg flex items-center justify-center hover:shadow-xl transition hover:scale-125 hover:-translate-y-1"
                title="Email"
              >
                <span className="text-xl">✉️</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
