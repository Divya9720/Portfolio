import React from 'react'

export default function Experience({ isDark }) {
  const experiences = [
    {
      role: 'Junior Frontend Developer',
      company: 'VahanWire Pvt. Ltd., Noida',
      duration: 'Jan 2025 – Present',
      desc: 'Developed responsive websites using React.js and Tailwind CSS based on Figma designs. Integrated REST APIs for seamless data flow and improved UI performance across browsers.'
    },
    {
      role: 'Frontend Developer Intern',
      company: 'VahanWire Pvt. Ltd., Noida',
      duration: 'Oct 2024 – Dec 2024',
      desc: 'Built responsive components using React.js, HTML, CSS, and JavaScript. Collaborated with senior developers to enhance UI/UX and optimize layouts.'
    },
    {
      role: 'Web Developer Intern',
      company: 'Zeabros Pvt. Ltd., Gurgaon',
      duration: 'Jul 2024 – Sep 2024',
      desc: 'Developed responsive web pages using HTML, CSS, JavaScript, and Bootstrap. Assisted in UI optimization and layout improvements.'
    }
  ]

  const education = [
    {
      degree: 'B.Tech in Computer Science & Engineering',
      school: 'Sunder Deep Engineering College, AKTU',
      year: '2022 – 2025 | CGPA: 7.8'
    },
    {
      degree: 'Diploma in Computer Science & Engineering',
      school: 'KM Mayawati Govt. Girls Polytechnic',
      year: '2019 – 2022 | Score: 78.55%'
    }
  ]

  return (
    <section id="experience" className={`max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20 ${isDark ? 'text-white' : ''}`}>
      <div className="text-center mb-10 sm:mb-16">
        <h3 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 ${isDark ? 'text-white' : 'text-gray-800'}`} data-aos="fade-down">Experience & Education</h3>
        <p className={`text-sm sm:text-base lg:text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'}`} data-aos="fade-up">My professional journey</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12">
        <div>
          <h4 className={`text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 ${isDark ? 'text-white' : 'text-gray-800'}`} data-aos="fade-right">Professional Experience</h4>
          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <div 
                key={i} 
                className={`rounded-2xl p-6 shadow-sm border-l-4 border-purple-500 hover:shadow-lg transition ${
                  isDark ? 'bg-gray-800' : 'bg-white'
                }`}
                data-aos="fade-right"
                data-aos-delay={i * 100}
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-1">
                  <h5 className={`text-base sm:text-xl font-bold ${isDark ? 'text-white' : 'text-gray-800'}`}>{exp.role}</h5>
                  <span className="text-purple-600 font-semibold text-xs sm:text-sm">{exp.duration}</span>
                </div>
                <p className="text-purple-600 font-medium mb-3">{exp.company}</p>
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>{exp.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className={`text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 ${isDark ? 'text-white' : 'text-gray-800'}`} data-aos="fade-left">Education</h4>
          <div className="space-y-6">
            {education.map((edu, i) => (
              <div 
                key={i} 
                className={`rounded-2xl p-6 shadow-sm border-l-4 border-pink-500 hover:shadow-lg transition ${
                  isDark ? 'bg-gray-800' : 'bg-white'
                }`}
                data-aos="fade-left"
                data-aos-delay={i * 100}
              >
                <h5 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-800'}`}>{edu.degree}</h5>
                <p className="text-pink-600 font-medium mb-2">{edu.school}</p>
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} font-semibold`}>{edu.year}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 sm:mt-8">
            <h4 className={`text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 ${isDark ? 'text-white' : 'text-gray-800'}`}>Certifications</h4>
            <div className="space-y-3">
              <div className={`rounded-lg p-4 shadow-sm border-l-4 border-indigo-500 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
                <p className={`font-semibold ${isDark ? 'text-white' : 'text-gray-800'}`}>Python Programming</p>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>CETPA - 2021</p>
              </div>
              <div className={`rounded-lg p-4 shadow-sm border-l-4 border-indigo-500 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
                <p className={`font-semibold ${isDark ? 'text-white' : 'text-gray-800'}`}>UI/UX Design</p>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Infosys - 2024</p>
              </div>
              <div className={`rounded-lg p-4 shadow-sm border-l-4 border-indigo-500 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
                <p className={`font-semibold ${isDark ? 'text-white' : 'text-gray-800'}`}>Introduction to Frontend Development</p>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Great Learning - 2024</p>
              </div>
              <div className={`rounded-lg p-4 shadow-sm border-l-4 border-indigo-500 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
                <p className={`font-semibold ${isDark ? 'text-white' : 'text-gray-800'}`}>Salesforce Training</p>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Honeywell - 2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
