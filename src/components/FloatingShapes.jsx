import React from 'react'

export default function FloatingShapes() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-purple-400 opacity-10 animate-bounce"></div>      
      <div className="absolute top-1/3 right-5 w-32 h-32 rounded-full bg-pink-400 opacity-5 animate-pulse"></div>      
      <div className="absolute bottom-1/4 left-1/4 w-24 h-24 rounded-full bg-blue-400 opacity-10" 
        style={{ animation: 'float 6s ease-in-out infinite' }}></div>
      
      <div className="absolute bottom-10 right-1/4 w-16 h-16 rounded-full bg-purple-300 opacity-5"
        style={{ animation: 'float 8s ease-in-out infinite 2s' }}></div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-30px); }
        }
      `}</style>
    </div>
  )
}
