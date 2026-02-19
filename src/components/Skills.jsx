import React from 'react'
import SkillBar from './SkillBar'

export default function Skills({ isDark }) {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap']
    },
    {
      category: 'Programming Languages',
      skills: ['JavaScript', 'Python', 'HTML', 'CSS']
    },
    {
      category: 'Tools & Platforms',
      skills: ['Git', 'GitHub', 'VS Code', 'Figma', 'PyCharm', 'npm']
    },
    {
      category: 'Database & Backend',
      skills: ['MySQL', 'SQLite', 'REST API', 'Django', 'API Integration']
    }
  ]

  return (
    <section id="skills" className={`max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20 rounded-3xl ${
      isDark
        ? 'bg-gradient-to-br from-gray-800 to-gray-700'
        : 'bg-gradient-to-br from-purple-50 to-pink-50'
    }`}>
      <div className="text-center mb-10 sm:mb-16">
        <h3 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 ${isDark ? 'text-white' : 'text-gray-800'}`} data-aos="fade-down">Technical Skills</h3>
        <p className={`text-sm sm:text-base lg:text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'}`} data-aos="fade-up">Technologies and tools I work with</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">
        {skillCategories.map((cat, idx) => (
          <div 
            key={idx} 
            className={`rounded-2xl p-8 shadow-sm border ${
              isDark
                ? 'bg-gray-900 border-gray-700'
                : 'bg-white border-purple-100'
            }`}
            data-aos="zoom-in"
            data-aos-delay={idx * 100}
          >
            <h4 className="text-lg sm:text-2xl font-bold text-purple-600 mb-4 sm:mb-6">{cat.category}</h4>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {cat.skills.map((skill, i) => (
                <span key={i} className="bg-gradient-to-r from-purple-100 to-pink-100 text-gray-800 px-5 py-2 rounded-full font-medium hover:shadow-md transition cursor-default border border-purple-200">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 space-y-8">
        <h4 className={`text-2xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-800'}`}>Proficiency Levels</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <SkillBar skill="React.js" percentage={90} isDark={isDark} />
            <SkillBar skill="JavaScript" percentage={88} isDark={isDark} />
            <SkillBar skill="Tailwind CSS" percentage={92} isDark={isDark} />
            <SkillBar skill="UI Design" percentage={85} isDark={isDark} />
          </div>
          <div>
            <SkillBar skill="Problem Solving" percentage={95} isDark={isDark} />
            <SkillBar skill="API Integration" percentage={87} isDark={isDark} />
            <SkillBar skill="Responsive Design" percentage={90} isDark={isDark} />
            <SkillBar skill="Git & Version Control" percentage={89} isDark={isDark} />
          </div>
        </div>
      </div>
    </section>
  )
}
