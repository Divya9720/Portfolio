import React from 'react'

export default function Testimonials({ isDark }) {
  const testimonials = [
    {
      name: 'Priya Singh',
      role: 'Senior Developer at VahanWire',
      text: 'Divya is an excellent frontend developer with strong attention to detail. She quickly grasped complex requirements and delivered high-quality code.',
      image: '👩‍💼'
    },
    {
      name: 'Rahul Kumar',
      role: 'Project Lead at VahanWire',
      text: 'Working with Divya was a great experience. She consistently delivered responsive components on time and collaborated well with the team.',
      image: '👨‍💼'
    },
    {
      name: 'Anjali Patel',
      role: 'UI/UX Designer at Zeabros',
      text: 'Divya transformed our designs into pixel-perfect web pages. Her technical skills combined with design understanding made her invaluable to the team.',
      image: '👩‍🎨'
    }
  ]

  return (
    <section className={`max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20 rounded-3xl ${
      isDark
        ? 'bg-gradient-to-br from-gray-800 to-gray-700'
        : 'bg-gradient-to-br from-purple-50 to-pink-50'
    }`}>
      <div className="text-center mb-10 sm:mb-16">
        <h3 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 ${isDark ? 'text-white' : 'text-gray-800'}`}>What People Say</h3>
        <p className={`text-sm sm:text-base lg:text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Feedback from colleagues and mentors</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {testimonials.map((testi, i) => (
          <div
             key={i}
             className={`rounded-2xl p-8 shadow-sm border hover:shadow-2xl transition hover:-translate-y-2 group cursor-pointer ${
               isDark
                 ? 'bg-gray-900 border-gray-700 hover:border-purple-600'
                 : 'bg-white border-purple-100 hover:border-purple-400'
             }`}
             data-aos="fade-up"
             data-aos-delay={i * 100}
           >
            <div className="flex items-center mb-6">
               <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-4xl group-hover:scale-110 transition shadow-lg">
                 {testi.image}
               </div>
               <div className="ml-4">
                 <p className={`font-bold ${isDark ? 'text-white' : 'text-gray-800'}`}>{testi.name}</p>
                 <p className="text-purple-600 text-sm font-medium">{testi.role}</p>
               </div>
             </div>
            <p className={`leading-relaxed italic ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>"{testi.text}"</p>
            <div className="mt-4 flex gap-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400">★</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
