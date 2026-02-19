import React from 'react'

export default function Projects({ isDark }) {
  const projects = [
    {
      id: 1,
      title: 'VahanWire AMC Website & Admin Panel',
      desc: 'Built responsive frontend for AMC website and admin management panel. Integrated REST APIs for seamless data handling and optimized UI performance across browsers.',
      tags: ['React.js', 'Tailwind CSS', 'REST API'],
      image: 'bg-gradient-to-br from-blue-100 to-cyan-100',
      github: 'https://github.com/Divya9720',
      live: 'https://vahanwire.com/'
    },
    {
      id: 2,
      title: 'Amazon Clone',
      desc: 'Created a fully responsive e-commerce UI replicating Amazon\'s design. Implemented responsive layouts and modern UI patterns using HTML, CSS, and Bootstrap.',
      tags: ['HTML', 'CSS', 'Bootstrap'],
      image: 'bg-gradient-to-br from-yellow-100 to-orange-100',
      github: 'https://github.com/Divya9720',
      live: '#'
    },
    {
      id: 3,
      title: 'Malware Detection System',
      desc: 'ML-based system for detecting malware using Random Forest algorithm. Backend built with Django, SQLite database. Contributed to the frontend visualization components.',
      tags: ['Django', 'Python', 'Machine Learning'],
      image: 'bg-gradient-to-br from-red-100 to-pink-100',
      github: 'https://github.com/Divya9720',
      live: '#'
    }
  ]

  return (
    <section id="projects" className={`max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20 ${isDark ? 'text-white' : ''}`}>
      <div className="text-center mb-10 sm:mb-16">
        <h3 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 ${isDark ? 'text-white' : 'text-gray-800'}`}>Featured Projects</h3>
        <p className={`text-sm sm:text-base lg:text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Explore my latest work and creative solutions</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {projects.map((project, idx) => (
          <div 
            key={project.id} 
            className={`rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition hover:-translate-y-2 border group ${
              isDark 
                ? 'bg-gray-800 border-gray-700' 
                : 'bg-white border-purple-100'
            }`}
            data-aos="fade-up"
            data-aos-delay={idx * 100}
          >
            <div className={`${project.image} h-48 group-hover:scale-110 transition relative overflow-hidden`}>
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <div className="text-center">
                  <p className="text-white font-bold text-lg mb-3">View Project</p>
                  <div className="flex gap-3 justify-center">
                    <span className="text-white text-2xl">👁️</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 sm:p-8">
              <h4 className={`text-lg sm:text-2xl font-semibold mb-2 sm:mb-3 ${isDark ? 'text-white' : 'text-gray-800'}`}>{project.title}</h4>
              <p className={`text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{project.desc}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, i) => (
                  <span key={i} className="bg-purple-100 text-purple-700 px-4 py-1 rounded-full text-sm font-medium">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a 
                  href={project.github} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-purple-600 hover:text-pink-600 font-semibold transition"
                >
                  <span>💻 GitHub</span>
                </a>
                <a 
                  href={project.live} 
                  className="inline-flex items-center text-pink-600 hover:text-purple-600 font-semibold transition"
                >
                  <span>🔗 Live Demo</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
